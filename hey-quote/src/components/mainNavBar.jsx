import {NavLink} from "react-router-dom"

const MainNavBar = () => {
    return (
        <>
            <header>
                <nav className = "flex flex-wrap justify-between items-center bg-1 backdrop-filter bg-opacity-40 backdrop-blur-md p-4 px-28">
                    <div className = "w-fit">
                        <img className = "w-40" src = "../../public/logo2.png" alt = "Mohammad Sadra nafe" />
                    </div>

                    <div className = "flex flex-wrap justify-center items-center">
                        <div className = "mx-2">
                            <NavLink to = "/quotes" className = "bg-2 capitalize p-2 rounded-lg font-medium" activeClassName = "text-white bg-3">all quotes</NavLink>
                        </div>

                        <div className = "mx-2">
                            <NavLink to = "/new-quote" className = "bg-2 capitalize p-2 rounded-lg font-medium" activeClassName = "text-white bg-3">add a  quote</NavLink>
                        </div>
                    </div>
                
                </nav>
            </header>
        </>
    );
};

export default MainNavBar;