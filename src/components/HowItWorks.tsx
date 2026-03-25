import { motion } from "framer-motion";
import { FileText, Upload, Brain, Trophy, X, Check, AlertCircle, MapPin, GraduationCap } from "lucide-react";
import avatarAna from "@/assets/avatar-ana.jpg";
import avatarRoberto from "@/assets/avatar-roberto.jpg";
import avatarLucas from "@/assets/avatar-lucas.jpg";
import avatarCamila from "@/assets/avatar-camila.jpg";
import avatarMarcos from "@/assets/avatar-marcos.jpg";

const candidates = [
  { name: "Ana Silva", time: "PDF • 10:42 AM", score: 95, avatar: avatarAna },
  { name: "Roberto Costa", time: "PDF • 09:15 AM", score: 82, avatar: avatarRoberto },
  { name: "Lucas Mendes", time: "PDF • 08:30 AM", score: 74, avatar: avatarLucas },
  { name: "Camila Ferreira", time: "PDF • Ontem", score: 61, avatar: avatarCamila },
  { name: "Marcos Jr.", time: "PDF • Ontem", score: 15, avatar: avatarMarcos },
];

const getScoreColor = (score: number) => {
  if (score >= 80) return "text-emerald-600 group-hover:text-emerald-400";
  if (score >= 50) return "text-amber-600 group-hover:text-amber-400";
  return "text-rose-400 group-hover:text-rose-300";
};

const StepBadge = ({ label, dark = false }: { label: string; dark?: boolean }) => (
  <span
    className={`inline-block text-sm font-extrabold uppercase tracking-[0.15em] px-3 py-1 rounded-full ${
      dark
        ? "bg-accent/20 text-accent"
        : "bg-accent/10 text-accent group-hover:bg-accent/20"
    } transition-colors duration-500`}
  >
    {label}
  </span>
);

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
    "group rounded-2xl border border-border bg-card text-card-foreground shadow-card p-7 transition-all duration-500 hover:bg-foreground hover:text-background hover:border-foreground hover:shadow-elevated cursor-default";

  return (
    <section id="como-funciona" className="py-12 md:py-24 bg-section-3">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Left column - Steps 1 & 2 */}
          <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Step 1 - Job Description */}
            <motion.div variants={itemVariants} className={`${hoverCardClass} flex-1 flex flex-col`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors duration-500">
                  <FileText className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>
                <StepBadge label="Passo 01" />
              </div>
              <h3 className="text-xl font-bold mb-1">Job Description</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70 transition-colors duration-500 mb-2">
                Cole sua descrição de vaga.
              </p>
              <div className="rounded-lg border border-border group-hover:border-background/20 bg-secondary/50 group-hover:bg-background/5 p-3 text-xs text-muted-foreground group-hover:text-background/50 transition-all duration-500 space-y-1">
                <p className="font-semibold text-foreground/70 group-hover:text-background/80 transition-colors duration-500">Analista de Dados Sênior</p>
                <p className="leading-relaxed">Experiência com Python, SQL e ferramentas de BI. Inglês avançado...</p>
              </div>
            </motion.div>

            {/* Step 2 - Upload em Massa */}
            <motion.div variants={itemVariants} className={`${hoverCardClass} flex-1 flex flex-col`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors duration-500">
                  <Upload className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>
                <StepBadge label="Passo 02" />
              </div>
              <h3 className="text-xl font-bold mb-1">Upload em Massa</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70 transition-colors duration-500 mb-2">
                Arraste pastas inteiras. O sistema processa os currículos automaticamente.
              </p>
              <div className="rounded-lg border border-dashed border-border group-hover:border-background/20 bg-secondary/50 group-hover:bg-background/5 p-3 transition-all duration-500 flex flex-col items-center gap-1.5">
                <Upload className="w-5 h-5 text-muted-foreground group-hover:text-background/50 transition-colors duration-500" />
                <p className="text-[11px] text-muted-foreground group-hover:text-background/50 transition-colors duration-500 text-center">
                  curriculos_vaga_042.zip<br />
                  <span className="text-[10px]">48 arquivos • 12 MB</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Center column - Step 3: Critérios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-foreground text-background shadow-elevated p-7 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-hero opacity-10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Brain className="w-5 h-5 text-accent" />
                </div>
                <StepBadge label="Passo 03" dark />
              </div>

              <h3 className="text-xl font-bold mb-1 leading-tight">
                Insira Critérios de Classificação
              </h3>
              <p className="text-background/70 text-sm mb-4">
                Nossa IA entende contexto, não apenas palavras-chave.
              </p>

              <p className="text-xs font-bold uppercase tracking-widest text-background/40 mb-2">Meus Critérios</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm border border-background/20 rounded-lg p-2.5">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span>Eliminado: Sem CNH</span>
                </div>
                <div className="flex items-center gap-3 text-sm border border-background/20 rounded-lg p-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Aprovado: Inglês C1</span>
                </div>
                <div className="flex items-center gap-3 text-sm border border-background/20 rounded-lg p-2.5">
                  <AlertCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Atenção: Exp. &lt; 2 anos</span>
                </div>
                <div className="flex items-center gap-3 text-sm border border-background/20 rounded-lg p-2.5">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Localização: São Paulo, SP</span>
                </div>
                <div className="flex items-center gap-3 text-sm border border-background/20 rounded-lg p-2.5">
                  <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Formação: Eng. ou Ciência da Comp.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Ranking */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`${hoverCardClass} flex flex-col`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors duration-500">
                <Trophy className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-500" />
              </div>
              <StepBadge label="Resultado" />
            </div>
            <h3 className="text-xl font-bold mb-1">Ranking</h3>
            <p className="text-sm text-muted-foreground group-hover:text-background/70 transition-colors duration-500 mb-3">
              Obtenha seu Match Score com nosso Filtro por IA já organizados.
            </p>

            <p className="text-xs font-semibold text-foreground/50 group-hover:text-background/40 transition-colors duration-500 mb-2">
              Vaga: Coordenador de Marketing
            </p>
            <div className="space-y-2">
              {candidates.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg bg-secondary/60 group-hover:bg-background/10 px-3 py-2 transition-colors duration-500"
                >
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
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
