import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFiltrAI from "@/assets/logo-filtrai.png";

const productLinks = [
  "Como Funciona",
  "Ranking por Aderência",
  "Critérios Personalizáveis",
  "Análise Comparativa de Candidatos",
  "Shortlist Automática",
  "Dashboard de Vagas",
];

const featureLinks = [
  "Gerador de CV Estruturado",
  "Importação em Lote de Currículos",
  "Análise Inteligente por Palavra-chave",
  "Score de Compatibilidade",
  "Gestão de Múltiplas Vagas",
  "Exportação de Ranking",
  "Relatórios de Triagem",
];

const solutionLinks = [
  "Para Recrutadores",
  "Para Consultorias de RH",
  "Para PMEs",
  "Para Empresas com Alto Volume",
  "Para Vagas Estratégicas",
];

const resourceLinks = [
  "Blog",
  "FAQ",
  "Central de Ajuda",
  "Guia de Boas Práticas em Triagem",
  "Materiais Educativos",
];

const legalLinks = [
  "Política de Privacidade",
  "Termos de Uso",
  "Conformidade com LGPD",
  "Tratamento e Proteção de Dados",
  "Código de Conduta",
];

const FooterLinkGroup = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* BLOCO 1 – Marca + MOT */}
          <div className="lg:col-span-2 space-y-5">
            <img src={logoFiltrAI} alt="FiltrAI" className="h-10 w-auto" />
            <p className="text-sm font-semibold text-foreground">
              Motor de Organização de Talentos.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Transformando volume de currículos em ranking estruturado por aderência real à vaga.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Tecnologia desenvolvida para apoiar decisões de recrutamento com método, clareza e prioridade definida.
            </p>

            {/* Contato */}
            <div className="pt-4 space-y-3">
              <h4 className="text-sm font-semibold text-foreground">Fale com o time FiltrAI</h4>
              <a
                href="mailto:contato@filtrai.com.br"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                contato@filtrai.com.br
              </a>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button size="sm" className="text-xs">
                  Solicitar Demonstração
                </Button>
                <Button size="sm" variant="outline" className="text-xs">
                  Agendar Apresentação
                </Button>
              </div>
            </div>
          </div>

          {/* BLOCO 2 – Produto */}
          <FooterLinkGroup title="Produto" links={productLinks} />

          {/* BLOCO 3 – Funcionalidades */}
          <FooterLinkGroup title="Funcionalidades" links={featureLinks} />

          {/* BLOCO 4 – Soluções + Recursos (merged column on lg) */}
          <div className="space-y-10">
            <FooterLinkGroup title="Soluções" links={solutionLinks} />
            <FooterLinkGroup title="Recursos" links={resourceLinks} />
          </div>

          {/* BLOCO 6 – Legal */}
          <div className="space-y-4">
            <FooterLinkGroup title="Legal" links={legalLinks} />
            <p className="text-xs leading-relaxed text-muted-foreground pt-2">
              O FiltrAI opera em conformidade com a LGPD. Os dados são tratados com confidencialidade e utilizados exclusivamente para análise estruturada de aderência à vaga. A decisão final permanece sempre sob responsabilidade do recrutador.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FiltrAI. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            Plataforma SaaS de inteligência aplicada à triagem de candidatos.{" "}
            <span className="font-medium text-foreground">Decisão humana. Organização inteligente.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
