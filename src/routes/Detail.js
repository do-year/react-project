import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  const getMovie = async () => {
    const data = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(data.data.movie);

    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>{detail.title}</h1>
          <p>{detail.description_full}</p>
          <img src={detail.medium_cover_image} alt={detail.title} />
        </div>
      )}
    </div>
  );
}
export default Detail;
