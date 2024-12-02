import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Navbar />
      <Container className="mt-32">
        <Heading as="h3" className="mt-2">
          A História da Starlink
        </Heading>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-w-lg">
            <p className="text-md text-gray-600">
              A Starlink foi fundada em 2015 como uma divisão da SpaceX, com o
              objetivo de oferecer internet de alta velocidade para áreas
              remotas e desatendidas ao redor do mundo. Seus fundadores,
              liderados por Elon Musk, tiveram a visão de criar uma rede global
              de satélites para democratizar o acesso à informação.
            </p>
            <p className="text-md mt-8 text-gray-600">
              As operações começaram em Hawthorne, Califórnia, e os primeiros
              satélites foram lançados em 2019. Desde então, a empresa tem
              expandido continuamente, alcançando milhões de usuários em mais de
              40 países. Com um portfólio robusto e uma abordagem inovadora, a
              Starlink continua conectando comunidades e transformando vidas.
            </p>
          </div>
          <div className="max-lg:order-first max-lg:max-w-lg">
            <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src="/banner/02.webp"
                className="block size-full object-cover"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
        <hr className="mt-6 border-t border-gray-200" />
      </Container>
      <Footer />
    </>
  )
}
