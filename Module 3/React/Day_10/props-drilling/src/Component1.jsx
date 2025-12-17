import Component2 from "./Component2";

const Component1 = () => {
  const a = "Apple";
  const b = "Banana";
  const c = "Cat";
  const d = "Dog";
  const e = "Elephant";
  const f = "Fish";

  return (
    <div>
      <h3>Component1</h3>
      <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
};

export default Component1;
