import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

/**
 * On-demand ISR revalidation endpoint.
 * Called by the CMS after an editor clicks "Publish".
 *
 * Request body:
 *   { type: 'trip' | 'blog' | 'destination' | 'faq' | 'review' | 'gallery', slug?: string }
 *
 * For slug-based content (trip, blog, destination), also revalidates the listing page.
 * Authentication: x-revalidate-secret header must match REVALIDATE_SECRET env var.
 */
export async function POST(request: NextRequest) {
  // Security check — reject unauthorized callers
  const secret = request.headers.get('x-revalidate-secret');
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { type?: string; slug?: string; path?: string; tag?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { type, slug, path, tag } = body;
  const revalidated: string[] = [];

  // ── Low-level escape hatch (path/tag directly) ───────────────────────────
  if (tag) { revalidateTag(tag); revalidated.push(`tag:${tag}`); }
  if (path) { revalidatePath(path, 'page'); revalidated.push(`path:${path}`); }

  // ── High-level typed revalidation ────────────────────────────────────────
  switch (type) {
    case 'trip':
      // Revalidate the specific trip detail page + the all-trips listing
      if (slug) {
        revalidatePath(`/trips/${slug}`, 'page');
        revalidated.push(`/trips/${slug}`);
      }
      revalidatePath('/trips', 'page');
      revalidated.push('/trips');
      break;

    case 'blog':
      // Blog post is SSG + on-demand — only the specific post is revalidated
      if (slug) {
        revalidatePath(`/blog/${slug}`, 'page');
        revalidated.push(`/blog/${slug}`);
      }
      revalidatePath('/blog', 'page');
      revalidated.push('/blog');
      break;

    case 'destination':
      if (slug) {
        revalidatePath(`/destinations/${slug}`, 'page');
        revalidated.push(`/destinations/${slug}`);
      }
      revalidatePath('/destinations', 'page');
      revalidated.push('/destinations');
      break;

    case 'faq':
      revalidatePath('/faq', 'page');
      revalidated.push('/faq');
      break;

    case 'review':
      revalidatePath('/reviews', 'page');
      revalidated.push('/reviews');
      break;

    case 'gallery':
      revalidatePath('/gallery', 'page');
      revalidated.push('/gallery');
      break;

    case 'home':
      revalidatePath('/', 'page');
      revalidated.push('/');
      break;

    default:
      if (type) {
        return NextResponse.json(
          { error: `Unknown type: "${type}". Valid types: trip, blog, destination, faq, review, gallery, home` },
          { status: 400 }
        );
      }
  }

  if (revalidated.length === 0) {
    return NextResponse.json({ error: 'No paths or tags provided' }, { status: 400 });
  }

  return NextResponse.json({ revalidated, now: Date.now() });
}
