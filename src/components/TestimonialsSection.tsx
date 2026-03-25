import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import avatarAna from "@/assets/avatar-ana.jpg";
import avatarCamila from "@/assets/avatar-camila.jpg";
import avatarLucas from "@/assets/avatar-lucas.jpg";
import avatarMarcos from "@/assets/avatar-marcos.jpg";
import avatarRoberto from "@/assets/avatar-roberto.jpg";
import logoTechnova from "@/assets/logo-technova.png";
import logoGrupoAtiva from "@/assets/logo-grupoativa.png";
import logoSolucoesRH from "@/assets/logo-solucoesrh.png";
import logoFinEdge from "@/assets/logo-finedge.png";
import logoHorizonte from "@/assets/logo-horizonte.png";

const testimonials = [
  {
    name: "Ana Beatriz",
    role: "Head de RH",
    company: "TechNova",
    avatar: avatarAna,
    logo: logoTechnova,
    text: "Reduzi o tempo de triagem de 3 dias para 40 minutos. O ranking do FiltrAI é absurdamente preciso — comecei a entrevistar só quem realmente faz sentido para a vaga.",
    rating: 5,
  },
  {
    name: "Marcos Oliveira",
    role: "Recrutador Sênior",
    company: "Grupo Ativa",
    avatar: avatarMarcos,
    logo: logoGrupoAtiva,
    text: "Antes eu perdia manhãs inteiras lendo currículos repetitivos. Agora recebo um ranking estruturado e foco meu tempo em entrevistas e negociação.",
    rating: 5,
  },
  {
    name: "Camila Ferreira",
    role: "Coordenadora de Talent Acquisition",
    company: "Soluções RH",
    avatar: avatarCamila,
    logo: logoSolucoesRH,
    text: "Com múltiplas vagas abertas ao mesmo tempo, o FiltrAI virou indispensável. Consigo manter a qualidade da seleção mesmo sob pressão de SLA.",
    rating: 5,
  },
  {
    name: "Lucas Andrade",
    role: "Gerente de Pessoas",
    company: "FinEdge",
    avatar: avatarLucas,
    logo: logoFinEdge,
    text: "A análise por aderência real à vaga mudou completamente nosso processo. Fechamos posições 60% mais rápido e com candidatos muito mais qualificados.",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    role: "Diretor de RH",
    company: "Construtora Horizonte",
    avatar: avatarRoberto,
    logo: logoHorizonte,
    text: "Implementamos o FiltrAI em toda a empresa. O ROI apareceu no primeiro mês — menos retrabalho, menos turnover e muito mais agilidade.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-12 md:py-24 bg-section-5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-destructive mb-3">
            Não acredite em nós — ouça quem já transformou o RH
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quem usa, <span className="text-gradient">recomenda</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Veja como o FiltrAI está transformando o recrutamento em empresas de diferentes setores.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-2xl">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-card hover:shadow-elevated transition-shadow"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-card hover:shadow-elevated transition-shadow"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card text-center"
            >
              {/* Company logo */}
              <img
                src={t.logo}
                alt={`Logo ${t.company}`}
                className="mx-auto mb-8 h-[4.5rem] w-auto object-contain"
              />

              {/* Quote */}
              <p className="text-base leading-relaxed text-muted-foreground mb-8">
                "{t.text}"
              </p>

              {/* Avatar & info */}
              <div className="flex flex-col items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-primary/10"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <a
              href="#planos"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              Testar Grátis por 7 Dias
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
