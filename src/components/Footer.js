import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-secondary text-white'>
      <div className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid md:grid-cols-4 gap-8 mb-12'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Foundation for Dementia</h3>
            <p className='text-sm opacity-70'>
              Awareness • Support • Community. Dedicated to creating compassionate communities for individuals affected by dementia.
            </p>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm opacity-80'>
              <li><Link href='/' className='hover:opacity-100 transition'>Home</Link></li>
              <li><Link href='/about' className='hover:opacity-100 transition'>About Us</Link></li>
              <li><Link href='/events' className='hover:opacity-100 transition'>Events</Link></li>
              <li><Link href='/donate' className='hover:opacity-100 transition'>Donate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Resources</h4>
            <ul className='space-y-2 text-sm opacity-80'>
              <li><Link href='/dementia-info' className='hover:opacity-100 transition'>Dementia Info</Link></li>
              <li><Link href='/blog' className='hover:opacity-100 transition'>Blog</Link></li>
              <li><Link href='/volunteer' className='hover:opacity-100 transition'>Volunteer</Link></li>
              <li><Link href='/contact' className='hover:opacity-100 transition'>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Contact</h4>
            <ul className='space-y-3 text-sm'>
              <li className='flex items-center gap-2 opacity-80'>
                <Mail size={16} />
                info@foundationfordementia.org
              </li>
              <li className='flex items-center gap-2 opacity-80'>
                <Phone size={16} />
                +1 (555) 123-4567
              </li>
              <li className='flex items-center gap-2 opacity-80'>
                <MapPin size={16} />
                123 Care Street, City, ST 12345
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-white/20 pt-8 mb-8'>
          <div className='flex justify-center gap-6 mb-8'>
            <a href='#' className='hover:opacity-70 transition'>
              <Facebook size={20} />
            </a>
            <a href='#' className='hover:opacity-70 transition'>
              <Instagram size={20} />
            </a>
            <a href='#' className='hover:opacity-70 transition'>
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className='text-center text-sm opacity-60'>
          <p>&copy; {currentYear} Foundation for Dementia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}