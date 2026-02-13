import { motion } from "framer-motion";
import { ListChecks, Cpu, Trophy } from "lucide-react";

const steps = [
  {
    icon: ListChecks,
    number: "01",
    title: "Defina critérios da vaga",
    desc: "Insira os requisitos, competências e perfil desejado.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "FiltrAI analisa candidatos",
    desc: "A IA cruza cada currículo com os critérios definidos.",
  },
  {
    icon: Trophy,
    number: "03",
    title: "Receba ranking estratégico",
    desc: "Veja os melhores candidatos ordenados por aderência.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Três passos simples para transformar triagem em inteligência.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-hero shadow-glow">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-accent">
                Passo {step.number}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
