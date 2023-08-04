import React, {useState} from "react";
import Ecard from "./EmissionCard";
import { Link } from 'react-router-dom';

const Shipping = () => {
    const [response, setResponse] = useState({});
    const [weight, setWeight] = useState('');
    const [distance, setDistance] = useState('');
    
    
    
    const handleWeightChange = (event) => {
      setWeight(event.target.value);
    }

    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
      }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const requestBody = {
        type: "shipping",
        weight_value: ((weight) * 1000),
        weight_unit: "g",
        distance_value: (distance),
        distance_unit: "km",
        transport_method: "truck"
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
                  <h4 className="header">Enter the Shipping Details to estimate</h4>
                  <form className="form-f" onSubmit={handleSubmit}>
                      <input className="form-input" type="number" value={weight} onChange={handleWeightChange} placeholder="weight in KG" />
                      <input className="form-input" type="number" value={distance} onChange={handleDistanceChange} placeholder="distance in KM" />
                      <button className="form-btn" type="submit">Estimate</button>
                  </form>
                  <br />
                  <Link className="form-btn" to="../visual/GetData" >TableLink</Link>
              </div>
  
              <div>
        {response.data && response.data.attributes && <Ecard amount={response.data.attributes.carbon_kg}/>}
        </div>
              
          </div>
      )
  }

export default Shipping;