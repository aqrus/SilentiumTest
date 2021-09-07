import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

function App() {

  const [color, setColor] = useState("blue");

  const setColorhighlight = (e) => {

      async function getColor() {

        try {
            const { data: {nextstep} } = await axios.get(`/api/transition/${color}?nextstep=${e.target.value}`);
            setColor(nextstep)
        } catch (error) {
            alert(error.response.data.error)
        }

      }

      getColor()
      
  }

  const resetColor = () => {
    cookies.remove('color');
    setColor("blue");
  }

  return (
    <div className="container-fluid flex">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" 
                value="green" 
                className={`btn btn-success btn-circle ${color === "green" ? 'highlight': ''}`} 
                onClick={setColorhighlight}>Green
              </button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 flex">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <button type="button" 
                value="blue" 
                className={`btn btn-info btn-circle ${color === "blue" ? 'highlight': ''}`} 
                onClick={setColorhighlight}>Blue
              </button>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <button type="button" 
                className="btn btn-lg btn-danger" onClick={resetColor}>Reset
                </button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" 
              value="yellow" 
              className={`btn btn-warning btn-circle ${color === "yellow" ? 'highlight': ''}`} 
              onClick={setColorhighlight}>Yellow
            </button>
          </div>
        </div>
    </div>
    
  );
}

export default App;
