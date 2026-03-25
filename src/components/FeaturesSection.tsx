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
  Users,
  Eye,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
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
    // Theme for this tab
    bg: "bg-gradient-to-br from-violet-950 via-[hsl(260,40%,12%)] to-[hsl(240,30%,8%)]",
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/15",
    accentBorder: "border-violet-500/30",
    tabBg: "bg-violet-600",
    impactHeadline: "IA que lê, interpreta e classifica.",
    impactSub: "Seus 87 currículos analisados em 3 minutos — não em 3 dias.",
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
                        ? "hsl(270 60% 60%)"
                        : score > 60
                        ? "hsl(270 40% 40%)"
                        : "hsl(270 20% 25%)",
                  }}
                />
                <span className="text-[10px] font-bold text-violet-300/60">{score}</span>
              </div>
            ))}
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
        title: "Veredito Executivo da IA",
        description:
          "A IA gera uma síntese estratégica: perfil ideal, candidatos recomendados e pontos de atenção — em linguagem executiva.",
        icon: Sparkles,
        badge: { label: "PRO", color: "amber" as const },
        featured: true,
        visual: (
          <div className="mt-4 rounded-lg bg-violet-500/10 border border-violet-500/20 p-3">
            <p className="text-[11px] text-violet-300/80 italic leading-relaxed">
              "Selecionei o candidato mais aderente entre 87 currículos. Recomendo priorizar os 3 primeiros com score acima de 85."
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] text-violet-400/50">
              <Clock className="h-3 w-3" />
              Gerado em 3 min
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "gestao",
    label: "Gestão de Vagas",
    icon: Layers,
    bg: "bg-gradient-to-br from-sky-950 via-[hsl(210,40%,12%)] to-[hsl(220,30%,8%)]",
    accentText: "text-sky-400",
    accentBg: "bg-sky-500/15",
    accentBorder: "border-sky-500/30",
    tabBg: "bg-sky-600",
    impactHeadline: "Do upload à shortlist em minutos.",
    impactSub: "Gerencie múltiplas vagas, receba candidaturas por link público e veja o ranking se montar sozinho.",
    features: [
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
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-sky-500/5 border border-sky-500/15 p-2.5">
            <Globe className="h-4 w-4 text-sky-400 flex-shrink-0" />
            <span className="text-[10px] text-sky-300 font-medium truncate">filtrai.com.br/vaga/mkt-senior</span>
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
              { name: "Carlos M.", score: 88, color: "bg-sky-500" },
              { name: "Julia S.", score: 74, color: "bg-sky-500/60" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-sky-300/50 w-4">#{i + 1}</span>
                <div className="flex-1 h-5 bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full ${c.color} rounded-full flex items-center px-2`} style={{ width: `${c.score}%` }}>
                    <span className="text-[9px] font-bold text-white truncate">{c.name}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-sky-200 w-6 text-right">{c.score}</span>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Triagem Conversacional",
        description: "Envie mensagens via WhatsApp para seus candidatos e faça uma triagem certeira — identifique quem avança e quem fica no caminho, direto pelo canal que eles já usam.",
        icon: MessageCircle,
        badge: { label: "EM CONSTRUÇÃO", color: "amber" as const },
        visual: (
          <div className="mt-4 rounded-lg bg-sky-500/10 border border-sky-500/20 p-3">
            <div className="flex items-start gap-2">
              <MessageCircle className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <div className="bg-emerald-500/15 rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[85%]">
                  <p className="text-[10px] text-emerald-300">"Olá Ana! Você tem disponibilidade para início imediato?"</p>
                </div>
                <div className="bg-white/10 rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[70%]">
                  <p className="text-[10px] text-white/70">"Sim, posso começar na próxima semana!"</p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "colaboracao",
    label: "Colaboração & CRM",
    icon: Users,
    bg: "bg-gradient-to-br from-emerald-950 via-[hsl(160,30%,10%)] to-[hsl(170,25%,7%)]",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/15",
    accentBorder: "border-emerald-500/30",
    tabBg: "bg-emerald-600",
    impactHeadline: "Compartilhe decisões, não planilhas.",
    impactSub: "Ranking compartilhável, banco de talentos e comparação lado a lado — tudo num clique.",
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
                className="h-8 w-8 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center -ml-2 first:ml-0"
              >
                <span className="text-[9px] font-bold text-emerald-400">{String.fromCharCode(64 + i)}</span>
              </div>
            ))}
            <span className="text-[10px] text-emerald-400/60 ml-1">+127 perfis</span>
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
        title: "Compartilhamento de Ranking",
        description: "Envie um link seguro e apresentável do ranking para clientes ou gestores, sem expor o painel interno.",
        icon: Share2,
        badge: { label: "DESTAQUE", color: "purple" as const },
        featured: true,
        visual: (
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3">
            <Share2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-emerald-300 font-medium truncate">filtrai.com.br/ranking/abc123</div>
              <div className="text-[9px] text-emerald-400/50 mt-0.5">Link seguro • Visualização apresentável</div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "relatorios",
    label: "Relatórios",
    icon: Eye,
    bg: "bg-gradient-to-br from-amber-950 via-[hsl(30,30%,10%)] to-[hsl(20,25%,7%)]",
    accentText: "text-amber-400",
    accentBg: "bg-amber-500/15",
    accentBorder: "border-amber-500/30",
    tabBg: "bg-amber-600",
    impactHeadline: "Dados que vendem seu trabalho.",
    impactSub: "Relatórios por candidato e rankings compartilháveis que impressionam gestores e clientes.",
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
                  <span className="text-amber-300/60">{item.label}</span>
                  <span className="font-bold text-amber-200">{item.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        ),
      },
      {
        title: "Resumo Compartilhável",
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
              <div key={stat.label} className="rounded-lg bg-amber-500/10 p-2">
                <div className="text-lg font-bold text-amber-400">{stat.value}</div>
                <div className="text-[9px] text-amber-300/50">{stat.label}</div>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
];

/* ── Main Component ── */
const FeaturesSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCategory = categories[activeIdx];

  const goPrev = () => setActiveIdx((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  const goNext = () => setActiveIdx((prev) => (prev === categories.length - 1 ? 0 : prev + 1));

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
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveIdx(idx)}
                className={`
                  group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${isActive
                    ? `${cat.tabBg} text-white shadow-lg`
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }
                `}
              >
                <cat.icon className={`h-4 w-4 ${isActive ? "text-white" : cat.accentText}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Main content area with themed background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className={`relative rounded-3xl overflow-hidden ${activeCategory.bg} max-w-6xl mx-auto`}
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10 flex flex-col lg:flex-row">
              {/* Left arrow */}
              <button
                onClick={goPrev}
                className="hidden lg:flex items-center justify-center w-14 flex-shrink-0 hover:bg-white/5 transition-colors group"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-6 w-6 text-white/30 group-hover:text-white/70 transition-colors" />
              </button>

              {/* Left: Impact text */}
              <div className="lg:w-[340px] flex-shrink-0 p-8 lg:py-12 lg:pl-4 lg:pr-6 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${activeCategory.accentBg} border ${activeCategory.accentBorder} mb-6`}>
                    <activeCategory.icon className={`h-3.5 w-3.5 ${activeCategory.accentText}`} />
                    <span className={`text-xs font-semibold ${activeCategory.accentText}`}>{activeCategory.label}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-4">
                    {activeCategory.impactHeadline}
                  </h3>
                  <p className="text-sm lg:text-base text-white/50 leading-relaxed">
                    {activeCategory.impactSub}
                  </p>
                </motion.div>
              </div>

              {/* Right: Cards grid */}
              <div className="flex-1 p-6 lg:py-10 lg:pr-4 lg:pl-2">
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                  {activeCategory.features.map((feature, i) => {
                    const isFeatured = (feature as any).featured;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: i * 0.08 }}
                        className={`
                          group relative rounded-xl border p-5 transition-all duration-300 overflow-hidden
                          ${isFeatured
                            ? `bg-white/[0.08] backdrop-blur-sm border-white/[0.12] md:col-span-2`
                            : "bg-white/[0.04] backdrop-blur-sm border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.1]"
                          }
                        `}
                      >
                        {isFeatured && (
                          <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-10`}
                            style={{ background: `hsl(var(--accent))` }} />
                        )}

                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-3">
                            <div className={`p-2 rounded-lg ${activeCategory.accentBg}`}>
                              <feature.icon className={`h-4 w-4 ${activeCategory.accentText}`} />
                            </div>
                            <Badge label={feature.badge.label} color={feature.badge.color} />
                          </div>

                          <h4 className="text-base font-bold text-white mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-white/50 leading-relaxed">
                            {feature.description}
                          </p>

                          {feature.visual && feature.visual}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right arrow */}
              <button
                onClick={goNext}
                className="hidden lg:flex items-center justify-center w-14 flex-shrink-0 hover:bg-white/5 transition-colors group"
                aria-label="Próximo"
              >
                <ChevronRight className="h-6 w-6 text-white/30 group-hover:text-white/70 transition-colors" />
              </button>
            </div>

            {/* Mobile arrows */}
            <div className="flex lg:hidden justify-center gap-4 pb-6">
              <button onClick={goPrev} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <ChevronLeft className="h-5 w-5 text-white/50" />
              </button>
              {/* Dots */}
              <div className="flex items-center gap-2">
                {categories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIdx === idx ? `w-6 ${activeCategory.accentBg.replace('/15', '')}` : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button onClick={goNext} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <ChevronRight className="h-5 w-5 text-white/50" />
              </button>
            </div>
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
    </section>
  );
};

export default FeaturesSection;
