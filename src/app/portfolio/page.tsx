import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

const features = [
  {
    name: 'Starlink Residencial',
    description:
      'deal para uso doméstico, o plano residencial oferece velocidades médias de 50 a 250 Mbps, com baixa latência, sendo perfeito para streaming, jogos online e trabalho remoto. Diferenciais: Conexão confiável em áreas rurais e remotas onde provedores tradicionais não atuam. Público-alvo: Famílias e pequenos negócios em locais isolados.',
    imageSrc: '/banner/04.webp',
    imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
  },
  {
    name: 'Starlink Viagens',
    description:
      'Desenvolvido para viajantes, este plano permite acesso à internet em movimento, seja em um motorhome, trailer ou durante acampamentos em áreas remotas. Diferenciais: Conexão portátil e sem limites de localização, perfeito para quem busca mobilidade e conectividade constante. Público-alvo: Aventureiros, viajantes e comunidades nômades.',
    imageSrc: '/banner/05.webp',
    imageAlt: 'Double stitched black canvas hook loop.',
  },
  {
    name: 'Startlink Empresarial',
    description:
      'Uma solução premium para empresas, com velocidades que variam de 150 a 500 Mbps e maior prioridade de largura de banda, ideal para operações críticas e grande volume de dados. Diferenciais: Antenas mais robustas, suporte técnico dedicado e prioridade de tráfego de rede. Público-alvo: Pequenas e médias empresas que necessitam de alta performance e estabilidade.',
    imageSrc: '/banner/07.webp',
    imageAlt: 'Black canvas body with chrome zipper and key ring.',
  },
]

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="font-semibold text-gray-500">Portifólio</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Portifólio
              </p>
              <p className="mt-4 text-gray-500">
                A Starlink oferece três principais planos para atender
                diferentes perfis de clientes, cada um projetado para fornecer
                internet de alta qualidade, mesmo nas áreas mais remotas.
                Conheça os planos disponíveis:
              </p>
            </div>

            <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                >
                  <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-auto lg:col-span-7 xl:col-span-8">
                    <img
                      alt={feature.imageAlt}
                      src={feature.imageSrc}
                      className="aspect-[5/2] w-full rounded-lg bg-gray-100 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
