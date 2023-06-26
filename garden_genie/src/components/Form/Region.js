import React from "react";
import { Form } from "react-bootstrap";
import './Region.css';

const Region = ({ handleChange, values }) => {
  return (
    <div className="d-flex flex-column align-items-center region-border">
      <h2>Region</h2>
      <p>What is your location?</p>
      <Form.Group controlId = "region" className="w-75 mt-4">
        <Form.Check
        value="north"
        type="radio"
        label="North"
        onChange={handleChange("region")}
        checked={values.region === "north"}
        aria-labelledby="Radio button choice for North"
        >
        </Form.Check>
        <Form.Check
        value="midlands"
        type="radio"
        label="Midlands"
        onChange={handleChange("region")}
        checked={values.region === "midlands"}
        aria-labelledby="Radio button choice for Midlands"
        >
        </Form.Check>
        <Form.Check
        value="south"
        type="radio"
        label="South"
        onChange={handleChange("region")}
        checked={values.region === "south"}
        aria-labelledby="Radio button choice for South"
        >
        </Form.Check>
      </Form.Group>
    </div>
  );
};

export default Region;
