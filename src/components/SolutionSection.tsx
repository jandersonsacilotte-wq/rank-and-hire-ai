import { motion } from "framer-motion";
import { BarChart3, Target, TrendingUp, CheckCircle2, UserCheck, Star } from "lucide-react";

const funnelLayers = [
  { icon: Target, label: "Score de Aderência", desc: "Cada candidato recebe um score calculado com base nos critérios da vaga.", width: "100%" },
  { icon: BarChart3, label: "Ranking Estratégico", desc: "Os melhores candidatos organizados por relevância real.", width: "85%" },
  { icon: TrendingUp, label: "Indicadores Visuais", desc: "Gráficos e métricas claras para apoiar sua decisão.", width: "70%" },
  { icon: CheckCircle2, label: "Status do Candidato", desc: "Acompanhe o progresso de cada candidato no processo.", width: "55%" },
];

const SolutionSection = () => {
  return (
    <section className="py-12 md:py-24 bg-section-2 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Funnel mouth - Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-4"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            O FiltrAI <span className="text-gradient">organiza o caos.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A IA analisa cada currículo, mede a aderência ao perfil da vaga e entrega
            um ranking estratégico pronto para decisão.
          </p>
        </motion.div>

        {/* Funnel opening lines */}
        <div className="mx-auto max-w-3xl flex items-center gap-0 mb-2">
          <div className="h-8 w-8 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl" />
          <div className="flex-1 border-t-2 border-primary/20" />
          <div className="flex-1 border-t-2 border-primary/20" />
          <div className="h-8 w-8 border-r-2 border-t-2 border-primary/20 rounded-tr-2xl" />
        </div>

        {/* Funnel layers */}
        <div className="mx-auto max-w-3xl flex flex-col items-center gap-3 md:gap-4">
          {funnelLayers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
              style={{ width: layer.width }}
              className="group relative"
            >
              <div
                className={`
                  relative flex items-center gap-4 rounded-xl border p-4 md:p-5 transition-all duration-300
                  ${i === 0
                    ? "border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/30"
                    : i === 1
                    ? "border-accent/20 bg-accent/5 hover:bg-accent/10 hover:border-accent/30"
                    : i === 2
                    ? "border-primary/15 bg-primary/[0.03] hover:bg-primary/[0.07] hover:border-primary/25"
                    : "border-accent/25 bg-accent/[0.06] hover:bg-accent/[0.12] hover:border-accent/35 shadow-sm"
                  }
                `}
              >
                {/* Step indicator */}
                <div
                  className={`
                    flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300
                    ${i === funnelLayers.length - 1
                      ? "bg-accent/15 group-hover:bg-accent/25"
                      : "bg-primary/10 group-hover:bg-primary/20"
                    }
                  `}
                >
                  <layer.icon
                    className={`h-5 w-5 md:h-6 md:w-6 transition-colors duration-300 ${
                      i === funnelLayers.length - 1 ? "text-accent" : "text-primary"
                    }`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-semibold text-foreground">
                    {layer.label}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-0.5">
                    {layer.desc}
                  </p>
                </div>

                {/* Layer number */}
                <span className="text-xs font-bold text-muted-foreground/40 shrink-0">
                  0{i + 1}
                </span>
              </div>

              {/* Connector line */}
              {i < funnelLayers.length - 1 && (
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.12 }}
                    className="w-px h-3 md:h-4 bg-gradient-to-b from-primary/20 to-primary/5 origin-top"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Funnel tip connector */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mx-auto flex flex-col items-center origin-top"
        >
          <div className="w-px h-6 md:h-10 bg-gradient-to-b from-accent/30 to-accent/60" />
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <div className="w-px h-4 md:h-6 bg-accent/40" />
        </motion.div>

        {/* Result card - candidate with high match */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mx-auto max-w-sm"
        >
          <div className="relative rounded-2xl border border-accent/30 bg-card p-5 md:p-6 shadow-elevated overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />

            <div className="relative flex items-center gap-4">
              {/* Avatar placeholder */}
              <div className="relative">
                <div className="h-14 w-14 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow">
                  <UserCheck className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-2 border-card flex items-center justify-center">
                  <Star className="h-3 w-3 text-white fill-white" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm">Candidato Ideal</p>
                <p className="text-xs text-muted-foreground">Coordenador de Marketing</p>
              </div>

              {/* Match Score */}
              <div className="text-center shrink-0">
                <div className="relative h-14 w-14 rounded-full border-[3px] border-green-500 flex items-center justify-center">
                  <span className="text-lg font-extrabold text-green-600">96</span>
                </div>
                <p className="text-[10px] font-semibold text-green-600 mt-1">MATCH</p>
              </div>
            </div>

            {/* Mini tags */}
            <div className="relative mt-4 flex flex-wrap gap-1.5">
              {["Aderência alta", "Experiência compatível", "Formação ideal"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-700 border border-green-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
