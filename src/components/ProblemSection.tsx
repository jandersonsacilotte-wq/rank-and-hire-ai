import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users, FileStack } from "lucide-react";

const problems = [
{ icon: FileStack, text: "Analisar centenas de currículos por vaga." },
{ icon: Clock, text: "Perder horas com triagem manual e repetitiva." },
{ icon: AlertTriangle, text: "Fechar vagas com SLA curto." },
{ icon: Users, text: "Retrabalho e custo por contratações erradas." }];


const ProblemSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16">

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Seu RH está decidindo no meio do caos.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Excesso de currículos, sobrecarga da equipe e decisões feitas sob pressão geram contratações erradas e desperdício de talento. 
Se você precisa:

          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {problems.map((item, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-card">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                <item.icon className="h-5 w-5 text-destructive" />
              </div>
              <p className="text-sm leading-relaxed text-foreground">{item.text}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default ProblemSection;