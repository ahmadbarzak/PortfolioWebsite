import "../../App.css";

const TetrisBackground = () => {
    return (
    <div className="background" style={{ backgroundColor: "#355070", zIndex: -1 }}>
        <div className="tetris" style={{ zIndex: 0 }}></div>
      </div>
    );
  };
  

export default TetrisBackground;