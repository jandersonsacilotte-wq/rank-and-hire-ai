import { motion } from "framer-motion";
import {
  Upload,
  Brain,
  ShieldCheck,
  TrendingUp,
  GitCompareArrows,
  Database,
  Globe,
  FileText,
  Share2,
  History,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";

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

const features = [
  {
    id: "upload",
    title: "Upload em Massa",
    description: "Arraste pastas inteiras ou arquivos ZIP com dezenas de CVs. O sistema extrai e processa cada candidato automaticamente.",
    icon: Upload,
    badge: { label: "GRÁTIS", color: "green" as const },
    size: "sm",
    accent: "primary",
    visual: (
      <div className="mt-4 rounded-lg border border-dashed border-primary/30 bg-primary/5 p-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center">
          <Upload className="h-4 w-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="h-2 w-28 bg-primary/20 rounded-full" />
          <div className="h-1.5 w-16 bg-primary/10 rounded-full mt-1.5" />
        </div>
        <span className="text-[10px] text-primary font-medium">+42 CVs</span>
      </div>
    ),
  },
  {
    id: "score",
    title: "Score de Aderência IA",
    description: "Cada candidato recebe uma pontuação de 0 a 100 calculada por IA. Objetivo, consistente e sem viés.",
    icon: Brain,
    badge: { label: "POWERED BY AI", color: "purple" as const },
    size: "sm",
    accent: "accent",
    visual: (
      <div className="mt-4 flex items-end gap-2">
        {[45, 62, 78, 91].map((score, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md"
              style={{
                height: `${score * 0.5}px`,
                background: score > 80 ? "hsl(var(--accent))" : score > 60 ? "hsl(var(--primary) / 0.6)" : "hsl(var(--muted-foreground) / 0.2)",
              }}
            />
            <span className="text-[9px] font-bold text-muted-foreground">{score}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "criteria",
    title: "Critérios Eliminatórios",
    description: "Defina filtros obrigatórios por vaga. A IA atualiza cada candidato automaticamente como aprovado, atenção ou eliminado.",
    icon: ShieldCheck,
    badge: { label: "GRÁTIS", color: "green" as const },
    size: "sm",
    accent: "primary",
    visual: (
      <div className="mt-4 flex flex-wrap gap-1.5">
        {[
          { label: "✓ CNH B", cls: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" },
          { label: "✓ Inglês C1", cls: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20" },
          { label: "⚠ Exp < 2a", cls: "bg-amber-500/15 text-amber-400 border-amber-500/20" },
          { label: "✗ Sem CNH", cls: "bg-red-500/15 text-red-400 border-red-500/20" },
        ].map((t) => (
          <span key={t.label} className={`text-[10px] font-medium px-2 py-1 rounded-md border ${t.cls}`}>
            {t.label}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: "veredito",
    title: "Veredito Executivo da IA",
    description: "Após analisar todos os candidatos, a IA gera uma síntese estratégica: indica o perfil ideal encontrado, os candidatos mais recomendados e pontos de atenção — em linguagem executiva, pronto para apresentar ao cliente ou gestor.",
    icon: Sparkles,
    badge: { label: "PRO", color: "amber" as const },
    size: "lg",
    accent: "accent",
    featured: true,
    visual: (
      <div className="mt-5 space-y-2.5">
        <div className="rounded-lg bg-accent/10 border border-accent/20 p-3">
          <p className="text-[11px] text-accent/80 italic leading-relaxed">
            "Veredito IA — Top Filter: selecionei o candidato mais aderente para o perfil de Diretor de Marketing entre 87 currículos. Recomendo priorizar os 3 primeiros do ranking com score acima de 85."
          </p>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>Gerado em 3 minutos de ranking automático</span>
        </div>
      </div>
    ),
  },
  {
    id: "ranking",
    title: "Ranking Automático",
    description: "Candidatos organizados do mais ao menos aderente à vaga. Comece sempre pelos que importam, sem precisar ler uma linha de currículo.",
    icon: TrendingUp,
    badge: { label: "TODOS OS PLANOS", color: "blue" as const },
    size: "md",
    accent: "primary",
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
    id: "comparador",
    title: "Comparador Lado a Lado",
    description: "Compare 2 ou 3 candidatos finalistas num único painel. Ideal para decidir entre perfis muito similares antes da entrevista definitiva.",
    icon: GitCompareArrows,
    badge: { label: "GRÁTIS", color: "green" as const },
    size: "sm",
    accent: "primary",
  },
  {
    id: "crm",
    title: "Banco de Talentos (CRM)",
    description: "Seu CRM proprietário de candidatos. Guarde perfis de processos anteriores para reaproveitar em novas vagas. Seu maior ativo a longo prazo.",
    icon: Database,
    badge: { label: "GRÁTIS", color: "green" as const },
    size: "sm",
    accent: "accent",
  },
  {
    id: "vaga-online",
    title: "Vaga Online (Link Público)",
    description: "Gere um link público para sua vaga. Candidatos se inscrevem diretamente pelo link e entram no ranking automaticamente.",
    icon: Globe,
    badge: { label: "PRO", color: "amber" as const },
    size: "sm",
    accent: "primary",
  },
  {
    id: "relatorio",
    title: "Relatório por Candidato",
    description: "Ficha completa com análise por competência, pontos fortes, lacunas identificadas e recomendação final da IA para cada candidato.",
    icon: FileText,
    badge: { label: "TODOS OS PLANOS", color: "blue" as const },
    size: "sm",
    accent: "primary",
  },
  {
    id: "compartilhamento",
    title: "Compartilhamento de Ranking",
    description: "Envie um link seguro e apresentável do ranking para compartilhar com clientes ou gestores. Mostre a qualidade do processo seletivo sem expor o painel interno.",
    icon: Share2,
    badge: { label: "DESTAQUE", color: "purple" as const },
    size: "md",
    accent: "accent",
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
    id: "historico",
    title: "Histórico Vitalício",
    description: "Acesse qualquer processo seletivo anterior a qualquer momento. Busca rápida o histórico de uma vaga fechada ou de um candidato aprovado.",
    icon: History,
    badge: { label: "PRO", color: "amber" as const },
    size: "sm",
    accent: "primary",
  },
  {
    id: "background",
    title: "Análise em Segundo Plano",
    description: "A IA processa currículos de forma assíncrona. Envie os arquivos, feche a aba e entre quando quiser — o ranking estará completo e pronto.",
    icon: Clock,
    badge: { label: "GRÁTIS", color: "green" as const },
    size: "sm",
    accent: "primary",
  },
  {
    id: "multiplas",
    title: "Múltiplas Vagas Simultâneas",
    description: "Gerencie diversos processos seletivos ao mesmo tempo. Cada vaga tem seu próprio ranking, critérios e banco de candidatos isolado.",
    icon: Layers,
    badge: { label: "PRO", color: "amber" as const },
    size: "sm",
    accent: "accent",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const FeaturesSection = () => {
  // Row 1: 3 small cards
  const row1 = features.filter((f) => ["upload", "score", "criteria"].includes(f.id));
  // Row 2: 1 large + 1 medium
  const row2 = features.filter((f) => ["veredito", "ranking"].includes(f.id));
  // Row 3: 3 small
  const row3 = features.filter((f) => ["comparador", "crm", "vaga-online"].includes(f.id));
  // Row 4: 2 small + 1 medium
  const row4 = features.filter((f) => ["relatorio", "compartilhamento"].includes(f.id));
  // Row 5: 3 small
  const row5 = features.filter((f) => ["historico", "background", "multiplas"].includes(f.id));

  const renderCard = (feature: (typeof features)[0], index: number) => {
    const isFeatured = feature.featured;

    return (
      <motion.div
        key={feature.id}
        variants={itemVariants}
        className={`
          group relative rounded-2xl border p-6 transition-all duration-300 overflow-hidden
          ${isFeatured
            ? "bg-foreground text-background border-foreground/80 shadow-elevated"
            : "bg-card border-border hover:border-primary/30 hover:shadow-card"
          }
          ${feature.size === "lg" ? "lg:col-span-2" : feature.size === "md" ? "lg:col-span-2" : ""}
        `}
      >
        {/* Subtle glow on featured */}
        {isFeatured && (
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        )}

        <div className="relative z-10">
          {/* Header row: icon + badge */}
          <div className="flex items-start justify-between mb-3">
            <div
              className={`p-2.5 rounded-xl ${
                isFeatured
                  ? "bg-accent/20"
                  : feature.accent === "accent"
                  ? "bg-accent/10"
                  : "bg-primary/10"
              }`}
            >
              <feature.icon
                className={`h-5 w-5 ${
                  isFeatured
                    ? "text-accent"
                    : feature.accent === "accent"
                    ? "text-accent"
                    : "text-primary"
                }`}
              />
            </div>
            <Badge label={feature.badge.label} color={feature.badge.color} />
          </div>

          <h3
            className={`text-base font-bold mb-1.5 ${
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
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  return (
    <section id="funcionalidades" className="py-24 bg-section-3">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
            Do upload do currículo até a decisão final de contratação — cada funcionalidade foi
            projetada para eliminar fricção e acelerar seu processo seletivo.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Row 1: 3 equal */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {row1.map((f, i) => renderCard(f, i))}
          </motion.div>

          {/* Row 2: large (2col) + medium */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {row2.map((f, i) => (
              <motion.div
                key={f.id}
                variants={itemVariants}
                className={f.id === "veredito" ? "lg:col-span-2" : ""}
              >
                {renderCard(f, i)}
              </motion.div>
            ))}
          </motion.div>

          {/* Row 3: 3 equal */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {row3.map((f, i) => renderCard(f, i))}
          </motion.div>

          {/* Row 4: small + medium (2col) */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {row4.map((f, i) => (
              <motion.div
                key={f.id}
                variants={itemVariants}
                className={f.id === "compartilhamento" ? "lg:col-span-2" : ""}
              >
                {renderCard(f, i)}
              </motion.div>
            ))}
          </motion.div>

          {/* Row 5: 3 equal */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {row5.map((f, i) => renderCard(f, i))}
          </motion.div>
        </div>

        {/* Bottom CTA hint */}
        <motion.p
          className="text-center text-sm text-muted-foreground mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Funcionalidades principais disponíveis{" "}
          <span className="font-semibold text-foreground">gratuitamente</span>. Recursos
          avançados desbloqueados nos planos pagos.
        </motion.p>
      </div>
    </section>
  );
};

export default FeaturesSection;
