import { useParams, useNavigate } from "react-router-dom";

const FilmDetails = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const filmIndex = parseInt(id, 10);

  // Check if the ID is a valid index and if the film data exists
  if (
    isNaN(filmIndex) ||
    filmIndex < 0 ||
    filmIndex >= data.length ||
    !data[filmIndex]
  ) {
    return <div>Invalid film ID</div>;
  }

  const film = data[filmIndex];

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="description">
      <div className="detailing">
        <div>
          <h2 style={{ marginBottom: "2em" }}>Movie Details</h2>
        </div>
        <h3>Image</h3>
        <img
          className="largeImage"
          src={`https://picsum.photos/800/400?random=${filmIndex}`}
          alt={film.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <h3>Title</h3>
        <p
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            color: "blue",
            padding: "10px",
            margin: "10px",
          }}
        >
          {film.title}
        </p>
        <h3>Opening Crawl</h3>
        <p
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            color: "blue",
            padding: "10px",
            margin: "10px",
          }}
        >
          {film.opening_crawl}
        </p>
        <h3>Genere</h3>
        <p
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            color: "blue",
            padding: "10px",
            margin: "10px",
          }}
        >
          {film.director}
        </p>
        <button
          onClick={goBack}
          style={{
            border: "none",
            fontWeight: "bolder",
            margin: "10px",
            padding: "12px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: "#CB1A80",
            color: "white",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FilmDetails;
