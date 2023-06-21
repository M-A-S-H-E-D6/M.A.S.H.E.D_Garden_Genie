import React from "react";
import { Form } from "react-bootstrap";

const Time = ({ handleChange, values }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Time</h2>
      <p>How much time do you have to maintain a garden?</p>
      <Form.Group className="w-75 mt-4">
      <Form.Check
        value="minimum"
        type="radio"
        label="Minimum (1 to 2 hours per week)"
        onChange={handleChange("time")}
        checked={values.time === "minimum"}
        aria-labelledby="Radio button choice for Minimum (1 to 2 hours per week)"
        >
        </Form.Check>
        <Form.Check
        value="moderate"
        type="radio"
        label="Moderate (2 to 4 hours per week)"
        onChange={handleChange("time")}
        checked={values.time === "moderate"}
        aria-labelledby="Radio button choice for Moderate (2 to 4 hours per week)"
        >
        </Form.Check>
        <Form.Check
        value="noTimeCostraints"
        type="radio"
        label="I don't have time costraints"
        onChange={handleChange("time")}
        checked={values.time === "noTimeCostraints"}
        aria-labelledby="Radio button choice for I don't have time costraints"
        >
        </Form.Check>
       </Form.Group>
    </div>
  );
};

export default Time;