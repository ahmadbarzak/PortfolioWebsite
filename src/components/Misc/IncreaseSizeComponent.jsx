const IncreaseSizeComponent = () => {
    return (
      <div className="background" style={{ backgroundColor: "#355070", zIndex:10 }}>
      
      <div style={{display:"flex", flexDirection:"row"}} >
      {[1,2,3,4,5].map((i) => {
          return <img src="miscImages/gifycat.gif" style={{width: "325px", height:"100%",
          transform: i%2===0 ? "rotate(180deg)":"rotate(0deg)"}} key={i}/>
      })} </div>

      <span style=
        {{ position: "absolute", color:"#FFFFFF",
        bottom: 0,
        backgroundColor:"black", fontFamily:"papyrus",
        fontSize:"30px",
        paddingTop:"10px"}}>Please Increase Your Browser Size
      </span>
      
      </div>
    )
}

export default IncreaseSizeComponent;