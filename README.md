# Sakura Story Web Novel App

This is a modern web novel application generated from `sakura.txt`.

## Features
- **20 Chapters**: The story has been automatically split into 20 parts.
- **Modern Reading Experience**: Dark mode, serif typography for readability.
- **Completion Certificates**: Generate a PDF certificate after finishing each chapter.

## How to Run

1. Open a terminal in this folder.
2. Run `npm install` (if you haven't already).
3. Run `npm run dev` to start the local server.
4. Open the link (usually `http://localhost:5173`) in your browser.

## Project Structure
- `src/data/chapters.json`: The processed story content.
- `src/components`: React components.
- `src/utils`: Helper functions (PDF generation).
