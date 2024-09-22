import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setCardData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-wrap gap-4 p-10">
      {cardData.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

export default Home;
