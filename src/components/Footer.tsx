import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Alt Bilgi
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-3xl font-bold tracking-tight">
              ADG <span className="text-blue-500">Yapı</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300 max-w-xs">
              Yılların tecrübesiyle, güvenilir ve modern yapılar inşa ediyoruz. Hayalinizdeki projeleri gerçeğe dönüştürüyoruz.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Hızlı Menü</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/hakkimizda" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link href="/hizmetler" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Hizmetlerimiz
                    </Link>
                  </li>
                  <li>
                    <Link href="/projeler" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Projelerimiz
                    </Link>
                  </li>
                  <li>
                    <Link href="/iletisim" className="text-sm leading-6 text-gray-300 hover:text-white">
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Hizmetlerimiz</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/hizmetler" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Anahtar Teslim İnşaat
                    </Link>
                  </li>
                  <li>
                    <Link href="/hizmetler" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Mimari Projelendirme
                    </Link>
                  </li>
                  <li>
                    <Link href="/hizmetler" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Tadilat ve Dekorasyon
                    </Link>
                  </li>
                  <li>
                    <Link href="/hizmetler" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Kentsel Dönüşüm
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">İletişim</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center text-sm leading-6 text-gray-300">
                    <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-blue-500" />
                    <span>Orhangazi, 230. Sk. no:14/3<br />41455 Dilovası/Kocaeli</span>
                  </li>
                  <li className="flex items-center text-sm leading-6 text-gray-300">
                    <Phone className="h-5 w-5 mr-3 text-blue-500" />
                    +90 536 871 81 73
                  </li>
                  <li className="flex items-center text-sm leading-6 text-gray-300">
                    <Mail className="h-5 w-5 mr-3 text-blue-500" />
                    ozadgyapi@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} ADG Yapı. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
