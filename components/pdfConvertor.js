import jsPDF from "jspdf";
export const PDFConvertor = ({ value }) => {
    let doc = new jsPDF("p", "px", [595, 842],)
    let source = document.getElementById("mainDiv")

    doc.html(source, {
        callback: function (doc) {
            doc.save("sample.pdf");
        }
    });

    value.setValue(false)

}





