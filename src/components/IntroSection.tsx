import ScrollReveal from "./ScrollReveal";

const IntroSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="divider-line mb-12" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground leading-tight mb-8 text-center">
            ¿Alguna vez te has preguntado quién hace que todo
            <em className="text-editorial-gold italic"> funcione</em>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-6">
            Cada vez que navegas por una web que se adapta perfectamente a tu móvil,
            encuentras un producto en otro idioma que suena natural, o Google te muestra
            exactamente lo que buscabas — hay alguien detrás haciendo que eso ocurra.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-6">
            Son profesionales que rara vez reciben crédito. Que explican su trabajo
            en cenas familiares y reciben miradas confusas. Que resuelven problemas
            que nadie sabe que existen.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="font-body text-lg md:text-xl text-foreground font-normal leading-relaxed text-center mt-12">
            Este proyecto les da voz.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntroSection;
