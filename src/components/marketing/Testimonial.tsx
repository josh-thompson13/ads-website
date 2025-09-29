export function Testimonial() {
  return (
    <section className="mx-auto max-w-3xl text-center">
      <p className="text-xl md:text-2xl leading-relaxed">
        Before working with ADS, scheduling and costs were unpredictable. Now, with drone application and mapping, jobs are completed faster, more consistently, and at a lower overall cost than traditional methods.
      </p>
      <div className="mt-6 flex items-center justify-center gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="text-center">
            <div className="mx-auto h-16 w-16 overflow-hidden rounded-full bg-muted" />
            <div className="mt-2 text-sm">Farmer {i}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
