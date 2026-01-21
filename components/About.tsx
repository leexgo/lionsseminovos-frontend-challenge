import { Trophy, ShieldCheck, Globe2, MapPin } from "lucide-react";

export default function About() {
  return (
    <section className="py-24" id="about">
      <div className="container mx-auto px-4">
        <div>
          <h1 className="font-semibold tracking-wide uppercase py-4">
            Quem Somos?
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            Tradição, credibilidade e<br />
            <span className="text-red-400">presença global.</span>
          </h2>
          <div className="prose prose-lg text-slate-300 leading-relaxed max-w-3xl">
            <p>
              A <strong>Lions</strong> é uma concessionária de automóveis
              especializada na revenda de veículos seminovos, com mais de{" "}
              <span className="text-red-400 font-semibold px-1">
                10 anos de tradição
              </span>
              e credibilidade no mercado automotivo. Nossa história é construída
              sobre pilares sólidos de confiança, excelência e atenção aos
              mínimos detalhes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-12 ">
            <div className="p-6 rounded-2xl  flex flex-col items-center hover:border-blue-200 transition-colors">
              <div className="p-3 rounded-full shadow-sm mb-4">
                <ShieldCheck className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="font-bold text-white  mb-2">Qualidade Premium</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Cada veículo passa por um criterioso processo de seleção e
                revisão, garantindo alto padrão e procedência.
              </p>
            </div>

            <div className=" p-6 rounded-2xl  flex flex-col items-center hover:border-blue-200 transition-colors">
              <div className="p-3 rounded-full shadow-sm mb-4">
                <Trophy className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Experiência Única</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Trabalhamos para oferecer transparência total e um atendimento
                personalizado em cada negociação.
              </p>
            </div>

            <div className=" p-6 rounded-2xl  flex flex-col items-center hover:border-blue-200 transition-colors">
              <div className="p-3 rounded-full shadow-sm mb-4">
                <Globe2 className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Conexão Global</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Conectamos tendências e oportunidades do mercado internacional
                diretamente aos nossos clientes.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl space-y-6 flex flex-col items-center text-center w-full mx-auto mt-16">
          <h3 className="text-xl font-semibold text-white flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-red-400" />
            Nossas Unidades
          </h3>
          <p className="text-white text-lg leading-relaxed">
            Com presença internacional, a Lions conta com lojas no Brasil, nas
            cidades do{" "}
            <span className="text-red-400 font-medium">Rio de Janeiro</span> e{" "}
            <span className="text-red-400 font-medium"> São Paulo</span>, e nos
            Estados Unidos, em{" "}
            <span className="text-red-400 font-medium">Orlando</span> e
            <span className="text-red-400 font-medium"> Miami</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
