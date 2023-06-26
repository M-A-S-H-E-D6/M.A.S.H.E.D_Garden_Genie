import React from "react";
import { Form } from "react-bootstrap";
import './Budget.css';

const Budget = ({ handleChange, values }) => {
  return (
    <div className="d-flex flex-column align-items-center budget-border">
      <h2>Budget</h2>
      <p>Are you facing budget constraints that could limit your gardening??</p>
      
      <Form.Group className="w-75 mt-4">
      <Form.Check
        value="yes"
        type="radio"
        label="Yes"
        onChange={handleChange("budget")}
        checked={values.budget === "yes"}
        aria-labelledby="Radio button choice for budget yes"
        >
        </Form.Check>
        <Form.Check
        value="no"
        type="radio"
        label="No"
        onChange={handleChange("budget")}
        checked={values.budget === "no"}
        aria-labelledby="Radio button choice for budget no"
        >
        </Form.Check>
        
      </Form.Group>
    </div>
  );
};

export default Budget;
