import React from 'react';
import { useNavigate } from "react-router-dom";
import Center from "../components/utils/Center";
import { Button, Typography } from "@mui/material";

const Error = () => {
  const navigate = useNavigate();

  const backToHomePage = () => {
    navigate("/");
  }


  return (
    <Center>
      <div>
        Error 404: Page Not Found
      </div>
      <Button onClick={ backToHomePage }>
        Back To Home Page
      </Button>
    </Center>
  )
}

export default Error