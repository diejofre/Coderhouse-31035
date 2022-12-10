import "./App.css";
import { useQuery, gql } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  return (
    <div className="App">
      <h1>SpaceX Launches</h1>
      {data.launchesPast.map((launch) => (
        <div key={launch.id}>
          <p>{launch.mission_name}</p>
          <p>{launch.launch_date_local}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
