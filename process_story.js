import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePath = path.resolve(__dirname, '../sakura.txt');
const outputPath = path.resolve(__dirname, 'src/data/chapters.json');
const outputDir = path.dirname(outputPath);

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

try {
    const data = fs.readFileSync(sourcePath, 'utf8');
    const lines = data.split(/\r?\n/);
    
    // Filter out empty lines if needed, or keep them for spacing. 
    // The file view showed line numbers "1: ...", I need to remove those if they are in the file.
    // Wait, the view_file tool ADDS line numbers. The file itself probably doesn't have them.
    // I will assume the file is clean text.
    
    const totalLines = lines.length;
    const chapterCount = 20;
    const linesPerChapter = Math.ceil(totalLines / chapterCount);
    
    const chapters = [];
    
    for (let i = 0; i < chapterCount; i++) {
        const start = i * linesPerChapter;
        const end = Math.min((i + 1) * linesPerChapter, totalLines);
        const chapterLines = lines.slice(start, end);
        
        if (chapterLines.length === 0) break;
        
        chapters.push({
            id: i + 1,
            title: `Chapter ${i + 1}`,
            content: chapterLines.join('\n')
        });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(chapters, null, 2));
    console.log(`Successfully created ${chapters.length} chapters in ${outputPath}`);
    
} catch (err) {
    console.error('Error processing file:', err);
}
