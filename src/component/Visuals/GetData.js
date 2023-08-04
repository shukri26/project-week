import React, {useEffect, useState} from "react";
import Chart from "./Chart";
import Table from "./Table";

const GetData = () => {
    
    const [electricData, setElectricData] = useState([])
    const [fuelData, setFuelData] = useState([])
    const [shippingData, setShippingData] = useState([])
    
    useEffect(() => {
        fetch('https://carbo-data-ntwigamartin.vercel.app/data')
        .then(response => response.json())
        .then(data => {
            setElectricData(data.electricity)
            setFuelData(data.fuel)
            setShippingData(data.shipping)
    })
    }, [])
    

    return (
        <div>
            <Table electric={electricData} fuel={fuelData} shipping={shippingData}/>
            <Chart electric={electricData} fuel={fuelData} shipping={shippingData}/>
        </div>
    )
}

export default GetData;