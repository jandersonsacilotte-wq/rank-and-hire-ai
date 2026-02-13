import { motion } from "framer-motion";
import { Upload, Brain, Users, TrendingUp, X, Check, AlertCircle } from "lucide-react";

const features = [
  {
    title: "Upload em Massa",
    description: "Arraste pastas inteiras. O sistema processa texto e padroniza tudo.",
    icon: Upload,
    highlighted: false,
  },
  {
    title: "Seu CRM",
    description: "Candidatos reprovados hoje são o ouro de amanhã.",
    icon: Users,
    highlighted: false,
  },
  {
    title: "Ranking",
    description: "Ordenação automática por Match Score.",
    icon: TrendingUp,
    highlighted: false,
  },
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Engenharia de Recrutamento
          </h2>
          <p className="text-lg text-muted-foreground">
            Suite completa para eliminar o trabalho braçal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left column - 2 items */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Upload em Massa */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-border bg-card text-card-foreground shadow-card p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Upload em Massa</h3>
              <p className="text-muted-foreground">
                Arraste pastas inteiras. O sistema processa texto e padroniza tudo.
              </p>
            </motion.div>

            {/* Seu CRM */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-border bg-card text-card-foreground shadow-card p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Seu CRM</h3>
              <p className="text-muted-foreground">
                Candidatos reprovados hoje são o ouro de amanhã.
              </p>
            </motion.div>
          </motion.div>

          {/* Center column - Análise Semântica (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:row-span-2 rounded-3xl bg-foreground text-background shadow-elevated p-10 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-hero opacity-10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="p-4 bg-primary/20 rounded-xl w-fit mb-6">
                <Brain className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-3xl font-bold mb-4">Análise Semântica</h3>
              <p className="text-background/70 mb-8">
                Nossa IA entende contexto, não apenas palavras-chave.
              </p>

              {/* Sample results */}
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

          {/* Right column - Ranking */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-border bg-card text-card-foreground shadow-card p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-secondary rounded-lg">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">Ranking</h3>
            <p className="text-muted-foreground">
              Ordenação automática por Match Score.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
