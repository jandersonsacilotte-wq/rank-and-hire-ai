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
  if (score >= 80) return "text-emerald-600 group-hover:text-emerald-400";
  if (score >= 50) return "text-amber-600 group-hover:text-amber-400";
  return "text-rose-400 group-hover:text-rose-300";
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

  const hoverCardClass =
    "group rounded-2xl border border-border bg-card text-card-foreground shadow-card p-8 transition-all duration-500 hover:bg-foreground hover:text-background hover:border-foreground hover:shadow-elevated cursor-default";

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

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Left column - Steps 1 & 2 */}
          <motion.div
            className="flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Step 1 - Job Description */}
            <motion.div variants={itemVariants} className={`${hoverCardClass} flex-1 flex flex-col`}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors duration-500">
                  <FileText className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent mt-3">
                  Passo 01
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Job Description</h3>
              <p className="text-muted-foreground group-hover:text-background/70 transition-colors duration-500 mb-4">
                Cole sua descrição de vaga.
              </p>
              {/* Sample box */}
              <div className="mt-auto rounded-lg border border-border group-hover:border-background/20 bg-secondary/50 group-hover:bg-background/5 p-3 text-xs text-muted-foreground group-hover:text-background/50 transition-all duration-500 space-y-1.5">
                <p className="font-semibold text-foreground/70 group-hover:text-background/80 transition-colors duration-500">Analista de Dados Sênior</p>
                <p className="leading-relaxed">Experiência com Python, SQL e ferramentas de BI. Inglês avançado...</p>
              </div>
            </motion.div>

            {/* Step 2 - Upload em Massa */}
            <motion.div variants={itemVariants} className={`${hoverCardClass} flex-1 flex flex-col`}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors duration-500">
                  <Upload className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent mt-3">
                  Passo 02
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Upload em Massa</h3>
              <p className="text-muted-foreground group-hover:text-background/70 transition-colors duration-500 mb-4">
                Arraste pastas inteiras. O sistema processa o texto dos currículos automaticamente.
              </p>
              {/* Sample box */}
              <div className="mt-auto rounded-lg border border-dashed border-border group-hover:border-background/20 bg-secondary/50 group-hover:bg-background/5 p-4 transition-all duration-500 flex flex-col items-center gap-2">
                <Upload className="w-5 h-5 text-muted-foreground group-hover:text-background/50 transition-colors duration-500" />
                <p className="text-[11px] text-muted-foreground group-hover:text-background/50 transition-colors duration-500 text-center">
                  curriculos_vaga_042.zip<br />
                  <span className="text-[10px]">48 arquivos • 12 MB</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Center column - Step 3: Análise Semântica (Featured - always dark) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-foreground text-background shadow-elevated p-10 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-hero opacity-10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-primary/20 rounded-xl">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent mt-4">
                  Passo 03
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 leading-tight">
                Insira Critérios de<br />Classificação
              </h3>
              <p className="text-background/70 mb-8">
                Nossa IA entende contexto, não apenas palavras-chave.
              </p>

              <div className="space-y-3 mt-auto">
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
            className={`${hoverCardClass} flex flex-col`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors duration-500">
                <Trophy className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-500" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mt-3">
                Resultado
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Ranking</h3>
            <p className="text-muted-foreground group-hover:text-background/70 transition-colors duration-500 mb-5 text-sm">
              Obtenha seu Match Score com nosso Filtro por IA já organizados.
            </p>

            {/* Mini ranking table */}
            <div className="space-y-2 mt-auto">
              {candidates.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg bg-secondary/60 group-hover:bg-background/10 px-3 py-2 transition-colors duration-500"
                >
                  <div
                    className={`w-8 h-8 rounded-full ${c.color} flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0`}
                  >
                    {c.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{c.name}</p>
                    <p className="text-[10px] text-muted-foreground group-hover:text-background/50 transition-colors duration-500">{c.time}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`text-base font-bold ${getScoreColor(c.score)}`}>
                      {c.score}%
                    </span>
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground group-hover:text-background/50 font-semibold transition-colors duration-500">
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
