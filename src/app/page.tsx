import Link from "next/link";
import { ArrowRight, Building2, HardHat, Home as HomeIcon, Ruler } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Geleceği Birlikte <span className="text-blue-600">İnşa Ediyoruz</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              ADG Yapı olarak yılların verdiği tecrübeyle estetik, güvenli ve modern yaşam alanları tasarlıyor, hayallerinizi sağlam temeller üzerine kuruyoruz.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/projeler"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Projelerimizi İnceleyin
              </Link>
              <Link href="/iletisim" className="text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1">
                İletişime Geç <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Hizmetlerimiz</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Size Nasıl Yardımcı Olabiliriz?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              İnşaat sektöründeki tüm ihtiyaçlarınıza profesyonel ekibimiz ve yenilikçi çözümlerimizle cevap veriyoruz.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <Building2 className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  Anahtar Teslim İnşaat
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Arsadan anahtar teslime kadar tüm inşaat süreçlerini uzman kadromuzla yönetiyoruz.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <Ruler className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  Mimari Projelendirme
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Modern, estetik ve fonksiyonel mimari projeler tasarlıyoruz.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <HomeIcon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  Tadilat ve Dekorasyon
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Eski yapılarınızı yeniliyor, iç mekan tasarımlarıyla değer katıyoruz.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <HardHat className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  Kentsel Dönüşüm
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Depreme dayanıksız binalarınızı güvenli ve modern yaşam alanlarına dönüştürüyoruz.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">Tamamlanan Proje</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">150+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">Yıllık Tecrübe</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">15</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">Mutlu Müşteri</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">100%</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Yeni projeniz için hazır mısınız?
            <br />
            Bizimle iletişime geçin.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link
              href="/iletisim"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Hemen Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
