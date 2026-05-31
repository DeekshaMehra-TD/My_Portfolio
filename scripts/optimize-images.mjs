/**
 * Image Optimization Script
 * Converts all PNG/JPG images in public/ to WebP format with proper sizing.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

// Max widths for different image categories
const MAX_WIDTH = 1600;      // General max width
const WEBP_QUALITY = 80;     // WebP quality (80 is visually lossless)

const SUPPORTED_EXTS = ['.png', '.jpg', '.jpeg'];

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getAllImages(fullPath));
    } else if (SUPPORTED_EXTS.includes(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(filePath) {
  const relPath = relative(PUBLIC_DIR, filePath);
  const ext = extname(filePath).toLowerCase();
  const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  try {
    const originalStats = await stat(filePath);
    const originalSize = originalStats.size;

    const metadata = await sharp(filePath).metadata();
    const needsResize = metadata.width > MAX_WIDTH;

    let pipeline = sharp(filePath);
    
    if (needsResize) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }

    // Convert to WebP
    await pipeline
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(webpPath);

    const webpStats = await stat(webpPath);
    const savings = ((1 - webpStats.size / originalSize) * 100).toFixed(1);

    console.log(
      `✅ ${relPath}` +
      `\n   ${(originalSize / 1024).toFixed(0)} KiB → ${(webpStats.size / 1024).toFixed(0)} KiB (${savings}% smaller)` +
      (needsResize ? `  [resized ${metadata.width}→${MAX_WIDTH}px]` : '') +
      `\n   → ${relative(PUBLIC_DIR, webpPath)}`
    );

    return { original: originalSize, optimized: webpStats.size };
  } catch (err) {
    console.error(`❌ Failed: ${relPath} — ${err.message}`);
    return { original: 0, optimized: 0 };
  }
}

async function main() {
  console.log('🔍 Scanning public/ for images...\n');
  
  const images = await getAllImages(PUBLIC_DIR);
  console.log(`Found ${images.length} images to optimize.\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const img of images) {
    const result = await optimizeImage(img);
    totalOriginal += result.original;
    totalOptimized += result.optimized;
    console.log('');
  }

  console.log('━'.repeat(50));
  console.log(`📊 Total: ${(totalOriginal / 1024 / 1024).toFixed(1)} MiB → ${(totalOptimized / 1024 / 1024).toFixed(1)} MiB`);
  console.log(`💾 Saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(1)} MiB (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%)`);
  console.log('\n⚠️  Now update your code references from .png/.jpg to .webp');
}

main().catch(console.error);
