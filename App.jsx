import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserProfileCard from "./components/UserProfileCard";

function App() {
  return (
    <div>
      <Header />

      <UserProfileCard
        name="Parth"
        role="Software Consultant"
        profilePic="/pfp.jpg"
      />

      <Footer />
    </div>
  );
}

export default App;
