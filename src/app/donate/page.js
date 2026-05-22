'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

export default function Donate() {
  const [amount, setAmount] = useState(50)
  const [donationType, setDonationType] = useState('one-time')

  const presets = [25, 50, 100, 250, 500]

  return (
    <main className='min-h-screen bg-light'>
      <section className='max-w-4xl mx-auto px-6 py-20'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold mb-4 text-secondary'>Support Our Mission</h1>
          <p className='text-lg text-text-muted'>
            Your donation helps us provide education, support, and community resources to families affected by dementia.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-white p-8 rounded-2xl shadow-md'>
            <h2 className='text-2xl font-bold mb-6 text-secondary'>Make a Donation</h2>

            <div className='mb-8'>
              <label className='block text-sm font-semibold mb-4 text-secondary'>Donation Type</label>
              <div className='flex gap-4'>
                {['one-time', 'monthly'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setDonationType(type)}
                    className={`flex-1 py-3 rounded-lg font-medium transition ${
                      donationType === type
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-secondary hover:bg-gray-200'
                    }`}
                  >
                    {type === 'one-time' ? 'One-time' : 'Monthly'}
                  </button>
                ))}
              </div>
            </div>

            <div className='mb-8'>
              <label className='block text-sm font-semibold mb-4 text-secondary'>Select Amount</label>
              <div className='grid grid-cols-3 gap-3 mb-4'>
                {presets.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset)}
                    className={`py-3 rounded-lg font-semibold transition ${
                      amount === preset
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-secondary hover:bg-gray-200'
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-secondary font-semibold'>$</span>
                <input
                  type='number'
                  value={amount}
                  onChange={(e) => setAmount(Math.max(1, parseInt(e.target.value) || 0))}
                  className='flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
                />
              </div>
            </div>

            <div className='space-y-4 mb-8'>
              <input
                type='text'
                placeholder='Full Name'
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
              />
              <input
                type='email'
                placeholder='Email Address'
                className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>

            <button className='w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition flex items-center justify-center gap-2'>
              <Heart size={20} />
              Donate ${amount}
            </button>
          </div>

          <div className='space-y-6'>
            <div className='bg-white p-8 rounded-2xl shadow-md'>
              <h3 className='text-xl font-bold mb-3 text-secondary'>Your Impact</h3>
              <p className='text-text-muted mb-4'>
                Every donation directly supports our programs and initiatives that help families affected by dementia.
              </p>
              <ul className='space-y-3 text-text-muted'>
                <li className='flex items-start gap-3'>
                  <span className='text-primary font-bold text-xl'>•</span>
                  <span><strong>$25</strong> provides educational materials for 5 families</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-primary font-bold text-xl'>•</span>
                  <span><strong>$50</strong> supports one caregiver support group session</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-primary font-bold text-xl'>•</span>
                  <span><strong>$100</strong> funds an awareness workshop</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-primary font-bold text-xl'>•</span>
                  <span><strong>$250</strong> provides counseling sessions for caregivers</span>
                </li>
              </ul>
            </div>

            <div className='bg-accent p-8 rounded-2xl shadow-md'>
              <h3 className='text-xl font-bold mb-3 text-secondary'>Tax Benefits</h3>
              <p className='text-text-muted'>
                The Foundation for Dementia is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}