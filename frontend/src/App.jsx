import "./App.css";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
}

function App() {
  const name = useRef("");
  const prompt = useRef("");

  const genImage = async () => {
    console.log(name.current.value, prompt.current.value);
    if (name.current.value === "" || prompt.current.value === "") {
      alert("Please fill all the fields");
      return;
    }

    const res = await query({ inputs: prompt.current.value });
    console.log(res);

    await blobToBase64(res)
      .then(async (res) => {
        const result = await axios.post("http://localhost:5000/genimg/", {
          name: name.current.value,
          img: res,
          prompt: prompt.current.value,
        });
        console.log(result);
        name.current.value = "";
        prompt.current.value = "";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <label>Name:</label>
      <input ref={name} type="text" required name="name" />
      <br />
      <label>Prompt:</label>
      <input ref={prompt} type="text" required name="Prompt" />
      <br />
      <button onClick={genImage}>Gen</button>
    </div>
  );
}

export default App;
