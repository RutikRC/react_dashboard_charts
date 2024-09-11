import React from "react";
import ComposedBarChart from "./components/ComposedBarChart";
import ActivePieChart from "./components/ActivePieChart";

const CustomAlignedChart = () => {
    return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <ComposedBarChart />
                {/* <CustomBarChart /> */}
                <ActivePieChart />
            </div>
        </>
    );
};

export default CustomAlignedChart;