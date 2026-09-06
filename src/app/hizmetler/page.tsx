import { Building2, Home, Ruler, HardHat, Hammer, PenTool } from "lucide-react";

const services = [
  {
    name: "Anahtar Teslim İnşaat",
    description: "Arsa temininden projelendirmeye, kaba inşaattan ince işçiliğe kadar tüm süreci tek elden ve profesyonelce yönetiyoruz. Hayalinizdeki yapıyı size eksiksiz teslim ediyoruz.",
    icon: Building2,
  },
  {
    name: "Mimari Projelendirme",
    description: "Alanında uzman mimarlarımızla, estetik, fonksiyonel ve güncel yönetmeliklere uygun mimari, statik, mekanik ve elektrik projeleri hazırlıyoruz.",
    icon: Ruler,
  },
  {
    name: "Tadilat ve Dekorasyon",
    description: "Mevcut mekanlarınızı ihtiyaçlarınıza ve güncel trendlere göre yeniden tasarlıyor, profesyonel ekibimizle yenileme çalışmalarını hayata geçiriyoruz.",
    icon: Home,
  },
  {
    name: "Kentsel Dönüşüm",
    description: "Deprem riskine karşı eski binalarınızı yeniliyor, kentsel dönüşüm sürecindeki tüm yasal ve teknik işlemleri sizin adınıza takip ediyoruz.",
    icon: HardHat,
  },
  {
    name: "Güçlendirme Çalışmaları",
    description: "Mevcut yapıların deprem performans analizlerini yapıyor ve gerekli görülen binalarda karbon fiber, çelik veya betonarme güçlendirme uygulamaları yapıyoruz.",
    icon: Hammer,
  },
  {
    name: "İç Mimari Tasarım",
    description: "Konut, ofis, mağaza gibi mekanlar için özgün iç mimari konseptler oluşturuyor, 3D görselleştirme ve uygulama hizmeti sunuyoruz.",
    icon: PenTool,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Hizmetlerimiz</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ADG Yapı olarak, inşaat ve mimarlık alanında geniş bir yelpazede, yüksek kalite standartlarında hizmet sunuyoruz.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
