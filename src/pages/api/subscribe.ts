import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Accept both JSON and FormData
    const contentType = request.headers.get('content-type') ?? '';
    let email: string | null = null;

    if (contentType.includes('application/json')) {
      const body = await request.json();
      email = body?.email ?? null;
    } else {
      const data = await request.formData();
      email = data.get('email') as string | null;
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Dirección de correo no válida.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({ email: email.toLowerCase().trim() }),
    });

    if (!res.ok) {
      const result = await res.json();
      // 409 = already subscribed — treat as success
      if (res.status === 409) {
        return new Response(
          JSON.stringify({ success: true, message: 'Ya estás suscrito. ¡Gracias!' }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }
      console.error('MailerLite API Error:', result);
      return new Response(
        JSON.stringify({ error: 'Error al procesar la suscripción.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: '¡Te has suscrito correctamente!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error interno en /api/subscribe:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno. Inténtalo de nuevo.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
