import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h2>My React Application</h2>
    </header>
  );
}

const styles = {
  header: {
  width: "100%",
  backgroundColor: "#4C8BF5",
  padding: "15px",
  color: "white",
  textAlign: "center",
  fontSize: "22px",
},

};

export default Header;
