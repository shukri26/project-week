import React from "react";
import {Pie, PieChart, Tooltip} from'recharts';

const Chart = ({electric, fuel, shipping})=> {
        
    
    return(
        <div>
            <h1>Charts(Electricity-blue color; Fuel-Black color; Shipping-pink color)</h1>
            <PieChart width={730} height={400}>
                <Pie data={electric} dataKey="carbon_kg" nameKey="electricity_value" cx="20%" cy="20%" innerRadius={30} outerRadius={60} fill="#0f04df" label/>
                <Pie data={fuel} dataKey="carbon_kg" nameKey="fuel_source_value" cx="40%" cy="40%" innerRadius={40} outerRadius={70} fill="#0d0d01eb" label />
                <Pie data={shipping} dataKey="carbon_kg" nameKey="weight_value" cx="60%" cy="60%" innerRadius={40} outerRadius={70} fill="#e311d8" label />
            <Tooltip/>
            </PieChart>
        </div>
    )
}

export default Chart;