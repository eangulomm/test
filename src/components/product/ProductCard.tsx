import Image from "next/image";
import Link  from "next/link";
import { Badge }  from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { type QuizResult } from "@/data/constants";

interface ProductCardProps {
  product: QuizResult;
}

/**
 * ProductCard
 * Reusable vinyl product card for catalog / result pages.
 * Pass a `product` object that matches the QuizResult shape,
 * or create a separate Product type in /data/constants.ts.
 *
 * REPLACE:
 *   - product.albumCover → real album art
 *   - product.vinylImage → real vinyl render
 */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="vinyl-card group flex flex-col overflow-hidden">
      {/* Image area */}
      <div className="relative aspect-square overflow-hidden bg-[#1A0040]">
        {/* REPLACE: product.albumCover */}
        <Image
          src={product.albumCover}
          alt={product.songTitle}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0020]/80 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isLimited    && <Badge variant="limited">Limited</Badge>}
          {product.isAutographed && <Badge variant="autographed">Autographed</Badge>}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-white/40 text-xs font-mono mb-0.5">{product.artist}</p>
        <h3 className="text-white font-heading text-lg leading-tight mb-2">{product.songTitle}</h3>
        <p className="text-white/50 text-xs leading-relaxed line-clamp-2 flex-1 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-2">
          <span className="text-white font-mono font-bold text-lg">{product.price}</span>
          <Link href={product.buyHref}>
            <Button variant="outline" size="sm">Ver vinilo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
