import dynamic from 'next/dynamic'

const DynamicHero = dynamic(
  () => import('./helix-hero').then(mod => ({ default: mod.Hero })),
  {
    ssr: false,
    loading: () => (
      <section className="relative h-screen w-screen tracking-tight text-gray-900 bg-white overflow-hidden">
        <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 z-20 max-w-md">
          <h1 className="text-3xl font-light tracking-tight mb-3">
            Where Science Meets Innovation
          </h1>
          <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight">
            Anubis Consulting bridges the gap between cutting-edge AI, advanced microbiology research, and strategic startup advisory.
          </p>
        </div>
      </section>
    )
  }
)

export default DynamicHero