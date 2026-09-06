import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">İletişime Geçin</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Yeni projeleriniz için teklif almak, hizmetlerimiz hakkında bilgi edinmek veya sorularınız için bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:grid-cols-2">
          <div className="flex flex-col gap-y-8">
            <div className="flex gap-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-slate-900">Merkez Ofis</h3>
                <p className="mt-2 leading-7 text-gray-600">Örnek Mahallesi, Yapı Caddesi<br />No:1, Kat:5 Daire:12<br />Kadıköy / İstanbul</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                <Phone className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-slate-900">Telefon</h3>
                <p className="mt-2 leading-7 text-gray-600">+90 (555) 123 45 67<br />+90 (216) 123 45 67</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                <Mail className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-slate-900">E-posta</h3>
                <p className="mt-2 leading-7 text-gray-600">info@adgyapi.com<br />teklif@adgyapi.com</p>
              </div>
            </div>
          </div>

          <form action="#" method="POST" className="flex flex-col gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-900">
                Ad Soyad
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                E-posta Adresi
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-slate-900">
                Telefon Numarası
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">
                Mesajınız
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
