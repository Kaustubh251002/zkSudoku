import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import sudokuImage from "../assets/sudoku.png";
import Link from "next/link";
import GameList from "../components/gameList";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <span className="mb-10 text-3xl font-bold text-transparent bg-clip-text bg-amber-500 hover:bg-red-400">
          Zeroku
        </span>
      </div>
      <div>
        <GameList />
      </div>
    </div>
  );
}
