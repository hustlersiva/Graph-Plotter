import { useState } from "react";
import InputForm from "../Components/InputForm";

const Home = () => {
  const [, setData] = useState([]);
  return (
    <div className="home-container">
      <h1 className="title">Graph Plotter</h1>
      <InputForm setData={setData} />
    </div>
  );
};

export default Home;
