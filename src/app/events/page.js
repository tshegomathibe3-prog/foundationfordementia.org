'use client'

import { Calendar, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function Events() {
  const [events] = useState([
    {
      id: 1,
      title: 'Monthly Support Group Meeting',
      date: '2024-06-15',
      time: '2:00 PM - 3:30 PM',
      location: 'Community Center, Room A',
      description: 'Join us for our monthly caregiver support group meeting where we share experiences and resources.',
      category: 'Support'
    },
    {
      id: 2,
      title: 'Dementia Awareness Walk',
      date: '2024-06-22',
      time: '9:00 AM - 11:00 AM',
      location: 'Central Park',
      description: 'Annual awareness walk to promote dementia education and community engagement.',
      category: 'Awareness'
    },
    {
      id: 3,
      title: 'Caregiver Wellness Workshop',
      date: '2024-07-10',
      time: '6:00 PM - 8:00 PM',
      location: 'Online via Zoom',
      description: 'Learn stress management techniques and self-care strategies for caregivers.',
      category: 'Workshop'
    },
    {
      id: 4,
      title: 'Memory Café Social Event',
      date: '2024-07-20',
      time: '3:00 PM - 5:00 PM',
      location: 'Coffee Corner Café',
      description: 'Informal gathering for people with dementia and their caregivers to enjoy social connection.',
      category: 'Social'
    }
  ])

  return (
    <main className='min-h-screen bg-light'>
      <section className='max-w-6xl mx-auto px-6 py-20'>
        <h1 className='text-5xl font-bold mb-4 text-secondary'>Upcoming Events</h1>
        <p className='text-lg text-text-muted mb-12'>
          Join us at our upcoming events to connect, learn, and support our community.
        </p>

        <div className='grid md:grid-cols-2 gap-8'>
          {events.map((event) => (
            <div key={event.id} className='bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition'>
              <div className='inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4'>
                {event.category}
              </div>

              <h3 className='text-2xl font-bold mb-4 text-secondary'>{event.title}</h3>

              <div className='space-y-3 mb-6 text-text-muted'>
                <div className='flex items-center gap-3'>
                  <Calendar size={20} className='text-primary' />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className='flex items-center gap-3'>
                  <Clock size={20} className='text-primary' />
                  <span>{event.time}</span>
                </div>
                <div className='flex items-center gap-3'>
                  <MapPin size={20} className='text-primary' />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className='text-text-muted mb-6'>{event.description}</p>

              <button className='w-full bg-primary text-white py-3 rounded-xl hover:opacity-90 transition font-medium'>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}