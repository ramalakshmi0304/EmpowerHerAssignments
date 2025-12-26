import React, { useReducer } from "react";
import { formReducer, initialState } from "../reducers/FormReducer"; // check path

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState); // use formReducer

  if (state.isSubmitted) {
    return (
      <div>
        <h2>Form Submitted Successfully ✅</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3>Step {state.step} / 3</h3>

      {/* Step 1 */}
      {state.step === 1 && (
        <>
          <input
            placeholder="Name"
            value={state.values.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value
              })
            }
          />
          <br />

          <input
            placeholder="Email"
            value={state.values.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value
              })
            }
          />
        </>
      )}

      {/* Step 2 */}
      {state.step === 2 && (
        <>
          <input
            placeholder="Username"
            value={state.values.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "username",
                value: e.target.value
              })
            }
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            value={state.values.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value
              })
            }
          />
        </>
      )}

      {/* Step 3 */}
      {state.step === 3 && (
        <>
          <h4>Review Details</h4>
          <p>Name: {state.values.name}</p>
          <p>Email: {state.values.email}</p>
          <p>Username: {state.values.username}</p>
        </>
      )}

      <br />

      {/* Navigation Buttons */}
      <div>
        {state.step > 1 && (
          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
        )}

        {state.step < 3 && (
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        )}

        {state.step === 3 && (
          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
