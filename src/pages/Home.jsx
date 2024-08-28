import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <h1>Je suis la page Home</h1>
      <Link to="/details">Aller sur la page details</Link>
    </main>
  );
};

export default Home;
