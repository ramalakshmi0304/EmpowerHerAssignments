// src/reducers/FormReducer.jsx
export const initialState = {
  step: 1,
  values: {
    name: "",
    email: "",
    username: "",
    password: ""
  },
  isSubmitted: false
};

export function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value
        }
      };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREVIOUS_STEP":
      return { ...state, step: state.step - 1 };
    case "SUBMIT_FORM":
      return { ...state, isSubmitted: true };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}
