import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-section-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pare de decidir no escuro.
          </h2>
          <p className="mt-4 mb-10 text-lg text-muted-foreground">
            Transforme triagem em inteligência estratégica.
          </p>
          <Button size="lg" className="bg-gradient-hero text-primary-foreground px-10 py-6 text-base font-semibold shadow-glow hover:opacity-90 transition-opacity">
            Quero conhecer o FiltrAI
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
