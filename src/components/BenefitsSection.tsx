import { motion } from "framer-motion";
import { Clock, ShieldCheck, XCircle, Brain, Eye } from "lucide-react";

const benefits = [
  { icon: Clock, text: "Redução do tempo de triagem" },
  { icon: ShieldCheck, text: "Mais segurança na decisão" },
  { icon: XCircle, text: "Menos risco de erro" },
  { icon: Brain, text: "RH mais estratégico" },
  { icon: Eye, text: "Clareza antes da entrevista" },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-12 md:py-24 bg-section-4">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Benefícios que transformam seu RH
          </h2>
        </motion.div>

        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 shadow-card"
            >
              <b.icon className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-foreground">{b.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
