import logo from "../../images/Logo.png";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./Results.css";
import Card from './Cards.js'
import { Link } from 'react-router-dom'

function Results(props) {

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

function filterTime(item) {
  if (props.values.time === 'minimum') {
    return item.Properties.Maintenance === 'Low' && item.Properties.Watering === 'Low'
  } else if (props.values.time === 'moderate') {
    return (
    (item.Properties.Maintenance === 'Low' && item.Properties.Watering === 'Low') || 
    (item.Properties.Maintenance === 'Medium' && item.Properties.Watering === 'Moderate') ||
    (item.Properties.Maintenance === 'Medium' && item.Properties.Watering === 'Low') ||
    (item.Properties.Maintenance === 'Low' && item.Properties.Watering === 'Moderate')
  )}
  return true;
}

function filterSpace(item) {
  if (props.values.space === 'indoors') {
    return item.Properties.Size === 'Small' && item.Properties.GrowInPot === true && item.Properties.Indoor === true
} else if (props.values.space === 'outdoors pots') {
    return (
      (item.Properties.Size === 'Small' && item.Properties.GrowInPot === true) || 
      (item.Properties.Size === 'Medium' && item.Properties.GrowInPot === true) ||
      (item.Properties.Size === 'Medium' && item.Properties.GrowInPot === false)
      )
  }
  return true;
}

function filterRegion(item) {
  let plantRegion = item.Properties.Region
  let userRegion = props.values.region
  if (userRegion === 'north') {
    return plantRegion === 'North' || plantRegion === 'All'
  } else if (userRegion === 'midlands') {
    return plantRegion === 'Midlands' || plantRegion === 'All'
  } else if (userRegion === 'south') {
    return plantRegion === 'South' || plantRegion === 'All'
  }
  return true;
}

function filterMobility(item) {
  let plantMaint = item.Properties.Maintenance
  let plantSize = item.Properties.Size
  let userChoice = props.values.accessibility // 'yes', 'no'
  if (userChoice === 'yes') {
    return (
      plantSize === 'Small' && plantMaint !== 'High'
    )
  }
  return true;
}

  let filteredArray = props.plants.filter(filterTime).filter(filterSpace).filter(filterRegion).filter(filterMobility)
  console.log(filteredArray)

  
  return (

    <div className="home">
        <img src={logo} alt="Logo" className="logo img-fluid" onClick={props.handleLogoClick}/>
        <div className="header">
          <h5>Presenting your personalised gardening findings</h5>
        </div>
     
      <div className="row align-items-center">
        <div className="card-group">

          <Card 
          imgSrc="https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/sunflower-1627193_1920.jpg?itok=td7mL8qA"
          imgAlt="..."
          plantName="Sunflower"
          onClick={props.handleResultsClick}
          />

          <Card 
          imgSrc="https://cdn.shopify.com/s/files/1/0513/3428/3424/products/oldenglish1.jpg?v=1631357610"
          imgAlt="..."
          plantName="Lavender"
          onClick={props.handleResultsClick}
          />      

          <Card 
          imgSrc="https://www.muddytrowel.com/wp-content/uploads/2022/07/hydrangea-blue-2-e1657704030437.jpg"
          imgAlt="..."
          plantName="Hydrangea"
          onClick={props.handleResultsClick}
          />

        </div>
      </div>
      <Link to="../form">
          <button id="get-started" aria-label="Button that leads to Form">
            Back
          </button>
        </Link>

    </div>
    

  );
}

/*
<div className="card">
            <img
              src="https://www.muddytrowel.com/wp-content/uploads/2022/07/hydrangea-blue-2-e1657704030437.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">Hydrangea</h3>

              <Link to="plant-info" className="btn btn-primary stretched-link">Go to plant</Link>

            </div>
          </div>
*/




export default Results;
