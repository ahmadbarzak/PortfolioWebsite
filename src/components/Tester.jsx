import MotionBackButton from "./HomePage/BackButton";

const Tester = () => {

  return (
    <div style={{position:"absolute", left:0, top:0, backgroundColor:"#355070", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <MotionBackButton 
        clicked={() => console.log("Testing!")} color="purple"/>
    </div>
  );
}

export default Tester;