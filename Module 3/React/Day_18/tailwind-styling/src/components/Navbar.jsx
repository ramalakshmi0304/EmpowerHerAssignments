const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between bg-white shadow p-4">
      <h1 className="font-bold text-xl">MySite</h1>

      <div className="flex flex-col md:flex-row md:space-x-6">
        <a className="hover:text-blue-600">Home</a>
        <a className="hover:text-blue-600">Features</a>
        <a className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
