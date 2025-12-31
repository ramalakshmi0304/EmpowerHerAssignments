const ContactForm = () => {
  return (
    <section className="p-8">
      <form className="max-w-md mx-auto space-y-4">
        <input
          className="w-full p-2 border rounded 
          focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Name"
        />
        <input
          className="w-full p-2 border rounded 
          focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full p-2 border rounded 
          focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
        />
        <button
          className="w-full bg-gray-200 py-2 rounded 
          hover:bg-gray-300 active:bg-gray-400"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
