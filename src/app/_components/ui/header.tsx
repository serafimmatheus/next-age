import { LogoHeader } from '@/app/_icons'
import { Card, CardContent } from './card'
import { Button } from './button'

import { Carousel, CarouselContent, CarouselItem } from './carousel'
import Link from 'next/link'

const menuItems = [
  {
    label: 'About Us',
    link: '#',
  },
  {
    label: 'Services',
    link: '#',
  },
  {
    label: 'Differentials',
    link: '#',
  },
  {
    label: 'Cases',
    link: '#',
  },
  {
    label: 'Testmonials',
    link: '#',
  },
]

export function Header() {
  return (
    <header>
      <Card className='border-none rounded-none shadow-none bg-background'>
        <CardContent className='pt-5 px-0'>
          <div className='flex justify-between items-center px-5'>
            <LogoHeader />

            <Button className='rounded-full font-bold'>Get in touch</Button>
          </div>

          <Carousel className='w-full mt-4 pl-5 cursor-pointer'>
            <CarouselContent className='-ml-1'>
              {menuItems.map((menu, index) => (
                <CarouselItem
                  key={index}
                  className='pl-1 basis-3/8 lg:basis-1/3'
                >
                  <div className='p-1'>
                    <Card className='p-0 border-none shadow-none bg-background'>
                      <CardContent className='flex items-center justify-center p-0'>
                        <Link
                          href={menu.link}
                          className='text-xs font-semibold'
                        >
                          {menu.label}
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardContent>
      </Card>
    </header>
  )
}
