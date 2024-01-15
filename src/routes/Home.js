import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>The Movies! {loading ? "" : `(${movies.length})`}</h1>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
