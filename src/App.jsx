import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='flex'>
          {/* <CustomAlignedChart/> */}
          <ComposedBarChart />
          {/* <CustomBarChart /> */}
          <ActivePieChart />
          <AreaChartWithGradient />
          <SynchronizedAreaCharts />
          {/* <TreeMapWithCustomContent /> */}
        </div>
        {/* <TwoPieChart /> */}
        <LineChartWithReference />
    </>
  )
}

export default App
