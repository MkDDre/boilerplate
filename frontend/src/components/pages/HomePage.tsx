// src/components/pages/HomePage.tsx
const HomePage = () => {
  return (
    <main className="flex-1">
      <section className="relative">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            THE ATHLETES&apos; <span className="text-primary">PROGRESS</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
            Transforme ton potentiel athlétique avec une préparation physique
            sur mesure. Excellence, performance et progression garanties.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Découvrir mes prestations
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Obtenir l&apos;ebook gratuit
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 max-w-md text-center">
            <div>
              <div className="text-2xl font-bold text-primary">+100</div>
              <div className="text-xs text-muted-foreground">
                Athlètes accompagnés
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-xs text-muted-foreground">
                Années d&apos;expérience
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-xs text-muted-foreground">
                Satisfaction client
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
