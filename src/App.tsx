import React from 'react';
import Header from "./components/Header";
import MissionValues from "./components/MissionValues";
import {Container} from "react-bootstrap";
import TeamList from "./components/TeamList";
import Connect from "./components/Connect";
import FeedbackForm from "./components/feedbackForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="wrapper px-xl-60 pb-4 pb-xl-5">
          <MissionValues />
          <TeamList />
          <Connect />
          <FeedbackForm />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
