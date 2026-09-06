import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Hakkımızda</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ADG Yapı olarak, inşaat sektöründe yenilikçi vizyonumuz ve yılların getirdiği tecrübeyle değer yaratıyoruz.
            Her projemizde kaliteyi, güvenliği ve estetiği ön planda tutarak, müşterilerimize en iyi yaşam alanlarını sunmayı hedefliyoruz.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-slate-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <CheckCircle2 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Misyonumuz
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Müşteri beklentilerini aşan, çevreye duyarlı, modern ve güvenilir yapılar inşa ederek toplumun yaşam kalitesini yükseltmek. İş sağlığı ve güvenliği standartlarından asla ödün vermeden projelerimizi zamanında teslim etmek.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-slate-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <CheckCircle2 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Vizyonumuz
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  İnşaat sektöründe yenilikçi teknolojileri takip eden, sürdürülebilir mimari anlayışıyla öncü ve lider bir marka olmak. Ulusal ve uluslararası arenada referans gösterilen projelere imza atmak.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-slate-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <CheckCircle2 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Değerlerimiz
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Güvenilirlik ve Şeffaflık</li>
                  <li>Kalite Odaklılık</li>
                  <li>Çevreye ve İnsana Saygı</li>
                  <li>Sürekli Gelişim ve İnovasyon</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
