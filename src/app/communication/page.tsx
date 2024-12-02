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
          A Comunicação da Starlink
        </Heading>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="max-w-lg">
            <p className="text-md text-gray-600">
              Na Starlink, a comunicação é um elemento essencial para o sucesso.
              A empresa utiliza canais eficazes para garantir que informações
              fluam de maneira eficiente entre suas equipes e com seus clientes.
              Fluxo comunicacional: Horizontal e vertical (ascendente e
              descendente), garantindo que todos os níveis organizacionais
              estejam alinhados. Canais internos: Reuniões virtuais, e-mails
              corporativos e plataformas de colaboração. Canais externos: Redes
              sociais, newsletters e suporte técnico 24/7. Soluções:
              Investimento em sistemas de CRM para melhorar o engajamento e
              resolver problemas rapidamente. Essas estratégias destacam a
              importância de uma comunicação clara e direta para alcançar metas
              organizacionais.
            </p>
          </div>
          <div className="max-lg:order-first max-lg:max-w-lg">
            <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src="/banner/03.jpg"
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
