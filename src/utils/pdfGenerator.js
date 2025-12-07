import { jsPDF } from "jspdf";

export const generateCertificate = (chapterTitle) => {
    const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4"
    });

    // Background
    doc.setFillColor(26, 26, 26); // Dark bg
    doc.rect(0, 0, 297, 210, "F");

    // Border
    doc.setDrawColor(255, 126, 179); // Sakura pink
    doc.setLineWidth(2);
    doc.rect(10, 10, 277, 190);

    // Title
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(40);
    doc.text("Certificate of Completion", 148.5, 60, { align: "center" });

    // Subtitle
    doc.setFontSize(20);
    doc.setFont("helvetica", "normal");
    doc.text("This certifies that the reader has successfully completed", 148.5, 90, { align: "center" });

    // Chapter Title
    doc.setTextColor(255, 126, 179); // Pink
    doc.setFontSize(30);
    doc.setFont("helvetica", "bold");
    doc.text(chapterTitle, 148.5, 120, { align: "center" });

    // Date
    const date = new Date().toLocaleDateString();
    doc.setTextColor(200, 200, 200);
    doc.setFontSize(16);
    doc.setFont("helvetica", "italic");
    doc.text(`Issued on ${date}`, 148.5, 150, { align: "center" });

    // Footer
    doc.setFontSize(12);
    doc.text("Sakura Story Web Novel", 148.5, 180, { align: "center" });

    doc.save(`Certificate_${chapterTitle.replace(/\s+/g, '_')}.pdf`);
};
