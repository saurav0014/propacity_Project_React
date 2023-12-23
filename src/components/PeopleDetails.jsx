import { useParams, useNavigate } from "react-router-dom";

const PeopleDetails = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const Index = parseInt(id, 10);

  if (isNaN(Index) || Index < 0 || Index >= data.length || !data[Index]) {
    return <div>Invalid People ID</div>;
  }

  const people = data[Index];

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="description">
      <div className="detailing">
        <div>
          <h2 style={{ marginBottom: "2em" }}>Person's Detail's</h2>
        </div>
        <h3>Image</h3>
        <img
          className="largeImage"
          src={`https://picsum.photos/800/400?random=${Index}`}
          alt={people.title}
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
          {people.name}
        </p>
        <h3>People Hair colors</h3>
        <p
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            color: "blue",
            padding: "10px",
            margin: "10px",
          }}
        >
          {people.hair_color}
        </p>
        <h3>Gender</h3>
        <p
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            color: "blue",
            padding: "10px",
            margin: "10px",
          }}
        >
          {people.gender}
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

export default PeopleDetails;
