import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { auth, app } from "./firebase";
import "./MyApp.css";

function App() {
  // const uMail = auth.currentUser.email;
  // let uId = auth.currentUser.uid;

  const navigate = useNavigate('')

  let navImg = ()=>{
    navigate('/upImg');
  }
  let navFile = ()=>{
    navigate('/upFile');
  }

  return (
    <>
    <Box className="myTitle title">
      <Text>Choose what you want to upload</Text>
    </Box>
    <Box className="myContainer" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <button className="btn" onClick={navImg}>Upload Image</button>
      <button className="btn" onClick={navFile}>Upload File</button>
    </Box>
    </>
  );
}

export default App;
