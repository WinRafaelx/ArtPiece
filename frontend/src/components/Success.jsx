import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button, Stack } from "@mui/material";

function Success(props) {
  const navigate = useNavigate();

  const refreshPage = () => {
    window.location.reload(false);
  };

  const gotoHome = () => {
    navigate("/");
  };

  console.log(props);
  return (
    <>
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <img src={props.imgUrl} style={{
            width: "100%",
            height: "auto",
            maxWidth: "600px",
            maxHeight: "600px",
            objectFit: "contain",
          }}
          />
          <Typography variant="h4" align="center" sx={{ mt: 2, mb: 3 }}>
            Success!
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Button
              variant="contained"
              onClick={refreshPage}
              sx={{
                px: 5,
                py: 1,
                fontSize: 16,
                fontWeight: 700,
                bgcolor: "blue",
              }}
            >
              Gen Another One
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
      </Box>
    </>
  );
}

export default Success;
