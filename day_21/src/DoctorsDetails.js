function DoctorsDetails(props){

    let count = props.Obj.rating;

    let arr = [];
    for(let index=0; index<count; index++){
        arr.push(<img style={{width:"20px", height:"20px", margin:"2px"}} src="https://www.topuwp.com/images/icon_star.svg"></img>);
    }

    return(
       <div style={{float:"left", border: "1px solid grey", width:"250px", textAlign:"center",borderRadius:"10px", margin:"10px", padding:"10px" }} >
        <img style={{borderRadius:"100%", height:"100px", width:"100px"}} src={props.Obj.img} />
        <h3>{props.Obj.name}</h3>
        <p>{props.Obj.designation}</p>
        <p>{arr}</p>
        <button type="button">BOOK APPOINTMENT</button>
       </div>
    )
}
export default DoctorsDetails;