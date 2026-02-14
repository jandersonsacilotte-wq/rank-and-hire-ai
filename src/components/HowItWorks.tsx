import { motion } from "framer-motion";
import { FileText, Upload, Brain, Trophy, X, Check, AlertCircle } from "lucide-react";

const candidates = [
  { initials: "AS", name: "Ana Silva", time: "PDF • 10:42 AM", score: 95, color: "bg-emerald-500" },
  { initials: "RC", name: "Roberto Costa", time: "PDF • 09:15 AM", score: 82, color: "bg-blue-500" },
  { initials: "LM", name: "Lucas Mendes", time: "PDF • 08:30 AM", score: 74, color: "bg-violet-500" },
  { initials: "CF", name: "Camila Ferreira", time: "PDF • Ontem", score: 61, color: "bg-amber-500" },
  { initials: "MJ", name: "Marcos Jr.", time: "PDF • Ontem", score: 15, color: "bg-rose-500" },
];

const getScoreColor = (score: number) => {
  if (score >= 80) return "text-emerald-600";
  if (score >= 50) return "text-amber-600";
  return "text-rose-400";
};

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left column - Steps 1 & 2 */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Step 1 - Job Description */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-border bg-card text-card-foreground shadow-card p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent mt-3">
                  Passo 01
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Job Description</h3>
              <p className="text-muted-foreground">
                Cole sua descrição de vaga.
              </p>
            </motion.div>

            {/* Step 2 - Upload em Massa */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-border bg-card text-card-foreground shadow-card p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent mt-3">
                  Passo 02
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Upload em Massa</h3>
              <p className="text-muted-foreground">
                Arraste pastas inteiras. O sistema processa o texto dos currículos automaticamente.
              </p>
            </motion.div>
          </motion.div>

          {/* Center column - Step 3: Análise Semântica (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:row-span-2 rounded-3xl bg-foreground text-background shadow-elevated p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-hero opacity-10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-primary/20 rounded-xl">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent mt-4">
                  Passo 03
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-4">Insira Critérios de Classificação</h3>
              <p className="text-background/70 mb-8">
                Nossa IA entende contexto, não apenas palavras-chave.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm border border-background/20 rounded-lg p-3">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span>Eliminado: Sem CNH</span>
                </div>
                <div className="flex items-center gap-3 text-sm border border-background/20 rounded-lg p-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Aprovado: Inglês C1</span>
                </div>
                <div className="flex items-center gap-3 text-sm border border-background/20 rounded-lg p-3">
                  <AlertCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Atenção: Exp. &lt; 2 anos</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Ranking (Result) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-border bg-card text-card-foreground shadow-card p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-secondary rounded-lg">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mt-3">
                Resultado
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Ranking</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Obtenha seu Match Score com nosso Filtro por IA já organizados.
            </p>

            {/* Mini ranking table */}
            <div className="space-y-2">
              {candidates.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg bg-secondary/60 px-3 py-2.5"
                >
                  <div
                    className={`w-8 h-8 rounded-full ${c.color} flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0`}
                  >
                    {c.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{c.name}</p>
                    <p className="text-[10px] text-muted-foreground">{c.time}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`text-lg font-bold ${getScoreColor(c.score)}`}>
                      {c.score}%
                    </span>
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Match
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
