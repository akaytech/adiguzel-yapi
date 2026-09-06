export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Vadi Konakları",
      category: "Konut Projesi",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Tamamlandı",
    },
    {
      id: 2,
      title: "Merkez Ofis Plaza",
      category: "Ticari Proje",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Devam Ediyor",
    },
    {
      id: 3,
      title: "Deniz Evleri",
      category: "Villa Projesi",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Tamamlandı",
    },
    {
      id: 4,
      title: "Eğitim Kompleksi",
      category: "Kamu Projesi",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Devam Ediyor",
    },
    {
      id: 5,
      title: "Güneş Yaşam Merkezi",
      category: "Karma Proje",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Planlanıyor",
    },
    {
      id: 6,
      title: "Tarihi Köşk Restorasyonu",
      category: "Restorasyon",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Tamamlandı",
    },
  ];

  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Projelerimiz</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bugüne kadar başarıyla tamamladığımız ve yapımı devam eden projelerimizden bazıları.
            Her bir projemizde kalite ve güven standartlarımızı bir adım daha ileriye taşıyoruz.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="flex flex-col items-start bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[16/9] w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                  {project.status}
                </div>
              </div>
              <div className="max-w-xl p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-blue-600 font-semibold">{project.category}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-blue-600">
                    <span className="absolute inset-0" />
                    {project.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
