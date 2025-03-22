import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import PrintableComponent from "./PrintableComponent";

const PrintTest = () => {
  const printRef = useRef();

  return (
    <div style={{ padding: 20 }}>
      <h2>React To Print Example (No forwardRef)</h2>

      <ReactToPrint
        trigger={() => <button>Print This Component</button>}
        content={() => printRef.current}
      />

      {/* Wrap PrintableComponent inside a div with the ref */}
      <div ref={printRef} style={{ marginTop: 20, padding: 10, border: "1px solid #ccc" }}>
        <PrintableComponent />
      </div>
    </div>
  );
};

export default PrintTest;
