import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import { Routes, Route } from "react-router-dom";
import html2canvas from "html2canvas";
import FileSaver from "file-saver";

function App() {
  // function handleDownload() {
  //   const element = document.querySelector(".html-to-pdf");
  //   // html2pdf(element, {
  //   //   margin: 1,
  //   //   filename: "download.pdf",
  //   //   image: { type: "jpeg", quality: 0.98 },
  //   //   html2canvas: { dpi: 192, letterRendering: true },
  //   //   jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
  //   // });
  //   // .then(function (pdf) {
  //   //   FileSaver.saveAs(pdf.output("blob"), "download.pdf");
  //   // });
  //   html2canvas(element).then((canvas) => {
  //     canvas.toBlob((blob) => {
  //       saveAs(blob, "screenshot.png");
  //     });
  //   });
  // }

  return (
    <div className="html-to-pdf">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
