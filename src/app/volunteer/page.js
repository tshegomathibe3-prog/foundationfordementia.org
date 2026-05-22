'use client'

import { useState } from 'react'
import { Heart, Users, BookOpen, Calendar } from 'lucide-react'

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    interests: []
  })

  const [submitted, setSubmitted] = useState(false)

  const opportunities = [
    {
      icon: Users,
      title: 'Support Group Facilitator',
      description: 'Lead monthly caregiver support group meetings and provide emotional support.'
    },
    {
      icon: BookOpen,
      title: 'Educational Presenter',
      description: 'Share dementia awareness and education with community groups and organizations.'
    },
    {
      icon: Calendar,
      title: 'Event Coordinator',
      description: 'Help organize and manage awareness walks, workshops, and community events.'
    },
    {
      icon: Heart,
      title: 'Companion Visitor',
      description: 'Spend time with individuals living with dementia and their families.'
    }
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter(i => i !== value)
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Volunteer form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', experience: '', interests: [] })
    }, 3000)
  }

  return (
    <main className='min-h-screen bg-light'>
      <section className='max-w-6xl mx-auto px-6 py-20'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-bold mb-4 text-secondary'>Volunteer With Us</h1>
          <p className='text-lg text-text-muted'>
            Join our community of compassionate volunteers making a difference in the lives of families affected by dementia.
          </p>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl font-bold mb-8 text-secondary'>Volunteer Opportunities</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {opportunities.map((opp, idx) => {
              const Icon = opp.icon
              return (
                <div key={idx} className='bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition'>
                  <div className='bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                    <Icon className='text-primary' size={24} />
                  </div>
                  <h3 className='text-xl font-bold mb-3 text-secondary'>{opp.title}</h3>
                  <p className='text-text-muted'>{opp.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className='bg-white p-8 md:p-12 rounded-2xl shadow-md max-w-2xl mx-auto'>
          <h2 className='text-3xl font-bold mb-8 text-secondary'>Join Our Team</h2>

          {submitted && (
            <div className='mb-6 p-4 bg-green-100 text-green-700 rounded-lg'>
              Thank you for your interest! We'll contact you soon with more information.
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-sm font-semibold mb-2 text-secondary'>Full Name *</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold mb-2 text-secondary'>Email *</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold mb-2 text-secondary'>Phone Number *</label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold mb-2 text-secondary'>Relevant Experience</label>
              <textarea
                name='experience'
                value={formData.experience}
                onChange={handleChange}
                placeholder='Tell us about your experience with dementia care, caregiving, or related fields...'
                rows='4'
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none'
              />
            </div>

            <div>
              <label className='block text-sm font-semibold mb-4 text-secondary'>Areas of Interest *</label>
              <div className='space-y-3'>
                {['Support Group Facilitation', 'Education & Awareness', 'Event Planning', 'Direct Care'].map((interest) => (
                  <label key={interest} className='flex items-center gap-3 cursor-pointer'>
                    <input
                      type='checkbox'
                      value={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={handleChange}
                      className='w-4 h-4 text-primary rounded'
                    />
                    <span className='text-text-muted'>{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type='submit'
              className='w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition'
            >
              Submit Volunteer Application
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}