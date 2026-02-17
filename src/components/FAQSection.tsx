import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "O FiltrAI substitui o recrutador?",
    a: "Não. O FiltrAI organiza o volume e prioriza candidatos por aderência real à vaga. A decisão continua sendo sua. Ele elimina a parte operacional para que você foque na parte estratégica.",
  },
  {
    q: "Qual a diferença entre usar o FiltrAI e jogar currículos no ChatGPT?",
    a: "O ChatGPT analisa texto. O FiltrAI estrutura critérios, compara candidatos entre si e gera ranking consistente por aderência real à vaga. Não é apenas análise — é organização e priorização replicável.",
  },
  {
    q: "O ranking é confiável?",
    a: "O ranking é baseado nos critérios que você define para a vaga. O sistema mede aderência objetiva entre currículo e requisitos definidos, garantindo consistência na priorização. Você continua no controle dos critérios.",
  },
  {
    q: "Posso ajustar os critérios da vaga?",
    a: "Sim. Você define os requisitos técnicos, experiências desejadas e competências relevantes. O ranking é gerado com base nesses parâmetros.",
  },
  {
    q: "O FiltrAI funciona para qualquer tipo de vaga?",
    a: "Sim. Desde posições operacionais até estratégicas. Quanto maior o volume de candidatos, maior o impacto na economia de tempo.",
  },
  {
    q: "Quanto tempo leva para gerar um ranking?",
    a: "O ranking é gerado em minutos após o envio dos currículos e definição dos critérios da vaga.",
  },
  {
    q: "O FiltrAI substitui meu ATS?",
    a: "Não. Ele pode funcionar de forma complementar ao seu ATS, adicionando inteligência e priorização à triagem.",
  },
  {
    q: "E se o sistema não identificar um bom candidato?",
    a: "O FiltrAI não exclui candidatos automaticamente. Ele organiza por prioridade. Você pode revisar a lista completa sempre que desejar.",
  },
  {
    q: "Preciso de conhecimento técnico para usar?",
    a: "Não. A interface é simples e focada na experiência do recrutador.",
  },
  {
    q: "Como começo a usar?",
    a: "Basta solicitar uma demonstração. Mostramos como transformar sua triagem atual em ranking estruturado em poucos minutos.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 md:py-24 bg-section-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border px-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
