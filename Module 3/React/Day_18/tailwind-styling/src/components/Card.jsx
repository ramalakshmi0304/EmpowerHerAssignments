const Card = ({ title }) => {
  return (
    <div className="bg-white p-5 shadow rounded">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">
        This is a reusable card component.
      </p>
      <button className="mt-4 px-4 py-2 bg-gray-200 rounded 
        hover:bg-gray-300 active:bg-gray-400">
        Learn More
      </button>
    </div>
  );
};

export default Card;
