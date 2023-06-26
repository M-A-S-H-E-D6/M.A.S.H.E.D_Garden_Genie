import React from "react";
import { Form } from "react-bootstrap";
import './Accessibility.css';

const Accessibility = ({ handleChange, values }) => {
  return (
    <div className="d-flex flex-column align-items-center accessibility-border">
      <h2>Mobility</h2>
      <p>Do you have any mobility difficulties?</p>
      <Form.Group controlId = "accessibility" className="w-75 mt-4">
        <Form.Check
        value="yes"
        type="radio"
        label="Yes"
        onChange={handleChange("accessibility")}
        checked={values.accessibility === "yes"}
        aria-labelledby="Radio button choice for yes"
        >
        </Form.Check>
        <Form.Check
        value="no"
        type="radio"
        label="No"
        onChange={handleChange("accessibility")}
        checked={values.accessibility === "no"}
        aria-labelledby="Radio button choice for no"
        >
        </Form.Check>
      </Form.Group>
    </div>
  );
};

export default Accessibility;

// import React from "react";
// import { Form } from "react-bootstrap";

// const Accessibility = ({ handleChange, values }) => {
//   return (
//     <div className="d-flex flex-column align-items-center">
//       <h2>Mobility</h2>
//       <fieldset>
//         <legend>Do you have any mobility difficulties?</legend>
//         <Form.Group className="w-75 mt-4">
//           <Form.Check
//             id="accessibility-yes"
//             value="yes"
//             type="radio"
//             label="Yes"
//             onChange={handleChange("accessibility")}
//             checked={values.accessibility === "yes"}
//             aria-labelledby="accessibility-yes-label"
//           />
//           <Form.Check
//             id="accessibility-no"
//             value="no"
//             type="radio"
//             label="No"
//             onChange={handleChange("accessibility")}
//             checked={values.accessibility === "no"}
//             aria-labelledby="accessibility-no-label"
//           />
//         </Form.Group>
//       </fieldset>
//     </div>
//   );
// };

// export default Accessibility;

