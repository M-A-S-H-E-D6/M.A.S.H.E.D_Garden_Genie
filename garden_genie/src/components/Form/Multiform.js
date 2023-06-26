import React, {useState, useEffect} from "react";
import Time from "./Time";
import Space from "./Space";
import Region from "./Region";
import Accessibility from "./Accessibility";
import Budget from "./Budget";
import logo from "../../images/Logo.png";

function Multiform(props) {

  const [step, setStep] = useState(1);

// || Comparing the plants to user input

/*
Making a filter based on time

user inputs:
- minimum
- moderate
- noTimeConstraints

Database choices:
- Watering
- Maintenance

1. Get information from database
  - async function that get uses fetch() ✔

2. Compare userInput to database information
  - The data recieved from the database will enter a state variable - it will become objects within an array
    - Depending on the user input, we need to find plants that have specific properties
    -

3. Return plants index that go through filter for further selection

*/

useEffect(() => {
 async function getData() {
   const response = await fetch('http://localhost:5000/api/data')
   const data = await response.json()

   props.setPlants(data)
   console.log(props.plants)
  }
    getData()
}, [props.values.budget])








 // || Setting the steps 


const nextStep = () => {
  if (step < 5) {
    setStep(step + 1);
  } 
  else if(step === 5) {
    handleSubmit();
  }
};

const prevStep = () => {
  if (step > 1) {
    setStep(step - 1);
  }
};

const handleChange = (option) => (e) => {
  props.setValues({ ...props.values, [option]: e.target.value });
};

 
const handleSubmit = () => {
  console.log(props.values);
  props.onFormSubmit(props.values);
};


    return (

      
      <div className=" vh-100">
        <img src={logo} alt="Logo" className="logo img-fluid" onClick={props.handleLogoClick}/>

 
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card p-3 w-50 mt-5">
          {
            {
              1: <Time handleChange={handleChange} values={props.values}/>,
              2: <Space handleChange={handleChange} values={props.values} />,
              3: <Region handleChange={handleChange} values={props.values}/>,
              4: <Accessibility handleChange={handleChange} values={props.values} />,
              5: <Budget handleChange={handleChange} values={props.values}/>,
            }[step]
          }
          <div className="d-flex justify-content-around px-5 mt-5">
            {step > 1 ? (
              <button className="btn btn-warning back-button" onClick={prevStep}>
                Back
              </button>
            ) : null}
            <button className="btn btn-warning next-button" onClick={nextStep}>
              {step === 5 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>

    );
  }
  
export default Multiform;


/* 1)Will you have time to the maintain garden? Please circle or explain. (min, mod, high)
2) Space - indoors or outdoors pots or in ground
3) Region- North, South, Midlands 
4) Do you have difficulties with your mobility- yes or no
5) Budget/ start up costs

*/
