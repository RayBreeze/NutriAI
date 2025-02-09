const Features = () => {
  const features = [
    {
      title: 'Personalized Plans',
      description: 'Get custom nutrition advice based on your unique needs and goals'
    },
    {
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms process your data for accurate recommendations'
    },
    {
      title: 'Real-time Tracking',
      description: 'Monitor your progress with intuitive tools and insights'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Why Choose NutriAI?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
