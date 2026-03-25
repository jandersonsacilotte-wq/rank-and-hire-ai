import { motion } from "framer-motion";
import { Sparkles, Users, BarChart, ShieldCheck } from "lucide-react";

const points = [
  { icon: Users, text: "Não substitui o RH — potencializa sua decisão." },
  { icon: BarChart, text: "Usa dados e aderência real, não achismo." },
  { icon: ShieldCheck, text: "Reduz subjetividade no processo seletivo." },
  { icon: Sparkles, text: "Inteligência de decisão, não apenas triagem." },
];

const DifferentialSection = () => {
  return (
    <section id="diferencial" className="py-12 md:py-24 bg-section-6">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-10 shadow-elevated md:p-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <p.icon className="h-5 w-5 text-accent" />
                </div>
                <p className="text-sm leading-relaxed text-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-destructive mb-3">
              Ferramentas genéricas não entendem recrutamento
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Por que o FiltrAI e não{" "}
              <span className="text-gradient">outra solução?</span>
            </h2>
            <a
              href="#planos"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              Ver Comparativo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
