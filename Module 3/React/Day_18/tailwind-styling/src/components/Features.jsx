import Card from "./Card";

const Features = () => {
  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Feature One" />
      <Card title="Feature Two" />
      <Card title="Feature Three" />
    </section>
  );
};

export default Features;
