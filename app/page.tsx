"use client";

import { useEffect, useState } from "react";
import { getMovies } from "@/api/api";
import Footer from "@/components/footer";
import MovieCollection from "@/components/movies";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/search-bar";

export default function Home() {
  const [title, setTitle] = useState("fast"); // Note: setting "fast" by default to display some data.
  const [movieData, setMovieData] = useState({ Search: [] });

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const response = await getMovies(title);
        const movieData = response.data;
        setMovieData(movieData);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieData();
  }, [title]);

  const handleSearch = async (title: string) => {
    setTitle(title);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 ">
      <Navbar />
      <SearchBar handleSearch={handleSearch} />
      <MovieCollection movieData={movieData} />
      <Footer />
    </main>
  );
}
