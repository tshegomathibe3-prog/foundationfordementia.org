'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Blog() {
  const [posts] = useState([
    {
      id: 1,
      title: 'Understanding the Stages of Dementia',
      excerpt: 'A comprehensive guide to the different stages of dementia and what to expect at each phase.',
      date: '2024-05-10',
      author: 'Dr. Sarah Johnson',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1516979187457-635ffe35ff91?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Caregiving Tips: Creating a Safe Home Environment',
      excerpt: 'Practical advice for making your home safer and more comfortable for a loved one with dementia.',
      date: '2024-05-03',
      author: 'Maria Garcia',
      category: 'Caregiving',
      image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'The Importance of Memory Care and Reminiscence Therapy',
      excerpt: 'How reminiscence therapy can improve quality of life for people with dementia.',
      date: '2024-04-26',
      author: 'Dr. James Wilson',
      category: 'Therapy',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Self-Care for Caregivers: Preventing Burnout',
      excerpt: 'Essential strategies for caregivers to maintain their own physical and mental health.',
      date: '2024-04-19',
      author: 'Lisa Chen',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1516594915649-c945face8ad1?w=400&h=250&fit=crop'
    }
  ])

  return (
    <main className='min-h-screen bg-light'>
      <section className='max-w-6xl mx-auto px-6 py-20'>
        <h1 className='text-5xl font-bold mb-4 text-secondary'>Our Blog</h1>
        <p className='text-lg text-text-muted mb-12'>
          Read stories, tips, and educational content about dementia care and support.
        </p>

        <div className='grid md:grid-cols-2 gap-8'>
          {posts.map((post) => (
            <article key={post.id} className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition'>
              <img
                src={post.image}
                alt={post.title}
                className='w-full h-48 object-cover'
              />

              <div className='p-8'>
                <div className='flex justify-between items-start mb-4'>
                  <span className='inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold'>
                    {post.category}
                  </span>
                  <span className='text-sm text-text-muted'>
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>

                <h3 className='text-2xl font-bold mb-3 text-secondary'>
                  {post.title}
                </h3>

                <p className='text-text-muted mb-4 leading-relaxed'>
                  {post.excerpt}
                </p>

                <div className='flex justify-between items-center'>
                  <span className='text-sm text-text-muted'>By {post.author}</span>
                  <Link href='#' className='text-primary hover:opacity-70 transition font-semibold'>
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}