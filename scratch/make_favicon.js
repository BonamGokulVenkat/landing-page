const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateCircularFavicon() {
  const rootDir = path.resolve(__dirname, '..');
  const inputPath = path.join(rootDir, 'public', 'images', 'profile-hero.jpg');
  const outputPath = path.join(rootDir, 'public', 'favicon.ico');
  const outputPngPath = path.join(rootDir, 'public', 'favicon.png');

  console.log('Input path:', inputPath);
  console.log('Output path:', outputPath);

  if (!fs.existsSync(inputPath)) {
    console.error('Error: profile-hero.jpg not found at', inputPath);
    return;
  }

  const width = 128;
  const height = 128;
  const r = 64;

  // Create a SVG circle mask
  const circleMask = Buffer.from(
    `<svg width="${width}" height="${height}">
      <circle cx="${r}" cy="${r}" r="${r}" fill="white" />
    </svg>`
  );

  // Apply composite mask to generate circular PNG
  await sharp(inputPath)
    .resize(width, height)
    .composite([{
      input: circleMask,
      blend: 'dest-in'
    }])
    .png()
    .toFile(outputPngPath);

  // Also copy to favicon.ico as a fallback
  fs.copyFileSync(outputPngPath, outputPath);

  console.log('Successfully generated circular favicon.ico and favicon.png!');
}

generateCircularFavicon().catch(console.error);
