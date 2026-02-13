import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "FREE",
    price: "0",
    cents: "",
    period: "/mês",
    features: ["3 vagas/mês", "100 análises IA", "1 critério eliminatório"],
    cta: "Criar Conta Grátis",
    highlighted: false,
  },
  {
    name: "ESSENCIAL",
    price: "69",
    cents: ",90",
    period: "/mês",
    badge: "RECOMENDADO",
    features: [
      "10 vagas /mês",
      "500 análises IA",
      "5 critérios eliminatórios",
      "CRM: Importação de Talentos",
    ],
    cta: "Começar Agora",
    highlighted: true,
  },
  {
    name: "AVANÇADO",
    price: "199",
    cents: ",90",
    period: "/mês",
    features: [
      "50 vagas /mês",
      "2.000 análises IA",
      "15 critérios eliminatórios",
      "Histórico Vitalício",
    ],
    cta: "Criar Conta",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="planos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Planos Flexíveis
          </h2>
          <p className="text-lg text-muted-foreground">
            Comece sem custos. Escale conforme sua demanda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-foreground text-background border-foreground shadow-elevated scale-105 py-12"
                  : "bg-card text-card-foreground border-border shadow-card"
              }`}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-hero" />
                  <span className="absolute -top-3.5 right-6 text-xs font-semibold border border-border bg-background text-foreground px-3 py-1 rounded-md">
                    {plan.badge}
                  </span>
                </>
              )}

              <h3
                className={`text-sm font-bold tracking-widest mb-6 ${
                  plan.highlighted ? "text-primary-foreground" : "text-primary"
                }`}
              >
                {plan.name}
              </h3>

              <div className="flex items-baseline mb-8">
                {plan.price === "0" && (
                  <span className="text-sm mr-1 text-muted-foreground">R$</span>
                )}
                <span className="text-5xl font-extrabold">{plan.price}</span>
                {plan.cents && (
                  <span className="text-2xl font-semibold">{plan.cents}</span>
                )}
                <span
                  className={`text-sm ml-1 ${
                    plan.highlighted ? "opacity-60" : "text-muted-foreground"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 ${
                        plan.highlighted ? "text-accent" : "text-primary"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-lg text-base font-semibold h-12 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
