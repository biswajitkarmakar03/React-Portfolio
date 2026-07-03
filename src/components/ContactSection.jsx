// src/components/ContactSection.jsx
import { Mail, MapPin, Phone, Send, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-[#0a0a0f] border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-mono mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-gray-200">Get In</span>
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent ml-2">Touch</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-mono">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 rounded-xl backdrop-blur-sm group hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg group-hover:border-indigo-500/50 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 font-mono">Location</h4>
                  <p className="text-gray-400">Rajarhat, Kolkata 700136</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 rounded-xl backdrop-blur-sm group hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg group-hover:border-purple-500/50 transition-all duration-300">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 font-mono">Phone</h4>
                  <p className="text-gray-400">+91 7679652990</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 rounded-xl backdrop-blur-sm group hover:border-pink-500/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-lg group-hover:border-pink-500/50 transition-all duration-300">
                  <Mail className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 font-mono">Email</h4>
                  <p className="text-gray-400">biswajitkarmakar404@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="font-semibold text-gray-200 font-mono mb-3">Available for</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 text-sm rounded-lg font-mono">Full-time</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 text-sm rounded-lg font-mono">Freelance</span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm rounded-lg font-mono">Remote</span>
              </div>
              <div className="flex items-center gap-2 mt-4 text-gray-400 text-sm font-mono">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>Response time: &lt; 24 hours</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
            <div>
              <label className="block text-sm font-medium text-gray-300 font-mono mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-gray-200 font-mono placeholder:text-gray-600"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 font-mono mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-gray-200 font-mono placeholder:text-gray-600"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 font-mono mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-gray-200 font-mono placeholder:text-gray-600 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full group flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-mono font-semibold hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;