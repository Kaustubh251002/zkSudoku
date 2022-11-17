import Link from "next/link";
import Image from "next/image";

export default function GameCard({ nameGame, imageGame, urlGame }) {
  return (
    <div className="p-5 border border-slate-600 rounded-md shadow-md shadow-slate-800/50">
      <div className="grid grid-cols-1 place-items-center gap-5">
        <Link href={urlGame}>
          <a>
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-red-600">
              {nameGame}
            </div>
          </a>
        </Link>

        <Link href={urlGame}>
          <a>
            <Image
              src={imageGame}
              priority={true}
              width={300}
              height={300}
              alt={nameGame}
            />
          </a>
        </Link>
        <Link href={urlGame}>
          <a className="w-full flex justify-center items-center space-x-1 transition-colors duration-150 mb-4 text-lg text-slate-300 font-semibold py-3 px-5 rounded-md bg-red-600 hover:bg-orange-600">
            <span>Play</span>
            <span>{nameGame}</span>
          </a>  
        </Link>
      </div>
    </div>
  );
} 
