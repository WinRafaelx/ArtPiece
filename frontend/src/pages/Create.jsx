import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../components/Success";
import Navbar from "../components/Navbar";
import { Box, TextField, Container, Button, Stack } from "@mui/material";
import Loading from "../components/Loading";

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

function Create() {
  const name = useRef("");
  const prompt = useRef("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [newImgUrl, setNewImgUrl] = useState("");
  const navigate = useNavigate();

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

  const genImage = async () => {
    console.log(name.current.value, prompt.current.value);
    let Name = name.current.value,
      Prompt = prompt.current.value;
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
          const result = await axios.post("http://localhost:8000/genimg/", {
            name: Name,
            img: res,
            prompt: Prompt,
          });
          setNewImgUrl(result.data);
          // console.log(newImgUrl);
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
    return <Loading />;
  }

  if (success) {
    console.log(newImgUrl);
    return <Success imgUrl={newImgUrl} />;
  }

  const gotoHome = () => {
    navigate("/");
  }
  
  return (
    <Box>
      <Navbar />
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 10 }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
            inputRef={name}
            required
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Prompt"
            placeholder="This a chilly cat"
            multiline
            rows={4}
            required
            fullWidth
            inputRef={prompt}
            sx={{ mb: 4 }}
          />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Button
              variant="contained"
              onClick={genImage}
              sx={{
                px: 5,
                py: 1,
                fontSize: 16,
                fontWeight: 700,
                bgcolor: "blue",
              }}
            >
              Generate
            </Button>
            <Button
              variant="outlined"
              onClick={gotoHome}
              sx={{
                px: 5,
                py: 1,
                fontSize: 16,
                fontWeight: 700,
                color: "dark",
                borderColor: "dark",
                '&:hover': {
                  color: "orange",
                  borderColor: "orange",
                },
              }}
            >
              Back Home
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Create;
