import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

const posts = [
  {
    id: 1,
    title: 'Governo fecha acordo com “Starlink da China”',
    href: '#',
    description:
      'O governo federal assinou, nesta terça-feira (19), um acordo de cooperação com a empresa chinesa SpaceSail, que está desenvolvendo um sistema de internet de alta velocidade via satélite. Embora a SpaceSail ainda não ofereça esse tipo de serviço, a expectativa é de que a empresa lance sua plataforma de internet via satélite nos próximos dois anos. O acordo com o governo brasileiro prevê a colaboração dos chineses com a Telebras, com o objetivo de realizar estudos sobre a viabilidade do serviço, identificar os desafios de implementação e mapear as regiões do país que mais se beneficiariam dessa tecnologia.',
    imageUrl:
      'https://www.minhaoperadora.com.br/wp-content/uploads/2024/01/China-vai-construir-constelacao-de-satelites-para-competir-com-a-Starlink.jpg',
    date: 'Nov 19, 2024',
    datetime: '2024-11-19',
    category: {
      title: 'Recente',
      href: 'https://www.cnnbrasil.com.br/economia/negocios/governo-fecha-acordo-com-starlink-da-china-e-busca-concorrencia-no-setor/',
    },
    author: {
      name: 'Gabriel Garcia',
      role: 'Editor/Jornalista',
      href: '#',
      imageUrl:
        'https://static.vecteezy.com/system/resources/previews/013/360/247/non_2x/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg',
    },
  },
  {
    id: 2,
    title: 'Starlink fica mais perto de virar operadora de celular',
    href: 'https://olhardigital.com.br/2024/11/27/pro/starlink-fica-mais-perto-de-virar-operadora-de-celular-mas-com-limitacoes/',
    description:
      'A Starlink conseguiu sinal verde da FCC (Comissão Federal de Comunicações) para fornecer serviço de telefonia celular, mas com alguns limites. O órgão regulador de telecomunicações dos Estados Unidos emitiu uma ordem que concede parcialmente o pedido e adia uma decisão sobre alguns pontos.',
    imageUrl:
      'https://img.odcdn.com.br/wp-content/uploads/2024/09/shutterstock_2442885775-e1725621431605-1536x865.jpg',
    date: 'Nov 27, 2024',
    datetime: '2024-11-27',
    category: {
      title: 'Recente',
      href: 'https://www.cnnbrasil.com.br/economia/negocios/governo-fecha-acordo-com-starlink-da-china-e-busca-concorrencia-no-setor/',
    },
    author: {
      name: 'Gabriel Sérvio',
      role: 'Redator',
      href: 'https://olhardigital.com.br/author/da-redacao-4/',
      imageUrl:
        'https://img.odcdn.com.br/wp-content/uploads/2022/08/foto-gabriel-servio-150x150.jpg',
    },
  },
]

export default function News() {
  return (
    <>
      <Navbar />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Utimas Noticias
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      alt=""
                      src={post.imageUrl}
                      className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm/6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <img
                          alt=""
                          src={post.author.imageUrl}
                          className="size-10 rounded-full bg-gray-50"
                        />
                        <div className="text-sm/6">
                          <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
