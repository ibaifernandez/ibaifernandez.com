import { test, expect } from '@playwright/test';

test.describe('Coming Soon page — ibaifernandez.com', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // ─── Language & SEO ───────────────────────────────────────────────────────

  test('html[lang] is "en"', async ({ page }) => {
    const lang = await page.getAttribute('html', 'lang');
    expect(lang).toBe('en');
  });

  test('<title> contains "Ibai Fernández"', async ({ page }) => {
    await expect(page).toHaveTitle(/Ibai Fern[aá]ndez/i);
  });

  test('<meta name="description"> is present and non-empty', async ({ page }) => {
    const content = await page.getAttribute('meta[name="description"]', 'content');
    expect(content).toBeTruthy();
    expect(content!.length).toBeGreaterThan(20);
  });

  test('<meta property="og:title"> is present', async ({ page }) => {
    const content = await page.getAttribute('meta[property="og:title"]', 'content');
    expect(content).toBeTruthy();
  });

  test('<meta property="og:image"> is present', async ({ page }) => {
    const content = await page.getAttribute('meta[property="og:image"]', 'content');
    expect(content).toBeTruthy();
  });

  test('<meta property="og:description"> is present and non-empty', async ({ page }) => {
    const content = await page.getAttribute('meta[property="og:description"]', 'content');
    expect(content).toBeTruthy();
    expect(content!.length).toBeGreaterThan(20);
  });

  // ─── No Tailwind CDN ─────────────────────────────────────────────────────

  test('Tailwind CDN script is NOT present in page source', async ({ page }) => {
    const content = await page.content();
    expect(content).not.toContain('cdn.tailwindcss.com');
  });

  // ─── Visual Content ───────────────────────────────────────────────────────

  test('"PRÓXIMAMENTE" label is visible', async ({ page }) => {
    const el = page.getByText(/PR[ÓO]XIMAMENTE/i).first();
    await expect(el).toBeVisible();
  });

  test('"Ibai Fernández" heading is visible', async ({ page }) => {
    const el = page.getByRole('heading', { name: /Ibai/i }).first();
    await expect(el).toBeVisible();
  });

  test('Hero portrait image is present', async ({ page }) => {
    const img = page.locator('img[alt*="Ibai Fernández"]').first();
    await expect(img).toBeVisible();
  });

  test('Marquee / skills ticker is present', async ({ page }) => {
    const marquee = page.locator('.animate-marquee').first();
    await expect(marquee).toBeVisible();
    const text = await marquee.innerText();
    expect(text).toMatch(/Full-Stack/i);
  });

  // ─── CTAs & Links ─────────────────────────────────────────────────────────

  test('"View Portfolio" CTA links to portfolio subdomain', async ({ page }) => {
    const cta = page.locator('a[href="https://portfolio.ibaifernandez.com/"]').first();
    await expect(cta).toBeVisible();
  });

  test('Contact mailto link is present', async ({ page }) => {
    const mailto = page.locator('a[href="mailto:info@ibaifernandez.com"]');
    await expect(mailto).toBeVisible();
  });

  // ─── Navigation Social Links ──────────────────────────────────────────────

  test('YouTube nav link is present with correct href', async ({ page }) => {
    const link = page.locator('a[href="https://youtube.com/@the-if-show"]');
    await expect(link).toBeVisible();
  });

  test('LinkedIn nav link is present with correct href', async ({ page }) => {
    const link = page.locator('a[href="https://linkedin.com/in/ibaifernandez"]');
    await expect(link).toBeVisible();
  });

  test('GitHub nav link is present with correct href', async ({ page }) => {
    const link = page.locator('a[href="https://github.com/ibaifernandez"]');
    await expect(link).toBeVisible();
  });

});
