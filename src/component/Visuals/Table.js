import React from "react";

const Table = ({electric, fuel, shipping}) => {

    const elecRow = electric.map(item=>
                    <tr>
                        <td>{item.electricity_value}</td>
                        <td>{item.carbon_g}</td>
                        <td>{item.carbon_lb}</td>
                        <td>{item.carbon_kg}</td>
                        <td>{item.carbon_mt}</td>
                    </tr> )
        
    const fuelRow = fuel.map(item=>
                    <tr>
                        <td>{item.fuel_source_value}</td>
                        <td>{item.carbon_g}</td>
                        <td>{item.carbon_lb}</td>
                        <td>{item.carbon_kg}</td>
                        <td>{item.carbon_mt}</td>
                    </tr> )

    const shippingRow = shipping.map(item=>
                    <tr>
                        <td>{item.weight_value}</td>
                        <td>{item.carbon_g}</td>
                        <td>{item.carbon_lb}</td>
                        <td>{item.carbon_kg}</td>
                        <td>{item.carbon_mt}</td>
                    </tr> )
    return (
        <div>
            <h3>Electricity Emissions Table</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>electricity_value</th>
                        <th>carbon_g</th>
                        <th>carbon_lb</th>
                        <th>carbon_kg</th>
                        <th>carbon_mt</th>
                    </tr>
                </thead>
                <tbody>
                    {elecRow}
                </tbody>
            </table>
            <br />
            <h3>Fuel Emissions Table</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>fuel_source_value</th>
                        <th>carbon_g</th>
                        <th>carbon_lb</th>
                        <th>carbon_kg</th>
                        <th>carbon_mt</th>
                    </tr>
                </thead>
                <tbody>
                    {fuelRow}
                </tbody>
            </table>
            <br />
            <h3>Shipping Emissions Table</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>shipping_weight_value</th>
                        <th>carbon_g</th>
                        <th>carbon_lb</th>
                        <th>carbon_kg</th>
                        <th>carbon_mt</th>
                    </tr>
                </thead>
                <tbody>
                    {shippingRow}
                </tbody>
            </table>
        </div>
    )
}

export default Table;