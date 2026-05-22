/**
 * /vinilos — Vinyl catalog page
 * Placeholder ready for ProductCard grid implementation.
 *
 * TODO:
 *  1. Import QUIZ_RESULTS or a separate vinyl catalog from /data
 *  2. Map over products and render <ProductCard> components
 *  3. Add filters (artist, price, edition type)
 */
export default function VinilosPage() {
  return (
    <div className="min-h-screen bg-[#0A0020] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-section text-white mb-2">Vinilos</h1>
        <p className="text-white/50 mb-12">Colección completa de vinilos exclusivos.</p>

        {/* REPLACE: render actual <ProductCard> grid here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="vinyl-card aspect-[3/4] flex items-center justify-center"
            >
              <span className="text-white/20 text-sm font-mono">
                {/* REPLACE: vinyl product card */}
                Product {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
