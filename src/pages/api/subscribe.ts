import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get('email');
    const turnstileResponse = data.get('cf-turnstile-response');

    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ error: 'Dirección de correo requerida.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!turnstileResponse) {
      return new Response(JSON.stringify({ error: 'Por favor, completa el desafío de seguridad (Captcha).' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Verify Turnstile
    const turnstileVerifyRequest = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: import.meta.env.TURNSTILE_SECRET_KEY,
        response: turnstileResponse.toString(),
      }),
    });

    const turnstileVerifyResult = await turnstileVerifyRequest.json();

    if (!turnstileVerifyResult.success) {
      console.error('Turnstile verification failed:', turnstileVerifyResult);
      return new Response(JSON.stringify({ error: 'Verificación de seguridad fallida. Reintenta.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${import.meta.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      const result = await res.json();
      console.error('MailerLite API Error:', result);
      return new Response(JSON.stringify({ error: 'Error al procesar la suscripción en MailerLite.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, message: '¡Te has suscrito correctamente!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error interno en /api/subscribe:', error);
    return new Response(JSON.stringify({ error: 'Error interno de conexión con el servidor.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
