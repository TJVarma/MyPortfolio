import React,{ useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';


const projects = [
  {
    id: 1,
    title:"Bart model to detect action items from meetings",
    description: "",
    image: "/project1.png",
    link: ""
  },
  {
    id: 2,
    title: "Missing Child Detection",
    description:"",
    image: "/image.png",
    link: ""
  },
  {
    id: 3,
    title: "Diabetes Detection",
    description: "This project is a Streamlit-based web application that predicts the likelihood of a person having diabetes based on medical diagnostic measurements. It uses a Logistic Regression model trained on the Pima Indians Diabetes Dataset.",
    image: "/diabetes.png",   
    link: "https://tjvarma.streamlit.app/"
  },
  {
    id: 4,
    title: "E-commerce Portal using python",
    description: "",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: ""
  }
];
function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)] pointer-events-none"></div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Venkata Thanoj Varma Atluri
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-2xl">
          AI And Ml Engineer 
        </p>
        <div className="flex gap-6 mb-12">
          <a href="https://github.com" className="transform hover:scale-110 transition-transform">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com" className="transform hover:scale-110 transition-transform">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="mailto:contact@example.com" className="transform hover:scale-110 transition-transform">
            <Mail className="w-8 h-8" />
          </a>
        </div>
        <ChevronDown className="w-8 h-8 animate-bounce absolute bottom-8" />
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4" id="projects">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-gray-800 rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" style={{ pointerEvents: "none" }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-800" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 shadow-2xl">
              <img
                src="/thanoj.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate AI/ML Engineer with expertise in python, Machine Learning and Deep Learning technologies. 
                ,I focus on creating intuitive and performant solutions that solve real-world problems.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Python', 'Machine Learning', 'Deep Learning', 'Html', 'Css', 'Js'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="py-20 px-4" id="contact">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
    <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl transform hover:scale-[1.02] transition-transform">
      {!formSubmitted ? (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default browser submission
            const form = e.target as HTMLFormElement;
            const data = new FormData(form);
        
            fetch("/", {
              method: "POST",
              body: data,
            })
              .then(() => setFormSubmitted(true))
              .catch((error) => {
                console.error("Form submission error:", error);
                alert("Submission failed. Please try again.");
              });
              
          }}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transform hover:scale-[1.02] transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-center text-green-400 text-lg font-semibold">
          Thank you! I’ll be in touch ✨
        </p>
      )}
    </div>
  </div>
  </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Atluri. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;