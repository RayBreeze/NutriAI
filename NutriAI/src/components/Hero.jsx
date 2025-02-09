const Hero = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
          Your Personal AI Nutritionist
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Get personalized meal plans and nutrition advice powered by artificial intelligence
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700">
          Start Your Journey
        </button>
      </div>
    </div>
  )
}

export default Hero
