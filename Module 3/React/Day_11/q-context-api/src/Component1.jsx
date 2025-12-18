import { AppContext } from "./AppContext";
import Component2 from "./Component2";

const Component1 = () => {

  const values = {
    a: "Apple",
    b: "Banana",
    c: "Cat",
    d: "Dog",
    e: "Elephant",
    f: "Fish",
  };

  return (
    <AppContext.Provider value={values}>
      <Component2 />
    </AppContext.Provider>
  );
};

export default Component1;
