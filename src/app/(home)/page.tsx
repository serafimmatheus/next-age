import Image from 'next/image'
import { Button } from '../_components/ui/button'
import { MoveRight } from 'lucide-react'
import {
  EarthIcon,
  IdentificationPerson,
  PlayIcon,
  ProjectsIcon,
} from '../_icons'
import { Card, CardContent } from '../_components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../_components/ui/carousel'
import { Separator } from '../_components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../_components/ui/accordion'

const services = [
  {
    id: 1,
    title: 'New Staff Augmentation',
    image: '/service-one.png',
  },
  {
    id: 2,
    title: 'Software and App Development',
    image: '/service-two.png',
  },
  {
    id: 3,
    title: 'Systems Support',
    image: '/service-tree.png',
  },
]

const technologies = [
  {
    id: 1,
    title: 'Java',
    image: '/java.png',
  },
  {
    id: 2,
    title: 'TypeScript',
    image: '/typescript.png',
  },
  {
    id: 3,
    title: 'Nextjs',
    image: '/nextjs.png',
  },
  {
    id: 4,
    title: 'node',
    image: '/node.png',
  },
]

const cases = [
  {
    id: 1,
    title: 'One of the largest construction companies in Latin America',
    services: [
      'New Staff Augmentation ',
      'Software and App Support',
      'Software and App Development',
    ],
    logoUrl: '/case-odebrecht.png',
    coverImage: '/capa-case.png',
    qote: 'We have worked with several development companies, but the commitment that NextAge had with our projects is truly above average.',
  },
  {
    id: 2,
    title: 'One of the most traditional educational groups in Brazil.',
    services: ['New Staff Augmentation '],
    logoUrl: '/case-bom-jesus.png',
    coverImage: '/capa-case.png',
    qote: 'We found in NextAge the ideal partner for our IT team. Professionalism, flexibility, and commitment.',
  },
  {
    id: 3,
    title:
      'Company with one of the leading management software in the Brazilian market.',
    services: ['New Staff Augmentation '],
    logoUrl: '/case-benner.png',
    coverImage: '/capa-case.png',
    qote: 'The partnership with NextAge in New Staff Augmentation was essential to accelerate our development and innovation projects.',
  },
  {
    id: 4,
    title: 'Software development company from Canada.',
    services: ['New Staff Augmentation '],
    logoUrl: '/case-ifathom.png',
    coverImage: '/capa-case.png',
    qote: 'The NextAge team provided very helpful development services which proved to be useful on a number of projects. Their Team Leader was easy to communicate with and very knowledgeable.',
  },
  {
    id: 5,
    title: 'The Simplified Way To Maintain Your Home',
    services: ['New Staff Augmentation '],
    logoUrl: '/case-knome.png',
    coverImage: '/capa-case.png',
    qote: 'It has been such a positive experience working with NextAge and their team. We cannot wait to see what the future brings our way!',
  },
  {
    id: 6,
    title: 'One of the largest construction companies in Latin America',
    services: ['New Staff Augmentation '],
    logoUrl: '/case-vitu.png',
    coverImage: '/capa-case.png',
    qote: `NextAge's ability to provide development teams is something out of the ordinary. The synergy between the teams and the high productivity is very surprising. It is worth testing their services.`,
  },
]

export default function Home() {
  return (
    <main>
      <section className='mt-8 px-5 w-full max-w-[1440px] mx-auto'>
        <div>
          <h1 className='text-4xl md:text-[70px] md:leading-[50px] text-center font-bold leading-9 max-w-[945px] mx-auto'>
            Proper Staff Augmentation.
          </h1>
        </div>

        <div className='flex justify-between items-center gap-5'>
          <Card className='hidden sm:flex'>
            <CardContent className='p-5 flex flex-col justify-center items-center'>
              <div className='flex flex-col items-center mb-6'>
                <h3 className='text-5xl flex font-medium'>
                  16 <span className='text-destructive'>+</span>
                </h3>
                <p className='text-center font-bold text-sm leading-4'>
                  Years of experience
                </p>
              </div>

              <div className='bg-[#CAE0E6] rounded-full p-4'>
                <PlayIcon />
              </div>
            </CardContent>
          </Card>

          <div className='relative w-full h-[272px] sm:h-[372px] -mt-4 flex justify-center items-center'>
            <Image
              className='object-contain sm:object-contain'
              src='/Imagem.png'
              alt='teste'
              fill
            />
          </div>

          <Card className='bg-transparent border-none shadow-none hidden sm:flex'>
            <CardContent className='p-5 flex flex-col justify-center items-center'>
              <div className='bg-white rounded-2xl p-3'>
                <Image
                  src='/Logo_NextAge_Positiva.png'
                  alt='Logo_NextAge_Positiva.png'
                  width={20}
                  height={20}
                />
              </div>

              <p className='text-center font-bold text-sm leading-4 mt-3 mb-6'>
                Software and App Development and Support
              </p>

              <Button variant='destructive' className='rounded-full text-sm'>
                Services
                <MoveRight className='ml-2' size={18} />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className='relative w-full h-auto bg-[#0C272F] rounded-[22px] overflow-hidden px-5 md:px-16 py-8 md:py-16 flex flex-col sm:flex-row sm:gap-10 -mt-2'>
          <Image src='/gradient-1.png' alt='teste' fill />

          <h2 className='text-secondary font-bold text-[26px] leading-8 w-full max-w-[380px] md:text-[40px] md:leading-[50px]'>
            High performing <p className='text-white'>developers.</p>
          </h2>

          <div className='flex flex-col'>
            <p className='text-secondary pt-4 pb-6 left-6 text-base'>
              We are proud to introduce our groundbreaking New Staff
              Augmentation Model, which has revolutionized the way we assign
              developers and significantly reduces the risks associated with
              traditional bodyshop.
            </p>

            <Button variant='link' className='text-white self-end'>
              Learn More
              <MoveRight className='ml-2' size={18} />
            </Button>
          </div>
        </div>

        <div className='flex mt-8 mb-8 sm:hidden'>
          <Card>
            <CardContent className='p-5 flex flex-col justify-center items-center'>
              <div className='flex flex-col items-center mb-6'>
                <h3 className='text-5xl flex font-medium'>
                  16 <span className='text-destructive'>+</span>
                </h3>
                <p className='text-center font-bold text-sm leading-4'>
                  Years of experience
                </p>
              </div>

              <div className='bg-[#CAE0E6] rounded-full p-4'>
                <PlayIcon />
              </div>
            </CardContent>
          </Card>

          <Card className='bg-transparent border-none shadow-none'>
            <CardContent className='p-5 flex flex-col justify-center items-center'>
              <div className='bg-white rounded-2xl p-3'>
                <Image
                  src='/Logo_NextAge_Positiva.png'
                  alt='Logo_NextAge_Positiva.png'
                  width={20}
                  height={20}
                />
              </div>

              <p className='text-center font-bold text-sm leading-4 mt-3 mb-6'>
                Software and App Development and Support
              </p>

              <Button variant='destructive' className='rounded-full text-sm'>
                Services
                <MoveRight className='ml-2' size={18} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='flex justify-between items-center px-5 md:mt-24 w-full mx-auto max-w-[1440px]'>
        <div className='flex flex-col'>
          <div className='bg-white rounded-xl p-2 self-start mb-2'>
            <EarthIcon />
          </div>

          <h4 className='text-2xl font-bold font-unbounded -mb-1 md:text-[80px] md:leading-[90px]'>
            9
          </h4>
          <p className='font-unbounded text-xs text-secondary md:text-xl'>
            countries
          </p>
        </div>

        <div className='flex flex-col border-l border-secondary/30 px-5'>
          <div className='bg-white rounded-xl p-2 self-start mb-2'>
            <IdentificationPerson />
          </div>

          <h4 className='text-2xl font-bold font-unbounded -mb-1 md:text-[80px] md:leading-[90px]'>
            120
          </h4>
          <p className='font-unbounded text-xs text-secondary md:text-xl'>
            people
          </p>
        </div>

        <div className='flex flex-col border-l border-secondary/30 px-5'>
          <div className='bg-white rounded-xl p-2 self-start mb-2'>
            <ProjectsIcon />
          </div>

          <h4 className='text-2xl font-bold font-unbounded -mb-1 md:text-[80px] md:leading-[90px]'>
            500
          </h4>
          <p className='font-unbounded text-xs text-secondary md:text-xl'>
            projects
          </p>
        </div>
      </section>

      <section className='pt-8 px-5 leading-10'>
        <h1 className='font-bold text-[40px]'>
          More than code. <span className='text-secondary'>People.</span>
        </h1>

        <div className='relative w-full h-[370px] mt-5'>
          <Image src='/1.png' alt='Homem pardo segurando um notebook' fill />
        </div>

        <div className='relative w-full h-[172px] mt-5'>
          <Image
            src='/Mask-group.png'
            alt='Grupo de 4 pessoas planejando algo, estão felizes e sorrindo'
            fill
          />
        </div>

        <div className='flex gap-3'>
          <div className='relative w-full h-[172px] mt-5'>
            <Image
              src='/3.png'
              alt='uma mão apontando na tela alguma coisa'
              fill
            />
          </div>
          <div className='relative w-full h-[172px] mt-5'>
            <Image
              src='/4.png'
              alt='Um rosto de uma mulher com o cabelo amarrado aparentemente feliz'
              fill
            />
          </div>
        </div>
      </section>

      <section className='pt-8'>
        <h2 className='font-bold text-[22px] leading-6 text-center'>
          Clients and partners
        </h2>

        <div className='grid grid-cols-4 mt-6 gap-y-2'>
          <Image
            src='/google.png'
            alt='logo da google'
            width={70}
            height={20}
            className='saturate-0 hover:saturate-100 cursor-pointer'
          />

          <Image
            src='/batavo.png'
            alt='logo da google'
            width={70}
            height={20}
            className='saturate-0 hover:saturate-100 cursor-pointer'
          />

          <Image
            src='/modal.png'
            alt='logo da google'
            width={70}
            height={20}
            className='saturate-0 hover:saturate-100 cursor-pointer'
          />

          <Image
            src='/vitu.png'
            alt='logo da google'
            width={70}
            height={20}
            className='saturate-0 hover:saturate-100 cursor-pointer'
          />

          <Image
            src='/amazon.png'
            alt='logo da google'
            width={70}
            height={20}
            className='saturate-0 hover:saturate-100 cursor-pointer'
          />

          <Image
            src='/odebrecht.png'
            alt='logo da google'
            width={70}
            height={20}
            className='saturate-0 hover:saturate-100 cursor-pointer'
          />

          <Image
            src='/microsoft.png'
            alt='logo da google'
            width={70}
            height={20}
            className='saturate-0 hover:saturate-100 cursor-pointer'
          />

          <Image
            src='/modal.png'
            alt='logo da google'
            width={70}
            height={20}
            className='saturate-0 hover:saturate-100 cursor-pointer'
          />
          <Image
            src='/google.png'
            alt='logo da google'
            width={70}
            height={20}
            className='saturate-0 hover:saturate-100 cursor-pointer'
          />

          <Image
            src='/batavo.png'
            alt='logo da google'
            width={70}
            height={20}
            className='saturate-0 hover:saturate-100 cursor-pointer'
          />

          <Image
            src='/modal.png'
            alt='logo da google'
            width={70}
            height={20}
            className='saturate-0 hover:saturate-100 cursor-pointer'
          />

          <Image
            src='/vitu.png'
            alt='logo da google'
            width={70}
            height={20}
            className='saturate-0 hover:saturate-100 cursor-pointer'
          />
        </div>
      </section>

      <section className='mt-10 pl-5'>
        <h1 className='text-[40px] font-bold pr-5'>Services</h1>

        <Carousel className='w-full max-w-sm'>
          <CarouselContent className='-ml-1'>
            {services.map((item, index) => (
              <CarouselItem
                key={index}
                className='pl-1 basis-11/12 lg:basis-1/3'
              >
                <div className='p-1 h-full'>
                  <Card className='mt-8 h-auto'>
                    <CardContent className='p-0'>
                      <div className='relative w-full -mt-6 h-[260px]'>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className='object-fill'
                        />
                      </div>

                      <div className='flex items-center justify-between mt-20 p-5 gap-5'>
                        <h2 className='font-bold text-xl'>{item.title}</h2>
                        <Button
                          variant='ghost'
                          className='bg-background rounded-full p-2 size-10'
                        >
                          <MoveRight size={18} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section className='mt-16 px-5'>
        <h2 className='font-bold text-[40px]'>Differentials</h2>

        <div className='flex gap-5 mt-8'>
          <div className='bg-white rounded-xl p-2 self-start mb-2'>
            <EarthIcon />
          </div>

          <div className='flex flex-col'>
            <h2 className='font-bold'>Flexible Contract</h2>
            <p className='font-medium text-sm leading-6 text-secondary mt-4'>
              Termination during the first two weeks of work without penalty or
              prior notice.
            </p>
          </div>
        </div>

        <div className='flex gap-5 mt-6'>
          <div className='bg-white rounded-xl p-2 self-start mb-2'>
            <EarthIcon />
          </div>

          <div className='flex flex-col'>
            <h2 className='font-bold'>Own Resources</h2>
            <p className='font-medium text-sm leading-6 text-secondary mt-4'>
              All alocated professionals are NextAge staff. We don&apos;t
              recruit for our clients.
            </p>
          </div>
        </div>

        <div className='flex gap-5 mt-6'>
          <div className='bg-white rounded-xl p-2 self-start mb-2'>
            <EarthIcon />
          </div>

          <div className='flex flex-col'>
            <h2 className='font-bold'>Low Turnover</h2>
            <p className='font-medium text-sm leading-6 text-secondary mt-4'>
              If there&apos;s a turnover, our team provides all the onboarding
              and training with a discount.
            </p>
          </div>
        </div>

        <div className='flex gap-5 mt-6'>
          <div className='bg-white rounded-xl p-2 self-start mb-2'>
            <EarthIcon />
          </div>

          <div className='flex flex-col'>
            <h2 className='font-bold'>High performance</h2>
            <p className='font-medium text-sm leading-6 text-secondary mt-4'>
              Internal Tech Leads ensure team&apos;s productivity, at no
              additional cost.
            </p>
          </div>
        </div>
        <div className='flex gap-5 mt-6'>
          <div className='bg-white rounded-xl p-2 self-start mb-2'>
            <EarthIcon />
          </div>

          <div className='flex flex-col'>
            <h2 className='font-bold'>Discount</h2>
            <p className='font-medium text-sm leading-6 text-secondary mt-4'>
              Discount on the first 30 days for each new allocated professional.
            </p>
          </div>
        </div>

        <div className='flex gap-5 mt-6'>
          <div className='bg-white rounded-xl p-2 self-start mb-2'>
            <EarthIcon />
          </div>

          <div className='flex flex-col'>
            <h2 className='font-bold'>Outsourcing 2.0</h2>
            <p className='font-medium text-sm leading-6 text-secondary mt-4'>
              A methodology approved by clients worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className='px-5 mt-40'>
        <div className='relative w-full h-auto bg-[#0C272F] rounded-[22px] overflow-hidden px-5 py-8 flex flex-col'>
          <Image src='/gradient-1.png' alt='teste' fill />

          <h2 className='text-secondary font-bold text-[28px] leading-8'>
            Charge your team with <span className='text-white'>skilled</span>{' '}
            developers
          </h2>

          <Button variant='destructive' className='rounded-full mt-8'>
            Hire a dev
            <MoveRight className='ml-2' size={18} />
          </Button>
        </div>
      </section>

      <section className='mt-12 pl-5'>
        <h2 className='text-[22px] pr-5 font-bold leading-6'>
          Our <span className='text-secondary'>knowledge</span>, our power.
        </h2>

        <Carousel className='w-full mt-6'>
          <CarouselContent className='-ml-1'>
            {technologies.map((item, index) => (
              <CarouselItem key={index} className='pl-1 basis-2/5 lg:basis-1/3'>
                <div className='p-1'>
                  <Card className='bg-transparent border-none shadow-none'>
                    <CardContent className='flex p-0'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={100}
                        height={70}
                        className='saturate-0 hover:saturate-100 cursor-pointer'
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section className='pt-20'>
        <h2 className='font-bold text-[40px] px-5'>Cases</h2>

        <Carousel className='w-full'>
          <CarouselContent className='ml-2'>
            {cases.map((item, index) => (
              <CarouselItem key={index} className='pl-2 basis-11/12'>
                <div className='p-0'>
                  <Card className='p-0'>
                    <CardContent className='flex flex-col p-0'>
                      <div className='relative w-full h-[200px] overflow-hidden'>
                        <Image
                          src={item.coverImage}
                          alt={item.title}
                          fill
                          className='object-cover rounded-tr-xl rounded-tl-xl'
                        />
                      </div>

                      <div className='px-5 py-5'>
                        <Image
                          src={item.logoUrl}
                          alt={item.title}
                          width={100}
                          height={28}
                        />

                        <h2 className='font-bold leading-5 mt-4'>
                          {item.title}
                        </h2>

                        <h3>Services</h3>

                        <div className='flex flex-wrap gap-2 my-8'>
                          {item.services.map((service, index) => (
                            <Button
                              key={index}
                              className='text-[10px] p-2 leading-3 border-primary border'
                            >
                              {service}
                            </Button>
                          ))}
                        </div>

                        <div>
                          <p className='text-sm font-medium leading-5'>
                            {item.qote}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section className='mt-16 px-5'>
        <h2 className='font-bold text-[40px] px-5 text-center'>Testmonials</h2>

        <div className='flex flex-col mt-8 mb-8'>
          <p className='font-medium text-sm text-secondary'>
            We employ cutting technologies and agile methodologies to create
            efficient and scalable systems that help our clients streamline
          </p>

          <div className='flex gap-4 mt-4 items-center'>
            <div className='relative size-11'>
              <Image src='/person-placeholder.png' alt='person' fill />
            </div>
            <div className='flex flex-col'>
              <h2 className='leading-4 font-bold text-sm'>Raul Macedo</h2>
              <span className='leading-4 font-medium text-xs text-secondary'>
                CEO, Mentores Digital
              </span>
            </div>
          </div>
        </div>

        <Separator orientation='horizontal' className='bg-secondary/30' />
        <div className='flex flex-col mt-8 mb-8'>
          <p className='font-medium text-sm text-secondary'>
            We employ cutting technologies and agile methodologies to create
            efficient and scalable systems that help our clients streamline
          </p>

          <div className='flex gap-4 mt-4 items-center'>
            <div className='relative size-11'>
              <Image src='/person-placeholder.png' alt='person' fill />
            </div>
            <div className='flex flex-col'>
              <h2 className='leading-4 font-bold text-sm'>Raul Macedo</h2>
              <span className='leading-4 font-medium text-xs text-secondary'>
                CEO, Mentores Digital
              </span>
            </div>
          </div>
        </div>

        <Separator orientation='horizontal' className='bg-secondary/30' />
        <div className='flex flex-col mt-8'>
          <p className='font-medium text-sm text-secondary'>
            We employ cutting technologies and agile methodologies to create
            efficient and scalable systems that help our clients streamline
          </p>

          <div className='flex gap-4 mt-4 items-center'>
            <div className='relative size-11'>
              <Image src='/person-placeholder.png' alt='person' fill />
            </div>
            <div className='flex flex-col'>
              <h2 className='leading-4 font-bold text-sm'>Raul Macedo</h2>
              <span className='leading-4 font-medium text-xs text-secondary'>
                CEO, Mentores Digital
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-16 px-5'>
        <h2 className='font-bold text-[22px] leading-7'>
          Frequently asked questions
        </h2>

        <Accordion type='single' collapsible className='w-full mt-6'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='font-bold text-left px-5 leading-5'>
              Software and App Development
            </AccordionTrigger>
            <AccordionContent className='text-secondary font-medium text-sm'>
              At NextAge, we’re dedicated to providing ongoing support and
              maintenance to ensure that our systems remain up-to-date and
              running smoothly. We employ cutting-edge technologies and agile
              methodologies to create efficient and scalable systems that help
              our clients streamline complex processes, boost productivity, and
              enhance decision-making.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-2'>
            <AccordionTrigger className='font-bold text-left px-5 leading-5'>
              Software and App Development
            </AccordionTrigger>
            <AccordionContent className='text-secondary font-medium text-sm'>
              At NextAge, we’re dedicated to providing ongoing support and
              maintenance to ensure that our systems remain up-to-date and
              running smoothly. We employ cutting-edge technologies and agile
              methodologies to create efficient and scalable systems that help
              our clients streamline complex processes, boost productivity, and
              enhance decision-making.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-3'>
            <AccordionTrigger className='font-bold text-left px-5 leading-5'>
              Software and App Development
            </AccordionTrigger>
            <AccordionContent className='text-secondary font-medium text-sm'>
              At NextAge, we’re dedicated to providing ongoing support and
              maintenance to ensure that our systems remain up-to-date and
              running smoothly. We employ cutting-edge technologies and agile
              methodologies to create efficient and scalable systems that help
              our clients streamline complex processes, boost productivity, and
              enhance decision-making.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className='pt-8 px-5 mb-8'>
        <div className='relative w-full h-auto bg-[#0C272F] rounded-[22px] overflow-hidden px-5 py-8 flex flex-col'>
          <Image src='/gradient-1.png' alt='teste' fill />

          <h2 className='text-secondary font-bold text-[50px] leading-10'>
            Let’s get to <span className='text-white'>work.</span>
          </h2>

          <Button variant='destructive' className='rounded-full mt-8'>
            Hire a dev
            <MoveRight className='ml-2' size={18} />
          </Button>
        </div>
      </section>
    </main>
  )
}
