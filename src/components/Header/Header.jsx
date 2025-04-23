import React from "react";

const Header = () => {
    return(
        <div className="flex py-5 bg-blue-950 ml-0 pl-0 mr-0 pr-0">
        
            <div>
                <img src="./logo.png" alt="OpenAI Logo" className="h-10 pl-8 w-28" /> 
            </div>

            
            <div className="text-white px-1 ml-auto mr-8">
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:underline  hover:text-blue-900">Home</a></li>
                    <li><a href="#tr-portal" className="hover:underline  hover:text-blue-900">Teachers</a></li>
                    <li><a href="#st-portal" className="hover:underline  hover:text-blue-900">Students</a></li>
                    <li><a href="#services" className="hover:underline  hover:text-blue-900">Services</a></li>
                    <li><a href="#contact" className="hover:underline hover:text-blue-900">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
