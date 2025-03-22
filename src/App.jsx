import { useRef, useState } from 'react'
import './App.css'
import LineChartWithReference from './components/LineChartWithReference'
import AreaChartWithGradient from './components/AreaChartFillByValue'
import SynchronizedAreaCharts from './components/AreaChart'
import CustomBarChart from './components/BarCharts'
import TwoPieChart from './components/TwoPieCharts'
import ActivePieChart from './components/ActivePieChart'
import TreeMapWithCustomContent from './components/TreeMapResponsive'
import ComposedBarChart from './components/ComposedBarChart'
import CustomAlignedChart from './CustomAlignChart'
import Invoice from './components/PrintPdf'
import PrintTest from './components/Print'
import PrintableComponent from './components/PrintableComponent';
import { useReactToPrint } from 'react-to-print';

const ButtonComponent = (props) => {
  const handlePrint = useReactToPrint({
    content: () => props.printRef.current,
  });

  return (
    <>
      <button 
        onClick={handlePrint} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Download PDF
      </button>
    </>
  );
};


function App() {
  const printRef = useRef();
  console.log("print ref", printRef);

  return (
    <>
        <div className='flex justify-center flex-col gap-2'>
          {/* <ButtonComponent printRef={printRef}/> */}
          <PrintableComponent/>
          {/* <Invoice/> */}
        </div>
    </>
  )
}

export default App
