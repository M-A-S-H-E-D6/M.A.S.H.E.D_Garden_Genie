import React from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";

const tooltipText =
  "If you have budget limitations, we can recommend low cost plants that won't require any extra costs.";

const Budget = ({ handleChange, values }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="step-title">
        Budget
        <OverlayTrigger
          className="step-title"
          placement="bottom"
          overlay={<Tooltip id="tooltip">{tooltipText}</Tooltip>}
        >
          <sup>
            <i className="fas fa-info-circle ml-2"></i>
          </sup>
        </OverlayTrigger>
      </h2>
      <p>Are you facing budget constraints that could limit your gardening??</p>

      <Form.Group className="w-75 mt-4">
        <Form.Check
          value="yes"
          type="radio"
          label="Yes"
          onChange={handleChange("budget")}
          checked={values.budget === "yes"}
          aria-labelledby="Radio button choice for budget yes"
        ></Form.Check>
        <Form.Check
          value="no"
          type="radio"
          label="No"
          onChange={handleChange("budget")}
          checked={values.budget === "no"}
          aria-labelledby="Radio button choice for budget no"
        ></Form.Check>
      </Form.Group>
    </div>
  );
};

export default Budget;
