import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.08),transparent_70%)]" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center">

          <span className="mb-6 inline-block rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-muted-foreground">
            Inteligência Artificial para RH
          </span>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Menos análise manual.{" "}
            <span className="text-gradient">Recrutamento Instântaneo</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">O FiltrAI é uma ferramenta poderosa que substitue horas com leitura manual de centenas de CVs por um ranking instântaneo gerado por IA. 


          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-gradient-hero text-primary-foreground px-8 py-6 text-base font-semibold shadow-glow hover:opacity-90 transition-opacity">
              Solicitar Demonstração
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-base font-medium">
              <Play className="mr-2 h-4 w-4" />
              Ver como funciona
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-5xl">

          <div className="rounded-xl border border-border bg-card p-2 shadow-elevated">
            <img
              src={dashboardMockup}
              alt="Dashboard FiltrAI mostrando ranking estratégico de candidatos"
              className="w-full rounded-lg"
              loading="lazy" />

          </div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;