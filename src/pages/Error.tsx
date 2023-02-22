import React from 'react';
import { useNavigate } from "react-router-dom";
import Center from "../components/utils/Center";

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
      <button onClick={ backToHomePage }>
        Back To Home Page
      </button>
    </Center>
  )
}

export default Error