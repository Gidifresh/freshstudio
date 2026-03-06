"use client";

export default function Page() {
  return (
    <main>
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <form
              action="https://formspree.io/f/mnjgaydr"
              method="POST"
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <input type="hidden" name="_subject" value="New Message From Website" />

              <label className="block mb-2 font-semibold text-gray-700">Name</label>
              <input type="text" name="name" required className="w-full mb-4 p-3 border rounded-lg" />

              <label className="block mb-2 font-semibold text-gray-700">Email</label>
              <input type="email" name="email" required className="w-full mb-4 p-3 border rounded-lg" />

              <label className="block mb-2 font-semibold text-gray-700">Phone</label>
              <input type="tel" name="phone" className="w-full mb-4 p-3 border rounded-lg" />

              <label className="block mb-2 font-semibold text-gray-700">Message</label>
              <textarea name="message" rows="4" required className="w-full mb-6 p-3 border rounded-lg"></textarea>

              <button type="submit" className="w-full bg-[#0a2540] text-[#ffd700] py-3 rounded-lg font-bold">
                Send Message
              </button>
            </form>

            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=Lekki%20Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
