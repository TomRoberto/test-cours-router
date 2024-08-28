import { useParams } from "react-router-dom";

const Offer = () => {
  const params = useParams();
  console.log(params);

  return (
    <main>
      <h1>On est sur la page Offer, de l'offre dont l'id est {params.id}</h1>
    </main>
  );
};

export default Offer;
