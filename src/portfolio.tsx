import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, BookOpen } from 'lucide-react'
import { Section } from './Component/section'

const NetworkBackground = () => {
  const count = 75
  const nodes = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random(),
    y: Math.random(),
  }))

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="grid-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#4a5568" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4a5568" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-gradient)" />
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={`${node.x * 100}%`}
          cy={`${node.y * 100}%`}
          r="1.5"
          fill="#4a5568"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.7, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
      {nodes.map((node, i) => 
        nodes.slice(i + 1).map((otherNode, j) => {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          )
          if (distance < 0.3) {
            return (
              <motion.line
                key={`${i}-${j}`}
                x1={`${node.x * 100}%`}
                y1={`${node.y * 100}%`}
                x2={`${otherNode.x * 100}%`}
                y2={`${otherNode.y * 100}%`}
                stroke="#4a5568"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            )
          }
          return null
        })
      )}
    </svg>
  )
}

export default function Portfolio() {
  const [text, setText] = useState('')
  const fullText = "Hello, I'm Vinay Greavson Colaco"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 100)
    }
  }, [index, text])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const primarySkills = ['JavaScript', 'React', 'Node.js', 'Python']
  const exploredTechnologies = ['Docker', 'AWS', 'GraphQL', 'MongoDB']

  const projects = [
    { title: 'Project 1', description: 'A brief description of project 1' },
    { title: 'Project 2', description: 'A brief description of project 2' },
    { title: 'Project 3', description: 'A brief description of project 3' },
    { title: 'Project 4', description: 'A brief description of project 4' },
  ]

  const blogPosts = [
    { title: 'Coming Soon', description: 'Stay tuned for exciting blog posts!' },
    { title: 'Future Post', description: 'More content will be added here.' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <NetworkBackground />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 transform-gpu z-50"
        style={{ scaleX }}
      />
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-40">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Vinay Greavson Colaco
            </motion.h1>
            <motion.div 
              className="space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </motion.div>
          </nav>
        </header>

        <main className="container mx-auto px-4 pt-20">
          <Section id="about">
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
              <h2 className="text-5xl font-bold mb-4">{text}</h2>
              <motion.p 
                className="text-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Software Engineer at UniCourt
              </motion.p>
              <motion.p
                className="max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                Passionate about building scalable and efficient software solutions. 
                I love tackling complex problems and turning ideas into reality through code.
              </motion.p>
              <motion.a
                href="#experience"
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Explore My Work
                <ChevronDown className="ml-2" />
              </motion.a>
            </div>
          </Section>

          <Section id="experience">
            <h3 className="text-3xl font-bold mb-8 text-center">Work Experience</h3>
            <div className="space-y-8">
              <motion.div
                className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <h4 className="text-xl font-semibold">Software Engineer</h4>
                <p className="text-gray-400">UniCourt</p>
                <p>August 2024 - Present</p>
              </motion.div>
              <motion.div
                className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <h4 className="text-xl font-semibold">Software Engineer Intern</h4>
                <p className="text-gray-400">UniCourt</p>
                <p>February 2024 - August 2024</p>
              </motion.div>
            </div>
          </Section>

          <Section id="skills">
            <h3 className="text-3xl font-bold mb-8 text-center">Skills</h3>
            <div className="mb-12">
              <h4 className="text-2xl font-semibold mb-4">Primary Skills</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {primarySkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="px-4 py-2 bg-blue-500 rounded-full text-white"
                    whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4">Explored Technologies</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {exploredTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="px-4 py-2 bg-gray-700 rounded-full text-white"
                    whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="projects">
            <h3 className="text-3xl font-bold mb-8 text-center">My Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="mb-4">{project.description}</p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section id="blog">
            <h3 className="text-3xl font-bold mb-8 text-center">Blog</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <h4 className="text-xl font-semibol
d mb-2">{post.title}</h4>
                  <p className="mb-4">{post.description}</p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Read More <BookOpen className="w-4 h-4 ml-2" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section id="contact">
            <h3 className="text-3xl font-bold mb-8 text-center">Get in Touch</h3>
            <div className="flex justify-center space-x-8">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#6e5494" }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#0077b5" }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="mailto:vinay@example.com"
                whileHover={{ scale: 1.2, color: "#ea4335" }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-8 h-8" />
              </motion.a>
            </div>
          </Section>
        </main>

        <footer className="bg-gray-800 bg-opacity-50 py-4 text-center backdrop-blur-sm">
          <p>&copy; 2024 Vinay Greavson Colaco. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}