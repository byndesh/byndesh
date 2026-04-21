/**
 * Cloudflare R2 upload utility for the CMS.
 * Generates a pre-signed URL for direct browser upload.
 */

export interface UploadResult {
  key: string;
  url: string;
}

export async function uploadToR2(file: File, folder = 'media'): Promise<UploadResult> {
  const key = `${folder}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '-')}`;

  // TODO: implement actual R2 upload using @aws-sdk/client-s3 with pre-signed URLs
  // or use Cloudflare Images API directly

  const url = `${process.env.R2_PUBLIC_URL}/${key}`;
  return { key, url };
}

export function getPublicUrl(key: string): string {
  return `${process.env.R2_PUBLIC_URL}/${key}`;
}
