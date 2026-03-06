export default function Page() {
  return (
    <main className="bg-background text-foreground font-sans">

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: "url('/hero-luxury.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Luxury Real Estate in Lagos
          </h1>
          <p className="text-lg md:text-2xl text-white mb-6 drop-shadow-md">
            Find your dream property with Fresh Studio
          </p>
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search location or property"
              className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button className="w-full md:w-auto bg-primary text-primary-foreground py-3 px-6 rounded-r-lg font-bold hover:opacity-90 transition duration-300">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROPERTIES ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Featured Properties
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Property 1 */}
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <img src="/property1.jpg" alt="Property 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Lekki Beach House</h3>
                <p className="text-gray-600 mb-2">4 Beds • 3 Baths • 2500 sqft</p>
                <p className="font-semibold text-primary">₦120,000,000</p>
              </div>
            </div>
            {/* Property 2 */}
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <img src="/property2.jpg" alt="Property 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Ikoyi Penthouse</h3>
                <p className="text-gray-600 mb-2">3 Beds • 2 Baths • 1800 sqft</p>
                <p className="font-semibold text-primary">₦95,000,000</p>
              </div>
            </div>
            {/* Property 3 */}
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <img src="/property3.jpg" alt="Property 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Victoria Island Condo</h3>
                <p className="text-gray-600 mb-2">2 Beds • 2 Baths • 1200 sqft</p>
                <p className="font-semibold text-primary">₦80,000,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT & MAP SECTION ===== */}
      <section id="contact" className="py-16 bg-background text-foreground">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Form */}
            <form
              action="https://formspree.io/f/mnjgaydr"
              method="POST"
              className="bg-card p-6 rounded-lg shadow-md space-y-4"
            >
              <input type="hidden" name="_subject" value="New Message From Website" />

              {/* Name */}
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-semibold">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full p-3 border rounded-lg"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Google Map */}
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=Lekki%20Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Fresh Studio Location"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
                  }
