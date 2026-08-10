import JSZip from 'jszip';
import { SiteConfig } from '@/types/site-config';
import { SiteConfigSchema } from '../validation/config-schema';
import { getAllImagesFromDB } from './indexed-db';

export function downloadJsonFile(data: unknown, filename = 'site-config.json') {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function downloadZipBackup(config: SiteConfig) {
  const zip = new JSZip();

  // Add site config json
  zip.file('site-config.json', JSON.stringify(config, null, 2));

  // Add images from IndexedDB
  const images = await getAllImagesFromDB();
  const imgFolder = zip.folder('images');

  if (imgFolder) {
    Object.entries(images).forEach(([key, dataUrl]) => {
      if (dataUrl && dataUrl.startsWith('data:image/')) {
        const parts = dataUrl.split(',');
        const base64Data = parts[1];
        const mime = parts[0].match(/:(.*?);/)?.[1] || 'image/png';
        const ext = mime.split('/')[1] || 'png';
        const cleanKey = key.replace(/[^a-zA-Z0-9_-]/g, '_');
        imgFolder.file(`${cleanKey}.${ext}`, base64Data, { base64: true });
      }
    });
  }

  const content = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(content);

  const safeName = config.business.shortName || config.business.name || 'site';
  const cleanFileName = `${safeName.toLowerCase().replace(/[^a-z0-9]/g, '_')}_yedek.zip`;

  const link = document.createElement('a');
  link.href = url;
  link.download = cleanFileName;
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function parseAndValidateJsonFile(file: File): Promise<{ success: boolean; data?: SiteConfig; error?: string }> {
  try {
    const text = await file.text();
    const rawJson = JSON.parse(text);

    const validated = SiteConfigSchema.safeParse(rawJson);
    if (!validated.success) {
      const issueMsg = validated.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join(', ');
      return { success: false, error: `Geçersiz yapılandırma dosyası: ${issueMsg}` };
    }

    return { success: true, data: validated.data as SiteConfig };
  } catch (err: any) {
    return { success: false, error: `JSON Okuma Hatası: ${err?.message || 'Dosya okunamadı'}` };
  }
}
