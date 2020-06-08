import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { options } from './Options'
import Citys from './Citys'



export default function Grafica2() {


  const [datos2, setdatos2] = useState([])
  const [xdata, setxdata] = useState([])
  const [datap, setdatap] = useState([]);
  const [clima, setclima] = useState(0);
  const [city, setcity] = useState('')

  const data = {
    labels: xdata,
    datasets: [
      {
        label: 'DATOS',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: datos2
      }
    ]
  };

  const dataTest = () => {
    const interval = setInterval(fetchWeather, 5000)
    setdatap(interval)
  }


  const fetchWeather = async () => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c522b92a13cba127c9b88450c5f8de4&units=metric`)
    const res_json = await res.json()
    console.log('las variables son',res_json)
    setclima(clima=>res_json.main)
    
    setdatos2(datos2 => [...datos2, res_json.main.temp])
    setxdata(xdata => [...xdata, datos2.length])
  }


  const stopTime = () => {
    setdatap(clearInterval)
  }

  const changeLocation = (location) => {
    setcity(location)
  }

  return (
    <div className="m-5">
      <h1 className="text-center mb-5">Temperatura <span className="text-secondary">{city}</span></h1>
      <div className="row">
        <div className="col-md-8">
          <Line data={data} options={options} />
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <Citys changeLocation={changeLocation}></Citys>
              <button type="button" className="btn btn-outline-success btn-lg m-2" onClick={dataTest}>Star test</button>
              <button type="button" className="btn btn-outline-danger btn-lg" onClick={stopTime}>Stop test</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
      <div className="card p-2" id="card-body">
      <h1 className="text-center mb-5">Datos del cilma</h1>
        
          <div className="row">
            <div className="col-md-4 text-center" id="col1">
              <h3> <span><i className="fas fa-temperature-high"></i></span></h3>
              <h3>Temp</h3>
              <h2>{clima.temp}ºC</h2>
              
              
            </div>
            <div className="col-md-4 text-center" id="col2">
              <h3><span><i className="fas fa-wind"></i></span></h3>
              <h3>press</h3>
              <h2>{clima.pressure} hpa</h2>
              
              
              
            </div>
            <div className="col-md-4 text-center" id="col1">
              <h3><span><i className="fas fa-cloud-rain"></i></span></h3>
              <h3>Hum</h3>
              <h2>{clima.humidity} %</h2>
            </div>
        
        </div>
      </div>
      </div>


    </div>
  )

}
