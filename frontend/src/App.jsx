import axios from "axios";
import { useState, useEffect, useRef } from "react";

function App() {
  const [img, setImg] = useState([]);

  const fetchImg = async () => {
    try {
      const res = await axios.get("http://localhost:5000/genimg");
      const data = await res.data;
      console.log(data)
      setImg(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } 
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
