import React, { useState } from "react";
import Ecard from "./EmissionCard";
import { Link } from 'react-router-dom';

const Stima = () => {
  const [response, setResponse] = useState({});
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      type: 'electricity',
      electricity_unit: 'kwh',
      electricity_value: (inputValue),
      country: 'gb',
    };

    try {
      const res = await fetch('https://www.carboninterface.com/api/v1/estimates', {
        method: 'POST',
        headers: {
          Authorization: `Bearer v7qsKOiNCcIiEUooI5cmTA`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error(err);
    }
  };



  return(
    <div className="form-container">
        <div className="form-wrapper">
            <h4 className="header">Enter the Electricity Units to estimate</h4>
            <form className="form-f" onSubmit={handleSubmit}>
                <input className="form-input" type="number" value={inputValue} onChange={handleChange} placeholder="Kwh Units" />
                <button className="form-btn" type="submit">Estimate</button>
            </form>
            <br />
            <Link className="form-btn" to="../visual/GetData" >Tables & Charts</Link>
        </div>

        {response.data && response.data.attributes && <Ecard amount={response.data.attributes.carbon_kg}/>}
    </div>
  )
}

export default Stima;