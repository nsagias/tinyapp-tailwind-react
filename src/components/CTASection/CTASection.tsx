export default function CTASection () {
  return (
    <section id="cta-section" className="py-24 bg-darkViolet">
      <div className="flex flex-col p-2 space-y-6">
        <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">Get more clicks today</h5>
        <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLlight md:text-base md:py-3 focus:outline-none">
          Get Started
        </button>
      </div>
    </section>
  );
}