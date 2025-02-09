const About = () => {
  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            About NutriAI
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            NutriAI combines cutting-edge artificial intelligence with proven nutrition science 
            to provide you with personalized dietary recommendations that fit your lifestyle.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
