// Otimiza as imagens da pasta img/ NO MESMO SÍTIO (mantém nomes e formatos).
// Uso:  npm i sharp   e depois   node optimize-images.mjs
// Faça uma cópia da pasta img/ antes de correr.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const DIR = "img", MAX_WIDTH = 1400;
for (const f of fs.readdirSync(DIR)) {
  const ext = path.extname(f).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
  const p = path.join(DIR, f), before = fs.readFileSync(p);
  let img = sharp(before).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
  img = ext === ".png" ? img.png({ compressionLevel: 9, palette: true, quality: 85 }) : img.jpeg({ quality: 80, mozjpeg: true });
  const after = await img.toBuffer();
  if (after.length < before.length) {
    fs.writeFileSync(p, after);
    console.log(`${f}: ${(before.length/1024)|0} KB -> ${(after.length/1024)|0} KB`);
  } else console.log(`${f}: já otimizada`);
}
