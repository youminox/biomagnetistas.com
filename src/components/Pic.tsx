import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
  /** Atributo sizes para srcset responsive */
  sizes?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

/** Imagen optimizada (AVIF/WebP + srcset) vía next/image, con tamaño CSS controlado por className. */
export default function Pic({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 400px",
  width = 1536,
  height = 1024,
  priority = false,
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className}
      quality={72}
    />
  );
}
