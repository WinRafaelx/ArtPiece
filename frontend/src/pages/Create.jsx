import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../components/Success";

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
  const [success, setSuccess] = useState(false); 
  const [newImgUrl, setNewImgUrl] = useState("");
  const navigate = useNavigate();

  const genImage = async () => {
    console.log(name.current.value, prompt.current.value);
    let Name = name.current.value, Prompt = prompt.current.value;
    if (Name === "" || Prompt === "") {
      alert("Please fill all the fields");
      return;
    }
    setLoading(true);

    try {
      const res = await query({ inputs: Prompt });
      console.log(res);
      
      await blobToBase64(res)
      .then(async (res) => {
        const result = await axios.post("http://localhost:5000/genimg/", {
          name: Name,
          img: res,
          prompt: Prompt,
        });
        setNewImgUrl(result.data);
        console.log(newImgUrl);
      })
      .catch((err) => console.log(err));
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setSuccess(true);
    }
  };

  if (loading) {
    return <p>Generating...</p>;
  }
  
  if(success) {
    console.log(newImgUrl);
    return <Success imgUrl={newImgUrl} />
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
