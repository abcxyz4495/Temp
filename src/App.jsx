import { pdfjs } from "react-pdf";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "./Refrence bk.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url
).toString();

import "./App.css";

function App() {
	const pdf1 =
		"https://firebasestorage.googleapis.com/v0/b/r-block.appspot.com/o/dummy.pdf?alt=media&token=7eec34d6-4a29-42ab-b3f0-df7f6e817770#toolbar=0";
	return <PDFViewer pdf={pdf1} />;
}

export default App;

function PDFViewer({ pdf }) {
	const [numPages, setNumPages] = useState();
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<div>
			{<embed src={pdf} width="640" height="480"></embed>}
			{/* <iframe
				src="https://drive.google.com/file/d/1kJJeabYl-NH4nsNV8kLs-qTUYESbUfMx/preview"
				width="640"
				height="480"
				allow="autoplay"
			></iframe> */}
			{/* <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
				{Array.apply(null, Array(numPages))
					.map((x, i) => i + 1)
					.map((page) => {
						return (
							<Page
								key={page}
								pageNumber={page}
								renderTextLayer={false}
								renderAnnotationLayer={false}
							/>
						);
					})}
			</Document> */}
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</div>
	);
}
