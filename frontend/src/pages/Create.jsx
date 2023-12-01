import axios from "axios";
import { useRef, useState } from "react";

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
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

function Create() {
  const name = useRef("");
  const prompt = useRef("");
  const [loading, setLoading] = useState(false);

  const genImage = async () => {
    let Name = name.current, Prompt = prompt.current;
    console.log(Name, Prompt);
    // if (Name === "" 
  };

  if (loading) {
    return <p>Generating...</p>;
  }

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

export default Create;
