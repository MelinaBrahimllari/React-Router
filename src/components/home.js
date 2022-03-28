import { useParams } from "react-router";

const Home = (props) => { 
    const { home, color , bgcolor } = useParams();
if(home==="home"){
    return (
      <h1 >Welcome</h1>
      
    );}
else if (isNaN(+home) === false){
    return (
        <h1 >The number is : {home}</h1>
        
      );
}
else if (isNaN(+home) === true){
    return (
        <h1 style={{color: color, backgroundColor: bgcolor}} >The word is : {home}</h1>
      );
}

  }

  export default Home;