import React, { useState } from "react";

function UserProfileCard({ name, role, profilePic }) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div style={styles.card}>
      <img src={profilePic} alt="Profile" style={styles.image} />
      <h3>{name}</h3>
      <p>{role}</p>

      <button
        onClick={() => setIsFollowing(!isFollowing)}
        style={{
          ...styles.button,
          backgroundColor: isFollowing ? "#bbb" : "#4C8BF5",
        }}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}

const styles = {
  card: {
    width: "260px",
    backgroundColor: "#0f0f0fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    margin: "20px auto",
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default UserProfileCard;
