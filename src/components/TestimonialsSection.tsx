import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import avatarAna from "@/assets/avatar-ana.jpg";
import avatarCamila from "@/assets/avatar-camila.jpg";
import avatarLucas from "@/assets/avatar-lucas.jpg";
import avatarMarcos from "@/assets/avatar-marcos.jpg";
import avatarRoberto from "@/assets/avatar-roberto.jpg";

const testimonials = [
  {
    name: "Ana Beatriz",
    role: "Head de RH",
    company: "TechNova",
    avatar: avatarAna,
    text: "Reduzi o tempo de triagem de 3 dias para 40 minutos. O ranking do FiltrAI é absurdamente preciso — comecei a entrevistar só quem realmente faz sentido para a vaga.",
    rating: 5,
  },
  {
    name: "Marcos Oliveira",
    role: "Recrutador Sênior",
    company: "Grupo Ativa",
    avatar: avatarMarcos,
    text: "Antes eu perdia manhãs inteiras lendo currículos repetitivos. Agora recebo um ranking estruturado e foco meu tempo em entrevistas e negociação.",
    rating: 5,
  },
  {
    name: "Camila Ferreira",
    role: "Coordenadora de Talent Acquisition",
    company: "Soluções RH",
    avatar: avatarCamila,
    text: "Com múltiplas vagas abertas ao mesmo tempo, o FiltrAI virou indispensável. Consigo manter a qualidade da seleção mesmo sob pressão de SLA.",
    rating: 5,
  },
  {
    name: "Lucas Andrade",
    role: "Gerente de Pessoas",
    company: "FinEdge",
    avatar: avatarLucas,
    text: "A análise por aderência real à vaga mudou completamente nosso processo. Fechamos posições 60% mais rápido e com candidatos muito mais qualificados.",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    role: "Diretor de RH",
    company: "Construtora Horizonte",
    avatar: avatarRoberto,
    text: "Implementamos o FiltrAI em toda a empresa. O ROI apareceu no primeiro mês — menos retrabalho, menos turnover e muito mais agilidade.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quem usa, <span className="text-gradient">recomenda</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Veja como o FiltrAI está transformando o recrutamento em empresas de diferentes setores.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-base leading-relaxed text-muted-foreground flex-1 mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/10"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i + 3) * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-base leading-relaxed text-muted-foreground flex-1 mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/10"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
