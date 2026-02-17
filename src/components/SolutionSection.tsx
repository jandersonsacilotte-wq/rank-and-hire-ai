import { motion } from "framer-motion";
import { BarChart3, Target, TrendingUp, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Target, title: "Score de Aderência", desc: "Cada candidato recebe um score calculado com base nos critérios da vaga." },
  { icon: BarChart3, title: "Ranking Estratégico", desc: "Veja os melhores candidatos organizados por relevância." },
  { icon: TrendingUp, title: "Indicadores Visuais", desc: "Gráficos e métricas claras para apoiar sua decisão." },
  { icon: CheckCircle2, title: "Status do Candidato", desc: "Acompanhe o progresso de cada candidato no processo." },
];

const SolutionSection = () => {
  return (
    <section className="py-12 md:py-24 bg-section-2">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            O FiltrAI <span className="text-gradient">organiza o caos.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A IA analisa cada currículo, mede a aderência ao perfil da vaga e entrega
            um ranking estratégico pronto para decisão.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <f.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
