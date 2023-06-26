import React from "react";
import { Form } from "react-bootstrap";
import './Space.css';


const Space = ({ handleChange, values }) => {
  return (
    <div className="d-flex flex-column align-items-center space-border">
      <h2>Space</h2>
      <p>What type of space do you have available?</p>
      
      <Form.Group className="w-75 mt-4">
      <Form.Check
        value="indoors"
        type="radio"
        label="Indoors"
        onChange={handleChange("space")}
        checked={values.space === "indoors"}
        aria-labelledby="Radio button choice for indoor space"
        >
        </Form.Check>
        <Form.Check
        value="outdoors pots"
        type="radio"
        label="Outdoors pots"
        onChange={handleChange("space")}
        checked={values.space === "outdoors pots"}
        aria-labelledby="Radio button choice for Outdoor space pots"
        >
        </Form.Check>
        <Form.Check
        value="outdoors garden"
        type="radio"
        label="Outdoors garden"
        onChange={handleChange("space")}
        checked={values.space === "outdoors garden"}
        aria-labelledby="Radio button choice for Outdoor garden space"
        >
        </Form.Check>
        
        
      </Form.Group>
    </div>
  );
};

export default Space;
