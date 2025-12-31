const Hero = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl 
        bg-gradient-to-r from-indigo-500 to-pink-500 
        text-transparent bg-clip-text">
        Welcome to Tailwind UI
      </h2>

      <img
        src="https://via.placeholder.com/500"
        className="mx-auto mt-6 rounded-xl shadow-lg hover:scale-105 transition"
        alt="Hero"
      />
    </section>
  );
};

export default Hero;
