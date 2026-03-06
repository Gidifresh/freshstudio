

export default function Page() {
  return (
    <main>
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
              className="bg-card p-6 rounded-lg shadow-md"
            >
              <input type="hidden" name="_subject" value="New Message From Website" />

              <label className="block mb-2 font-semibold">Name</label>
              <input type="text" name="name" required className="w-full mb-4 p-3 border rounded-lg" />

              <label className="block mb-2 font-semibold">Email</label>
              <input type="email" name="email" required className="w-full mb-4 p-3 border rounded-lg" />

              <label className="block mb-2 font-semibold">Phone</label>
              <input type="tel" name="phone" className="w-full mb-4 p-3 border rounded-lg" />

              <label className="block mb-2 font-semibold">Message</label>
              <textarea name="message" rows="4" required className="w-full mb-6 p-3 border rounded-lg"></textarea>

              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold">
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
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
