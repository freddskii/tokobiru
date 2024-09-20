import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="w-full pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Illustration Section */}
          <div className="w-full lg:w-1/2 mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold  mb-4">Get in touch</h1>
            <p>Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.</p>
          </div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 bg-gray-100 p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Form</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-lg font-medium mb-2">Name</label>
                <input type="text" className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-lg font-medium mb-2">Message</label>
                <textarea className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-primary" rows="5" placeholder="Your Message"></textarea>
              </div>
              <div className=" w-full flex justify-center">
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
