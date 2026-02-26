import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "Llevo 6 años en UX y mi madre todavía piensa que arreglo ordenadores.",
    author: "Elena, 32 años",
    role: "UX Designer",
  },
  {
    text: "Cuando digo que soy maquetador, la gente asume que maqueto revistas. No. Maqueto el futuro.",
    author: "Carlos, 28 años",
    role: "Frontend Developer",
  },
  {
    text: "Localicé una app para 14 mercados. El cliente dijo: '¿No era solo darle a traducir?'",
    author: "Marta, 35 años",
    role: "Localization Manager",
  },
  {
    text: "El SEO es como ser fontanero digital. Nadie te llama hasta que algo se rompe.",
    author: "Javier, 40 años",
    role: "SEO Specialist",
  },
];

const TestimonialSection = () => {
  return (
    <section className="section-padding bg-editorial-dark">
      <div className="container-medium">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="divider-line mb-8" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-editorial-mist block mb-4">
              Voces reales
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-on-dark leading-tight">
              Lo que nunca te cuentan
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div className="p-8 rounded-lg border border-muted/10 hover:border-editorial-gold transition-colors duration-500">
                <p className="font-display text-lg italic text-on-dark leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div>
                  <span className="font-body text-sm text-editorial-gold block">
                    {t.author}
                  </span>
                  <span className="font-body text-xs text-editorial-mist">
                    {t.role}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
