export default function About() {
  const pillars = [
    {
      title: 'Awareness',
      description: 'Educating communities about dementia and memory health.'
    },
    {
      title: 'Support',
      description: 'Helping caregivers and families feel less alone.'
    },
    {
      title: 'Community',
      description: 'Building compassionate dementia-aware communities.'
    },
    {
      title: 'Care',
      description: 'Promoting dignity, empathy, and emotional connection.'
    }
  ]

  return (
    <section className='max-w-6xl mx-auto px-6 py-24'>
      <div className='grid md:grid-cols-2 gap-16 items-center'>
        <div>
          <h2 className='text-4xl font-bold mb-6 text-secondary'>Why We Exist</h2>
          <p className='text-lg leading-relaxed text-text-muted mb-6'>
            Inspired by personal experiences with dementia, our foundation was created to bring awareness, dignity, and emotional support to families navigating memory loss and caregiving.
          </p>

          <p className='text-lg leading-relaxed text-text-muted'>
            We believe every person deserves compassion, connection, and respect throughout every stage of life.
          </p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`bg-white p-6 rounded-3xl shadow-md ${idx % 2 === 1 ? 'mt-8' : ''}`}>
              <h3 className='font-semibold text-xl mb-3 text-secondary'>{pillar.title}</h3>
              <p className='text-text-muted text-sm leading-relaxed'>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}