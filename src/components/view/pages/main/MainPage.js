import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import '../../../../resources/assets/css/dashforge.contacts.css';
import ScriptsLoader from "../../../../services/ScriptsLoader";

import SidebarLeft from "./SidebarLeft";
import Content from "./Content";



const MainPage = () => {

    useEffect(() => {    
        ScriptsLoader();
    },[])
    
 
    return(
    <>
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content="MainPage information portal"
                    />
                <title>MainPage </title>
                <body className="app-contact"/> 
            </Helmet> 
        </HelmetProvider> 

        <div className="contact-wrapper">
        {/* <div className="contact-navleft">
            <nav className="nav flex-column">
            <a href="#tabProject" className="nav-link active" data-toggle="tab">
                <span data-toggle="tooltip" title="All Contacts" data-placement="right"><i data-feather="users"></i></span>
            </a>
            <a href="#tabPhoneCall" className="nav-link" data-toggle="tab">
                <span data-toggle="tooltip" title="Recently Contacted" data-placement="right"><i data-feather="phone-call"></i></span>
            </a>
            </nav>
        </div> */}
        
            <SidebarLeft/>
            <Content/>

        </div>
    </>
    )
    
}

export default MainPage;