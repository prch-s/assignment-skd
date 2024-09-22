import React, { useEffect, useState } from "react";
import Card from "../components/Card";

import { MOCK_DATA } from "../mock_tcaster_api";

const Home = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setCardData(MOCK_DATA);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-10 ">
      {cardData.map((card) => {
        return <Card key={card.id} data={card} />;
      })}
    </div>
  );
};

export default Home;
