/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

const imagesToOptimize = [
    {
        input: 'Capture-2025-09-28-222601.png',
        output: 'hero-desktop.webp',
        width: 1920,
        quality: 80
    },
    {
        input: 'Capture-2025-09-28-225210.png',
        output: 'hero-mobile.webp',
        width: 800,
        quality: 80
    },
    {
        input: 'Drone_Golf_Course.png',
        output: 'case-study-golf.webp',
        width: 800,
        quality: 80
    },
    {
        input: 'Drone_Spraying_Paddock.png',
        output: 'case-study-cropping.webp',
        width: 800,
        quality: 80
    },
    {
        input: 'Drone_Spraying.png',
        output: 'case-study-council.webp',
        width: 800,
        quality: 80
    }
];

async function optimizeImages() {
    console.log('Starting image optimization...');

    for (const image of imagesToOptimize) {
        const inputPath = path.join(publicDir, image.input);
        const outputPath = path.join(publicDir, image.output);

        if (fs.existsSync(inputPath)) {
            try {
                await sharp(inputPath)
                    .resize({ width: image.width, withoutEnlargement: true })
                    .webp({ quality: image.quality })
                    .toFile(outputPath);

                console.log(`Optimized: ${image.input} -> ${image.output}`);
            } catch (error) {
                console.error(`Error optimizing ${image.input}:`, error);
            }
        } else {
            console.warn(`Source file not found: ${image.input}`);
        }
    }

    console.log('Image optimization complete!');
}

optimizeImages();
