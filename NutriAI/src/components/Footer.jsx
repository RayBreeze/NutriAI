const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">NutriAI</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-green-400">Privacy</a>
            <a href="#" className="hover:text-green-400">Terms</a>
            <a href="#" className="hover:text-green-400">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2024 NutriAI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
