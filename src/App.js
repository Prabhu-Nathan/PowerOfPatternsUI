import { React } from "react";
import "./index.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import CourseCards from "./components/coursecards/CourseCards";
import { Route, Routes } from "react-router-dom";
import Form from "./components/login/Form";
import { styled } from "@mui/system";
import { Container, CssBaseline } from "@mui/material";

function App() {
  const RootContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  });

  const ContentContainer = styled(Container)({
    flexGrow: 1,
    padding: (theme) => theme.spacing(3),
  });

  const FooterContainer = styled("footer")({
    padding: (theme) => theme.spacing(2),
    marginTop: "auto",
  });
  return (
    <RootContainer>
      <CssBaseline />
      <Nav />
      <ContentContainer component="main">
        <Routes>
          <Route exact path="/" element={<CourseCards />} />
          <Route path="/login" element={<Form />} />
        </Routes>
      </ContentContainer>
      <Footer />
    </RootContainer>
  );
}

export default App;
