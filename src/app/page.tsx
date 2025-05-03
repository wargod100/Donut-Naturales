import Image from "next/image";

export default function Home() {
  const donuts = [
    {
      name: "Classic Natural",
      description: "Made with organic flour and natural sweeteners, our signature recipe since 2024.",
      price: "$4.49",
      image: "https://images.unsplash.com/photo-1631397833242-fc6213046352?w=800&auto=format&fit=crop"
    },
    {
      name: "Dark Cacao",
      description: "Pure organic cacao and natural coconut sugar glaze.",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1527904324834-3bda86da6771?w=800&auto=format&fit=crop"
    },
    {
      name: "Berry Garden",
      description: "Topped with real organic berries and natural pink beetroot glaze.",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-800">Donut Naturales</h1>
            <div className="hidden sm:flex space-x-8">
              <a href="#menu" className="text-gray-600 hover:text-green-600">Menu</a>
              <a href="#about" className="text-gray-600 hover:text-green-600">About</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <main className="text-center mb-24">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
              Naturally
              <br />
              Delicious
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              Artisanal donuts crafted with organic ingredients
            </p>
            <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556913396-7a3c459ef68e?w=1200&auto=format&fit=crop"
                alt="Natural artisanal donuts"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="rounded-2xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </main>

        {/* Special Offer Banner */}
        <div className="bg-green-100 rounded-xl p-6 mb-24 text-center">
          <p className="text-green-800 text-xl font-semibold">
            🌱 New Customer Special: Get a FREE organic coffee with any donut purchase! 🍩
          </p>
        </div>

        {/* Featured Donuts Section */}
        <section id="menu" className="mb-24">
          <h2 className="text-4xl font-bold text-green-800 mb-12 text-center">
            Our Natural Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donuts.map((donut) => (
              <div key={donut.name} 
                   className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64">
                  <Image
                    src={donut.image}
                    alt={donut.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-semibold text-green-800">{donut.name}</h3>
                    <span className="text-lg font-bold text-green-600">{donut.price}</span>
                  </div>
                  <p className="text-gray-600">{donut.description}</p>
                  <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8">Our Philosophy</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              At Donut Naturales, we&apos;re committed to creating delicious treats that are better for you 
              and the environment. We use only organic flour, natural sweeteners, and real fruit ingredients. 
              Each donut is handcrafted with care, ensuring you get the perfect balance of flavor and wholesome goodness.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">Visit Our Kitchen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <p className="text-gray-600">
                Tuesday - Friday: 7:00 AM - 6:00 PM<br />
                Saturday - Sunday: 8:00 AM - 5:00 PM<br />
                Monday: Closed (Prep Day)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-600">
                742 Natural Way<br />
                Eco District, EN 12345<br />
                Phone: (555) 123-4567<br />
                Email: hello@donutnaturales.com
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 py-8 border-t border-gray-200">
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="hover:text-green-800 transition-colors">Instagram</a>
            <a href="#" className="hover:text-green-800 transition-colors">Facebook</a>
            <a href="#" className="hover:text-green-800 transition-colors">Twitter</a>
          </div>
          <p>© 2024 Donut Naturales. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
