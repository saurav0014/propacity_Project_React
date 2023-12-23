import { useParams, useNavigate } from "react-router-dom";

const PlanetDetails = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const Index = parseInt(id, 10);

  if (isNaN(Index) || Index < 0 || Index >= data.length || !data[Index]) {
    return <div>Invalid People ID</div>;
  }

  const planet = data[Index];

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="description">
      <div className="detailing">
        <div>
          <h2 style={{ marginBottom: "2em" }}>Planet's Detail's</h2>
        </div>
        <h3>Image</h3>
        <img
          className="largeImage"
          src={`https://picsum.photos/800/400?random=${Index}`}
          alt={planet.title}
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
          {planet.name}
        </p>
        <h3>Planets populations</h3>
        <p
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            color: "blue",
            padding: "10px",
            margin: "10px",
          }}
        >
          {planet.population}
        </p>
        <h3>Terrain</h3>
        <p
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            color: "blue",
            padding: "10px",
            margin: "10px",
          }}
        >
          {planet.terrain}
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

export default PlanetDetails;
