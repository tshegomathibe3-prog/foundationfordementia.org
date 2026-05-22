'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <main className='min-h-screen bg-light'>
      <section className='max-w-6xl mx-auto px-6 py-20'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold mb-4 text-secondary'>Get in Touch</h1>
          <p className='text-lg text-text-muted'>We'd love to hear from you. Reach out anytime.</p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 mb-12'>
          <div className='bg-white p-8 rounded-2xl shadow-md'>
            <h2 className='text-2xl font-bold mb-6 text-secondary'>Send us a Message</h2>

            {submitted && (
              <div className='mb-6 p-4 bg-green-100 text-green-700 rounded-lg'>
                Thank you! We've received your message and will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-4'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
              />
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
              />
              <input
                type='tel'
                name='phone'
                placeholder='Phone Number (optional)'
                value={formData.phone}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
              />
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                value={formData.subject}
                onChange={handleChange}
                required
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
              />
              <textarea
                name='message'
                placeholder='Your Message'
                rows='5'
                value={formData.message}
                onChange={handleChange}
                required
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none'
              />
              <button
                type='submit'
                className='w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2'
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className='space-y-6'>
            <div className='bg-white p-8 rounded-2xl shadow-md'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='bg-primary/10 p-3 rounded-lg'>
                  <Mail className='text-primary' size={24} />
                </div>
                <div>
                  <h3 className='font-bold text-secondary mb-1'>Email</h3>
                  <p className='text-text-muted'>
                    <a href='mailto:info@foundationfordementia.org' className='hover:text-primary transition'>
                      info@foundationfordementia.org
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 mb-6'>
                <div className='bg-primary/10 p-3 rounded-lg'>
                  <Phone className='text-primary' size={24} />
                </div>
                <div>
                  <h3 className='font-bold text-secondary mb-1'>Phone</h3>
                  <p className='text-text-muted'>
                    <a href='tel:+15551234567' className='hover:text-primary transition'>
                      +1 (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-primary/10 p-3 rounded-lg'>
                  <MapPin className='text-primary' size={24} />
                </div>
                <div>
                  <h3 className='font-bold text-secondary mb-1'>Address</h3>
                  <p className='text-text-muted'>
                    123 Care Street<br />
                    City, ST 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-primary text-white p-8 rounded-2xl shadow-md'>
              <h3 className='text-2xl font-bold mb-4'>Office Hours</h3>
              <ul className='space-y-2'>
                <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                <li>Saturday: 10:00 AM - 2:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}