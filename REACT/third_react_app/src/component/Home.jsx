import { Link } from "react-router-dom";
function Home(){

return(

    <div>
        <h2>Home:</h2>
        <p>home component to lera react routing</p>
         <Link to="/profile">Profile</Link><br></br>
    </div>
);
}
export default Home;