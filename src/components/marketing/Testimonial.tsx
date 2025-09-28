export function Testimonial() {
  return (
    <section className="mx-auto max-w-3xl text-center">
      <p className="text-xl md:text-2xl leading-relaxed">
        Before using precision farming tools, I struggled with unpredictable yields and high resource costs. Now, with AI‑powered analytics and drone monitoring, productivity is up by 40%, using 30% less water.
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

