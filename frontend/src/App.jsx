import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Imgshow from "./components/Imgshow";

function App() {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchImg = async () => {
    try {
      const res = await axios.get("http://localhost:5000/genimg");
      const data = await res.data;
      setImg(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (img === null) {
    return <p>No data available</p>;
  }

  useEffect(() => {
    fetchImg()
  }, []);

  return (
    <>
    {img.map((item) => 
      <img src={item.url} />
    )}
    </>
  );
}

export default App;
