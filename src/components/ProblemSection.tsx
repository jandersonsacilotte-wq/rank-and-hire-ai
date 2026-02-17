import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  { icon: FileStack, text: "Você analisa centenas de currículos por vaga" },
  { icon: Clock, text: "Perde horas com triagem manual e repetitiva" },
  { icon: AlertTriangle, text: "Fecha vagas com SLA curto" },
  { icon: Users, text: "Toca várias vagas simultâneas" },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Por que contratar pessoas qualificadas hoje está muito difícil?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-3xl rounded-xl border-l-4 border-primary/30 bg-card p-6 mb-10 shadow-sm"
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            Quando o volume cresce, o processo deixa de ser estratégico e vira operacional. Excesso de currículos, pressão por SLA e múltiplas vagas abertas ao mesmo tempo transformaram a triagem em um gargalo invisível dentro do RH.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 mb-12">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                <item.icon className="h-5 w-5 text-destructive" />
              </div>
              <p className="text-sm font-medium leading-snug text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto max-w-3xl text-center space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm font-medium text-muted-foreground">E não é exagero.</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            Recrutadores relatam gastar mais de 50% do tempo apenas lendo, comparando e organizando candidatos manualmente.
            <br />
            Tempo que deveria estar sendo usado para entrevistar, negociar e fechar posições.
          </p>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">
              O <span className="text-primary">FiltrAI</span> resolve exatamente isso.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ele analisa candidatos por aderência real à vaga e entrega um ranking estruturado em minutos — para que você comece pelo que realmente importa.
            </p>
          </div>

          <Button size="lg" className="mt-4">
            Ver como gerar ranking estruturado
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
