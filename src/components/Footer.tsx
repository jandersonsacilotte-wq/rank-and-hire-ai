import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFiltrAI from "@/assets/logo-filtrai.png";

const featureLinks = [
  "CV Estruturado",
  "Importação em Lote",
  "Análise por Palavra-chave",
  "Score de Compatibilidade",
  "Múltiplas Vagas",
  "Exportação de Ranking",
  "Relatórios de Triagem",
];

const solutionLinks = [
  "Para Recrutadores",
  "Para Consultorias de RH",
  "Para PMEs",
  "Para Alto Volume",
  "Para Vagas Estratégicas",
];

const resourceLinks = [
  "Blog",
  "FAQ",
  "Central de Ajuda",
  "Guia de Boas Práticas",
  "Materiais Educativos",
];

const legalLinks = [
  "Política de Privacidade",
  "Termos de Uso",
  "Conformidade LGPD",
  "Proteção de Dados",
  "Código de Conduta",
];

const FooterLinkGroup = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="text-sm font-bold text-white mb-5">{title}</h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,20%,8%)] text-white">
      {/* Main content */}
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Card marca + MOT */}
          <div className="lg:col-span-3">
            <div className="space-y-2">
              <div className="inline-block">
                <img src={logoFiltrAI} alt="FiltrAI" className="h-24 w-auto" />
              </div>
              <p className="text-xs font-semibold text-white/80 italic">
                "Motor de Organização de Talentos. Transformando volume de currículos em ranking estruturado por aderência real à vaga."
              </p>
              <p className="text-xs leading-relaxed text-white/50">
                Tecnologia desenvolvida para apoiar decisões de recrutamento com método, clareza e prioridade definida.
              </p>
            </div>

            {/* Contato abaixo do card */}
            <div className="mt-8 space-y-3">
              <h4 className="text-sm font-bold text-white">Fale conosco</h4>
              <a
                href="mailto:contato@filtrai.com.br"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                contato@filtrai.com.br
              </a>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button size="sm" className="text-xs bg-accent hover:bg-accent/90">
                  Testar Agora
                </Button>
                <Button size="sm" variant="outline" className="text-xs border-white/20 text-white hover:bg-white/10 hover:text-white">
                  Agendar Apresentação
                </Button>
              </div>
            </div>
          </div>

          {/* Colunas de links */}
          <div className="lg:col-span-9 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterLinkGroup title="Funcionalidades" links={featureLinks} />
            <FooterLinkGroup title="Soluções" links={solutionLinks} />
            <FooterLinkGroup title="Recursos" links={resourceLinks} />
            <div className="space-y-8">
              <FooterLinkGroup title="Legal" links={legalLinks} />
              <p className="text-[11px] leading-relaxed text-white/40">
                O FiltrAI opera em conformidade com a LGPD. Os dados são tratados com confidencialidade. A decisão final permanece sob responsabilidade do recrutador.
              </p>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mt-12">
          {[Linkedin, Instagram, Facebook].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 text-center">
          <p className="text-xs text-white/40">
            Copyright © {new Date().getFullYear()} FiltrAI – Todos os direitos reservados.
            <span className="mx-2">|</span>
            Plataforma SaaS de inteligência aplicada à triagem de candidatos.
            <span className="mx-2">|</span>
            <span className="font-medium text-white/60">Decisão humana. Organização inteligente.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
