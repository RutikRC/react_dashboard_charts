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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='flex'>
          <AreaChartWithGradient />
          <SynchronizedAreaCharts />
          {/* <TreeMapWithCustomContent /> */}
          <ComposedBarChart/>
          {/* <CustomBarChart /> */}
          <ActivePieChart />
        </div>
        {/* <TwoPieChart /> */}
        <LineChartWithReference />
      </div>
    </>
  )
}

export default App
