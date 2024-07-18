const styles = {
  color: "white",
  display: "flex",
  height: "80px",
  backgroundColor: "#333",
};

const Header = () => {
  return (
    <header style={styles}>
      <img
        src="https://www.pngall.com/wp-content/uploads/13/Anime-Logo-Transparent.png"
        alt="logo"
      />
      <div>
        <ul className="menu">
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
