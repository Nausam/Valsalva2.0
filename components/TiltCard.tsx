import Image from "next/legacy/image";
import { Tilt } from "./ui/tilt";

interface ProductCardProps {
  id?: string;
  name?: string;
  price: number;
  imageUrl: string;
  description?: string;
  category?: string;
}

export function TiltCard1({
  id,
  name,
  price,
  imageUrl,
  description,
  category,
}: ProductCardProps) {
  return (
    <Tilt rotationFactor={10} isRevese>
      <div
        style={{
          borderRadius: "12px",
        }}
      >
        <Image
          src={imageUrl}
          alt="Ghost in the shell - Kôkaku kidôtai"
          width={400}
          height={250}
          quality={100}
        />
        <div className="p-2">
          <h1 className="font-bold text-xl leading-snug text-zinc-950 dark:text-zinc-50">
            {name}
          </h1>
          <p className="text-zinc-700 dark:text-zinc-400 font-semibold">
            MVR {price}
          </p>
        </div>
      </div>
    </Tilt>
  );
}
