import { LogoHeader, WhatsAppIcon } from '@/app/_icons'
import { Facebook, Instagram, Linkedin, WheatIcon, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer>
      <section className='border-t border-b border-secondary/30 px-5 py-6 flex flex-col gap-4 items-center'>
        <LogoHeader />

        <div className='flex items-center gap-2'>
          <WhatsAppIcon />
          <span className='font-medium'>+55 (41) 3015-8433</span>
        </div>

        <div className='flex gap-5 items-center'>
          <Facebook size={18} className='fill-black' />
          <Linkedin size={18} className='fill-black' />
          <Instagram size={18} />
          <Youtube />
        </div>
      </section>

      <section className='mt-8 px-5'>
        <div className='grid grid-cols-2 gap-10'>
          <div>
            <h2 className='font-bold text-sm'>Leiria</h2>
            <p className='font-medium text-sm text-secondary'>
              Rua da Carvalha, 570
            </p>
          </div>

          <div>
            <h2 className='font-bold text-sm'>Curitiba</h2>
            <p className='font-medium text-sm text-secondary'>
              Av. Nossa Senhora da Penha, 61
            </p>
          </div>
          <div>
            <h2 className='font-bold text-sm'>Paranavaí</h2>
            <p className='font-medium text-sm text-secondary'>
              Rua Manoel Ribas, 947
            </p>
          </div>
          <div>
            <h2 className='font-bold text-sm'>Guarapuava</h2>
            <p className='font-medium text-sm text-secondary'>
              Av. Profa. Laura Pacheco Bastos, 1011
            </p>
          </div>
        </div>
      </section>

      <section className='pt-8 px-5'>
        <div className='relative w-full h-[168px]'>
          <Image src='/Group-40.png' alt='dsa' fill />
        </div>

        <div className='grid grid-cols-2 gap-3 mt-3 mb-8'>
          <div className='relative w-full h-[140px]'>
            <Image src='/Group-41.png' alt='dsa' fill />
          </div>
          <div className='relative w-full h-[140px]'>
            <Image src='/Group-42.png' alt='dsa' fill />
          </div>
        </div>
      </section>

      <section className='border-t border-b border-secondary/30 px-5 py-6 flex flex-col gap-4 items-center'>
        <div className='flex gap-5 text-secondary underline font-medium text-xs'>
          <Link href='/'>Terms of service</Link>
          <Link href='/'>Privacy policy</Link>
        </div>
      </section>

      <section className='mt-8 mb-8 px-5 text-center'>
        <p className='text-xs text-secondary'>
          NextAge 2023 All rights reserved. Designed and Developed in Brazil by{' '}
          <Link
            className='font-bold'
            href='https://mentores.digital/pt-br/'
            target='_blank'
          >
            Mentores
          </Link>
        </p>
      </section>
    </footer>
  )
}
