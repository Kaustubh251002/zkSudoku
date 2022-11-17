import Head from "next/head";
import GoBack from "../components/goBack";

export default function About() {
  return (
    <div>
      <Head>
        <title>Zeroku - About</title>
        <meta name="title" content="Zeroku" />
        <meta
          name="description"
          content="Zero Knowledge Sudoku"
        />
      </Head>
      <div className="mb-10">
        <GoBack />
      </div>
      <div className="grid place-items-center">
        <div className="flex justify-center items-center mb-10 text-4xl font-bold text-transparent bg-clip-text bg-red-400 hover:bg-red-600">
          Zeroku
        </div>
        <div className="flex justify-center items-center text-lg md:w-96 w-auto text-slate-300">
          Zeroku is a website that allows users to play zk (zero knowledge)
          sudoku and mint an NFT as proof that they have won.
        </div>
      </div>
    </div>
  );
}
