import { useState, useEffect } from "react";
import { MovieGrid } from "./movie-grid";
import { MovieGridItem } from "./movie-grid-item";
import { IoLogoYoutube } from "react-icons/io";
import Button from "./button";
import Image from "next/image";

interface MovieData {
  Search: Movie[];
}

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
}

interface MovieView {
  poster: JSX.Element;
  className: string;
  icon: JSX.Element;
  title: string;
  year: string;
  button: JSX.Element;
}

const MovieCollection = ({ movieData }: { movieData: MovieData }) => {
  const [movies, setMovies] = useState<MovieView[]>([]);

  useEffect(() => {
    setMovies(
      movieData?.Search?.map((movie: Movie) => ({
        poster: (
          <Image
            src={movie.Poster}
            alt="Movie Poster"
            width={470}
            height={190}
            priority={true}
            className="w-full h-auto rounded-xl lg:object-center lg:object-cover"
          />
        ),
        className: "md:col-span-2",
        icon: <IoLogoYoutube className="text-neutral-500" />,
        title: movie.Title,
        year: `Year of release: ${movie.Year}`,
        button: <Button buttonText="Watch Trailer" />,
      }))
    );
  }, [movieData]);

  return (
    <MovieGrid className="max-w-3xl mx-auto md:auto-rows-[40rem] lg:auto-rows-[30rem] ">
      {movies?.map((movie, Id) => (
        <MovieGridItem
          key={Id}
          className={Id === 3 || Id === 6 ? "lg:col-span-2" : ""}
          button={movie.button}
          icon={movie.icon}
          poster={movie.poster}
          title={movie.title}
          year={movie.year}
        />
      ))}
    </MovieGrid>
  );
};

export default MovieCollection;
