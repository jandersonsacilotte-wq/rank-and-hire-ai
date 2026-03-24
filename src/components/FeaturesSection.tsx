import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Brain,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  GitCompareArrows,
  Database,
  Globe,
  FileText,
  Share2,
  History,
  Clock,
  Layers,
  Zap,
  Users,
  Eye,
} from "lucide-react";

/* ── Badge ── */
const Badge = ({ label, color }: { label: string; color: "green" | "blue" | "purple" | "amber" }) => {
  const colors = {
    green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    blue: "bg-sky-500/15 text-sky-400 border-sky-500/20",
    purple: "bg-violet-500/15 text-violet-400 border-violet-500/20",
    amber: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  };
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${colors[color]}`}>
      {label}
    </span>
  );
};

/* ── Categories & Features ── */
const categories = [
  {
    id: "ia",
    label: "Inteligência Artificial",
    icon: Brain,
    features: [
      {
        title: "Score de Aderência IA",
        description: "Cada candidato recebe uma pontuação de 0 a 100 calculada por IA. Objetivo, consistente e sem viés.",
        icon: Brain,
        badge: { label: "POWERED BY AI", color: "purple" as const },
        visual: (
          <div className="flex items-end gap-2 mt-4">
            {[45, 62, 78, 91].map((score, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-md transition-all duration-500"
                  style={{
                    height: `${score * 0.6}px`,
                    background:
                      score > 80
                        ? "hsl(var(--accent))"
                        : score > 60
                        ? "hsl(var(--primary) / 0.5)"
                        : "hsl(var(--muted-foreground) / 0.15)",
                  }}
                />
                <span className="text-[10px] font-bold text-muted-foreground">{score}</span>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Veredito Executivo da IA",
        description:
          "A IA gera uma síntese estratégica: perfil ideal, candidatos recomendados e pontos de atenção — em linguagem executiva.",
        icon: Sparkles,
        badge: { label: "PRO", color: "amber" as const },
        featured: true,
        visual: (
          <div className="mt-4 rounded-lg bg-accent/10 border border-accent/20 p-3">
            <p className="text-[11px] text-accent/80 italic leading-relaxed">
              "Selecionei o candidato mais aderente entre 87 currículos. Recomendo priorizar os 3 primeiros com score acima de 85."
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] text-muted-foreground">
              <Clock className="h-3 w-3" />
              Gerado em 3 min
            </div>
          </div>
        ),
      },
      {
        title: "Critérios Eliminatórios",
        description: "Defina filtros obrigatórios por vaga. A IA classifica automaticamente: aprovado, atenção ou eliminado.",
        icon: ShieldCheck,
        badge: { label: "GRÁTIS", color: "green" as const },
        visual: (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {[
              { label: "✓ CNH B", cls: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" },
              { label: "✓ Inglês C1", cls: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" },
              { label: "⚠ Exp < 2a", cls: "bg-amber-500/15 text-amber-400 border-amber-500/20" },
              { label: "✗ Sem MBA", cls: "bg-red-500/15 text-red-400 border-red-500/20" },
            ].map((t) => (
              <span key={t.label} className={`text-[10px] font-medium px-2 py-1 rounded-md border ${t.cls}`}>
                {t.label}
              </span>
            ))}
          </div>
        ),
      },
      {
        title: "Análise em Segundo Plano",
        description: "Envie os arquivos, feche a aba e volte quando quiser — o ranking estará completo e pronto.",
        icon: Clock,
        badge: { label: "GRÁTIS", color: "green" as const },
      },
    ],
  },
  {
    id: "gestao",
    label: "Gestão de Vagas",
    icon: Layers,
    features: [
      {
        title: "Upload em Massa",
        description: "Arraste pastas inteiras ou ZIPs com dezenas de CVs. O sistema extrai e processa cada candidato automaticamente.",
        icon: Upload,
        badge: { label: "GRÁTIS", color: "green" as const },
        visual: (
          <div className="mt-4 rounded-lg border border-dashed border-primary/30 bg-primary/5 p-3 flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center">
              <Upload className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="h-2 w-28 bg-primary/20 rounded-full" />
              <div className="h-1.5 w-16 bg-primary/10 rounded-full mt-1.5" />
            </div>
            <span className="text-[10px] text-primary font-medium">+42 CVs</span>
          </div>
        ),
      },
      {
        title: "Ranking Automático",
        description: "Candidatos organizados do mais ao menos aderente. Comece pelos que importam, sem ler um currículo.",
        icon: TrendingUp,
        badge: { label: "TODOS OS PLANOS", color: "blue" as const },
        featured: true,
        visual: (
          <div className="mt-4 space-y-2">
            {[
              { name: "Ana L.", score: 96, color: "bg-emerald-500" },
              { name: "Carlos M.", score: 88, color: "bg-accent" },
              { name: "Julia S.", score: 74, color: "bg-primary/60" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-muted-foreground w-4">#{i + 1}</span>
                <div className="flex-1 h-5 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${c.color} rounded-full flex items-center px-2`} style={{ width: `${c.score}%` }}>
                    <span className="text-[9px] font-bold text-white truncate">{c.name}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-foreground w-6 text-right">{c.score}</span>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Múltiplas Vagas Simultâneas",
        description: "Gerencie diversos processos seletivos ao mesmo tempo. Cada vaga tem ranking, critérios e banco isolados.",
        icon: Layers,
        badge: { label: "PRO", color: "amber" as const },
      },
      {
        title: "Vaga Online (Link Público)",
        description: "Gere um link público para sua vaga. Candidatos se inscrevem e entram no ranking automaticamente.",
        icon: Globe,
        badge: { label: "PRO", color: "amber" as const },
        visual: (
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/15 p-2.5">
            <Globe className="h-4 w-4 text-primary flex-shrink-0" />
            <span className="text-[10px] text-primary font-medium truncate">filtrai.com.br/vaga/mkt-senior</span>
          </div>
        ),
      },
    ],
  },
  {
    id: "colaboracao",
    label: "Colaboração & CRM",
    icon: Users,
    features: [
      {
        title: "Banco de Talentos (CRM)",
        description: "Seu CRM proprietário de candidatos. Guarde perfis de processos anteriores para reaproveitar em novas vagas.",
        icon: Database,
        badge: { label: "GRÁTIS", color: "green" as const },
        visual: (
          <div className="mt-4 flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full bg-primary/10 border-2 border-card flex items-center justify-center -ml-2 first:ml-0"
              >
                <span className="text-[9px] font-bold text-primary">{String.fromCharCode(64 + i)}</span>
              </div>
            ))}
            <span className="text-[10px] text-muted-foreground ml-1">+127 perfis</span>
          </div>
        ),
      },
      {
        title: "Compartilhamento de Ranking",
        description: "Envie um link seguro e apresentável do ranking para clientes ou gestores, sem expor o painel interno.",
        icon: Share2,
        badge: { label: "DESTAQUE", color: "purple" as const },
        featured: true,
        visual: (
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-accent/10 border border-accent/20 p-3">
            <Share2 className="h-4 w-4 text-accent flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-accent font-medium truncate">filtrai.com.br/ranking/abc123</div>
              <div className="text-[9px] text-muted-foreground mt-0.5">Link seguro • Visualização apresentável</div>
            </div>
          </div>
        ),
      },
      {
        title: "Comparador Lado a Lado",
        description: "Compare 2 ou 3 finalistas num único painel. Ideal para decidir entre perfis similares antes da entrevista.",
        icon: GitCompareArrows,
        badge: { label: "GRÁTIS", color: "green" as const },
      },
      {
        title: "Histórico Vitalício",
        description: "Acesse qualquer processo seletivo anterior a qualquer momento. Busca rápida por vagas ou candidatos.",
        icon: History,
        badge: { label: "PRO", color: "amber" as const },
      },
    ],
  },
  {
    id: "relatorios",
    label: "Relatórios",
    icon: Eye,
    features: [
      {
        title: "Relatório por Candidato",
        description: "Ficha completa com análise por competência, pontos fortes, lacunas identificadas e recomendação final da IA.",
        icon: FileText,
        badge: { label: "TODOS OS PLANOS", color: "blue" as const },
        featured: true,
        visual: (
          <div className="mt-4 space-y-2">
            {[
              { label: "Competências Técnicas", pct: 92 },
              { label: "Experiência Relevante", pct: 85 },
              { label: "Formação Acadêmica", pct: 78 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-bold text-foreground">{item.pct}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Compartilhamento de Ranking",
        description: "Mostre a qualidade do processo seletivo com um link compartilhável, seguro e apresentável.",
        icon: Share2,
        badge: { label: "DESTAQUE", color: "purple" as const },
        visual: (
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {[
              { value: "87", label: "Currículos" },
              { value: "12", label: "Shortlist" },
              { value: "96", label: "Top Score" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg bg-primary/5 p-2">
                <div className="text-lg font-bold text-primary">{stat.value}</div>
                <div className="text-[9px] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
];

/* ── Tab component ── */
const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("ia");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="funcionalidades" className="py-24 bg-section-3">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4" />
            ARSENAL COMPLETO DE RECRUTAMENTO
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tudo que você precisa,{" "}
            <span className="text-gradient">num único lugar.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do upload do currículo até a decisão final — cada funcionalidade foi projetada para
            eliminar fricção e acelerar seu processo seletivo.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`
                    group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                    ${isActive
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                    }
                  `}
                >
                  <cat.icon className={`h-4 w-4 ${isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"}`} />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className={`grid gap-4 ${
                activeCategory.features.length <= 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2"
              }`}
            >
              {activeCategory.features.map((feature, i) => {
                const isFeatured = feature.featured;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className={`
                      group relative rounded-2xl border p-6 transition-all duration-300 overflow-hidden
                      ${isFeatured
                        ? "bg-foreground text-background border-foreground/80 shadow-elevated md:col-span-2"
                        : "bg-card border-border hover:border-primary/30 hover:shadow-card"
                      }
                    `}
                  >
                    {/* Glow on featured */}
                    {isFeatured && (
                      <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                    )}

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className={`p-2.5 rounded-xl ${
                            isFeatured ? "bg-accent/20" : "bg-primary/10"
                          }`}
                        >
                          <feature.icon
                            className={`h-5 w-5 ${isFeatured ? "text-accent" : "text-primary"}`}
                          />
                        </div>
                        <Badge label={feature.badge.label} color={feature.badge.color} />
                      </div>

                      <h3
                        className={`text-lg font-bold mb-1.5 ${
                          isFeatured ? "text-background" : "text-foreground"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isFeatured ? "text-background/70" : "text-muted-foreground"
                        }`}
                      >
                        {feature.description}
                      </p>

                      {feature.visual && feature.visual}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Bottom note */}
          <motion.p
            className="text-center text-sm text-muted-foreground mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Funcionalidades principais disponíveis{" "}
            <span className="font-semibold text-foreground">gratuitamente</span>. Recursos avançados
            desbloqueados nos planos pagos.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
