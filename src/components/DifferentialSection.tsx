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
    <section id="diferencial" className="py-24 bg-section-6">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-10 shadow-elevated md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Não é apenas triagem.{" "}
              <span className="text-gradient">É inteligência de decisão.</span>
            </h2>
          </motion.div>

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
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
