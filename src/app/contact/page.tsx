import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export default function Contacts() {
  return (
    <>
      <Navbar />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              <div>
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                  Fale Conosco
                </h2>
                <p className="mt-4 text-base/7 text-gray-600">
                  A Starlink está disponível para responder suas dúvidas e
                  oferecer suporte. Entre em contato conosco pelos seguintes
                  canais:
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">
                    Suporte
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          href="mailto:suporte@starlink.com"
                          className="font-semibold text-indigo-600"
                        >
                          suporte@starlink.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Telefone</dt>
                      <dd>+1 (800) 123-4567</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">
                    Califórnia
                  </h3>
                  <address className="mt-3 space-y-1 text-sm/6 not-italic text-gray-600">
                    <p>Hawthorne, Califórnia, EUA</p>
                  </address>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">
                    Site
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Site</dt>
                      <dd>
                        <a
                          href="www.starlink.com"
                          target="_blank"
                          className="font-semibold text-indigo-600"
                        >
                          www.starlink.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
