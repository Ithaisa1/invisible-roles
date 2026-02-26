import ScrollReveal from "./ScrollReveal";
import { Profession } from "@/data/professions";
import { motion } from "framer-motion";

interface ProfessionSectionProps {
  profession: Profession;
  index: number;
}

const ProfessionSection = ({ profession, index }: ProfessionSectionProps) => {
  const isEven = index % 2 === 0;

  return (
    <section className={`section-padding ${isEven ? "bg-background" : "bg-card"}`}>
      <div className="container-medium">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-4">
              Profesión {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground leading-tight mb-4">
              {profession.title}
            </h2>
            <p className="font-display text-xl md:text-2xl italic text-editorial-gold">
              {profession.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* What they do */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16">
            <h3 className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Qué hace realmente
            </h3>
            <p className="font-body text-base md:text-lg text-foreground font-light leading-relaxed">
              {profession.whatTheyDo}
            </p>
          </div>
        </ScrollReveal>

        {/* Problems solved */}
        <ScrollReveal delay={0.15}>
          <div className="mb-16 pl-6 border-l-2 border-editorial-gold">
            <h3 className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Qué problemas resuelve
            </h3>
            <p className="font-body text-base md:text-lg text-foreground font-light leading-relaxed">
              {profession.problemsSolved}
            </p>
          </div>
        </ScrollReveal>

        {/* Day in life */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16 bg-background rounded-lg p-8 md:p-12">
            <h3 className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Un día en su trabajo
            </h3>
            <p className="font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed italic">
              {profession.dayInLife}
            </p>
          </div>
        </ScrollReveal>

        {/* Myths vs Reality */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16">
            <h3 className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Mitos vs Realidad
            </h3>
            <div className="space-y-6">
              {profession.myths.map((item, i) => (
                <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-lg bg-muted">
                      <span className="font-body text-xs tracking-[0.2em] uppercase text-destructive block mb-2">
                        Mito
                      </span>
                      <p className="font-body text-sm md:text-base text-foreground">
                        "{item.myth}"
                      </p>
                    </div>
                    <div className="p-6 rounded-lg bg-editorial-dark">
                      <span className="font-body text-xs tracking-[0.2em] uppercase text-editorial-gold block mb-2">
                        Realidad
                      </span>
                      <p className="font-body text-sm md:text-base text-on-dark">
                        {item.reality}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Quote */}
        <ScrollReveal delay={0.1}>
          <motion.blockquote
            className="text-center py-8"
            whileInView={{ scale: [0.98, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="divider-line mb-8" />
            <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed mb-4 max-w-xl mx-auto">
              "{profession.quote}"
            </p>
            <cite className="font-body text-sm text-muted-foreground not-italic">
              — {profession.quoteAuthor}
            </cite>
          </motion.blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProfessionSection;
