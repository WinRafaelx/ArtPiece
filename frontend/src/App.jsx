import axios from "axios";
import { useState, useEffect, useRef } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar.jsx";
import CssBaseline from '@mui/material/CssBaseline';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function App() {
  const [img, setImg] = useState([]);
  const [size, setSize] = useState([]);

  const fetchImg = async () => {
    try {
      const res = await axios.get("http://localhost:8000/genimg");
      const data = await res.data;
      setImg(data);
      for (let i = 0; i < img.length; i++) {
        console.log(img[i].url);
        setSize((prev) => [...prev, [getRandomInt(1, 3), getRandomInt(1, 3)]]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchImg();
  }, []);

  // console.log(size, img)

  if (img === null) {
    return <p>No data available</p>;
  } else {
    return (
      <>
        <CssBaseline />
        <Navbar />
        <Container>
        <ImageList cols={4} variant="quilted">
          {img.map((item, index) => (
            <ImageListItem
            key={item._id}
            cols={1 || 1} rows={1 || 1}
            >
              <img
                {...srcset(item.url, 121, 2, 2)}
                alt={item.name}
                loading="lazy"
                />
            </ImageListItem>
          ))}
        </ImageList>
          </Container>
      </>
    );
  }
}

export default App;
