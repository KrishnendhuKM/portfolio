import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MessageCircle, User } from 'lucide-react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [guestbook, setGuestbook] = useState([])
  const [visibleCount, setVisibleCount] = useState(6)

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setGuestbook(messages)
    })

    return () => unsubscribe()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        'service_jnh04xa',
        'template_a9rihp7',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'xMNS1CVuayECJniPo'
      )

      await addDoc(collection(db, 'messages'), {
        name: formData.name,
        message: formData.message,
        createdAt: serverTimestamp(),
      })

      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
    }
  }

  const contactLinks = [
    { name: 'Email', icon: Mail, value: 'krishnendhukm10@gmail.com', url: 'mailto:krishnendhukm10@gmail.com' },
    { name: 'LinkedIn', icon: FaLinkedin, value: 'Connect with me', url: 'https://www.linkedin.com/in/krishnendhu-km-517aaa2b9' },
    { name: 'GitHub', icon: FaGithub, value: 'Explore my projects', url: 'https://github.com/KrishnendhuKM' },
    { name: 'Instagram', icon: FaInstagram, value: '@krishnendhu.km', url: 'https://www.instagram.com/krishnendhu.km' },
  ]

  return (
    <section className="px-8 md:px-16 py-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-ash text-sm uppercase tracking-widest mb-4"
      >
        Get In Touch
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-offwhite text-4xl md:text-6xl font-bold mb-14"
      >
        Contact Me
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <div>
            <label className="text-ash text-sm uppercase tracking-wide block mb-2">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-transparent border border-ash-dark focus:border-ash text-offwhite px-4 py-3 outline-none transition-colors" placeholder="Your name" />
          </div>

          <div>
            <label className="text-ash text-sm uppercase tracking-wide block mb-2">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent border border-ash-dark focus:border-ash text-offwhite px-4 py-3 outline-none transition-colors" placeholder="your.email@example.com" />
          </div>

          <div>
            <label className="text-ash text-sm uppercase tracking-wide block mb-2">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-transparent border border-ash-dark focus:border-ash text-offwhite px-4 py-3 outline-none transition-colors resize-none" placeholder="Tell me about your project or opportunity..." />
          </div>

          <button type="submit" disabled={status === 'sending'} className="flex items-center justify-center gap-2 bg-offwhite text-base-black px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-ash-light transition-colors disabled:opacity-50">
            {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={16} />
          </button>

          {status === 'sent' && (
            <p className="text-ash-light text-sm">Thanks! Your message has been sent — I'll get back to you soon.</p>
          )}

          {status === 'error' && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again or email me directly.</p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-ash-light text-lg leading-relaxed mb-10">
            Have a project in mind or an opportunity to discuss? I'd love to hear from you.
            Reach out through the form, or connect directly below.
          </p>

          <div className="flex flex-col gap-5">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-ash hover:text-offwhite transition-colors group">
                  <span className="border border-ash-dark group-hover:border-ash p-3 transition-colors">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-ash">{link.name}</span>
                    <span className="block text-sm">{link.value}</span>
                  </span>
                </a>
              )
            })}
          </div>
          
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/*--------------------
        <h2 className="text-offwhite text-2xl font-bold mb-8 flex items-center gap-3">
          <MessageCircle size={22} /> Messages
        </h2>

        {guestbook.length === 0 ? (
          <p className="text-ash text-sm">No messages yet — be the first to say hello!</p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guestbook.slice(0, visibleCount).map((entry) => (
                <div key={entry.id} className="animated-border p-6 hover:bg-base-charcoal/80 transition-colors duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-ash-dark flex items-center justify-center group-hover:bg-ash transition-colors">
                      <User size={18} className="text-offwhite" />
                    </div>
                    <p className="text-offwhite font-semibold">{entry.name}</p>
                  </div>
                  <p className="text-ash text-sm leading-relaxed group-hover:text-ash-light transition-colors">
                    {entry.message}
                  </p>
                </div>
              ))}
            </div>

            {visibleCount < guestbook.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="border border-ash-dark hover:border-ash text-ash hover:text-offwhite text-sm px-6 py-3 transition-colors"
                >
                  Show More
                </button>
              </div>
            )}
          </>
        )}
          email off---------*/}

      </motion.div>
    </section>
  )
}

export default Contact