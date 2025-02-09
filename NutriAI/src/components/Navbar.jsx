const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">NutriAI</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-green-600">Features</a>
          <a href="#about" className="text-gray-600 hover:text-green-600">About</a>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
