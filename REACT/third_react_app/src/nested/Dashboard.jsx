import { NavLink, Outlet } from "react-router-dom";

function Dashboard(){
    return(
        <div className="dashboard-container">
            <h2>Dasshboard</h2>
            <div className="dashboard-buttons">
           <nav>
                <NavLink to="profile" className={({isActive})=>isActive?"active-link":"link"}>Profile</NavLink>
                <NavLink to="setting" className={({isActive})=>isActive?"active-link":"link"}>Setting</NavLink>
</nav>
         </div>

        <hr></hr>
        <Outlet/>
        </div>
    )
}
export default Dashboard;