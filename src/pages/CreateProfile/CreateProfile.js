import React, { useState } from "react";
import backgroundImage from "../../images/home-page-bg.jpg";
import "./CreateProfile.css";
import Navbar from "../../components/NavBar/Navbar";
import Form1 from "../../components/Form1/Form1";
import Form2 from "../../components/Form2/Form2";
import Form3 from "../../components/Form3/Form3";
import Form4 from "../../components/Form4/Form4";
import Form5 from "../../components/Form5/Form5";
import Form6 from "../../components/Form6/Form6";

function CreateProfile() {
  const [currentForm, setCurrentForm] = useState(1);
  const [isRegistered,setIsRegistered] = useState(false);

  const handleContinue = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const handleBack = () => {
    setCurrentForm((prevForm) => prevForm - 1);
  };


  const handleSubmit = () =>{
    setIsRegistered(true);
  }

  const renderCurrentForm = () => {
    switch (currentForm) {
      case 1:
        return <Form1 onContinue={handleContinue} />;
      case 2:
        return <Form2 onContinue={handleContinue} onBack={handleBack} />;
      case 3:
        return <Form3 onContinue={handleContinue} onBack={handleBack} />;
      case 4:
        return <Form4 onContinue={handleContinue} onBack={handleBack} />;
      case 5:
        return <Form5 onContinue={handleContinue} onBack={handleBack} />;
      case 6:
        return <Form6 onSubmit={handleSubmit} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div id="wrapper">
      <Navbar isRegistered={isRegistered} />
      <form id="content" class="signup">
        {renderCurrentForm()}
      </form>
      <img id="backgroundImage" src={backgroundImage} alt="Background" />
    </div>
  );
}

export default CreateProfile;
