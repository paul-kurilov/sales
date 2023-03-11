// import { Helmet } from "react-helmet"; 
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";

const SummaryPage = ({Component, dataType}) => {
    const {type, data} = useParams();

    return(
        <>
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content="SummaryPage information portal"
                    />
                <title>SummaryPage </title>
            </Helmet> 
        </HelmetProvider>  
        <main>
            <p>type: {type} </p>
            <p>data: {data}</p>
        </main>  
        </>
    )
}

export default SummaryPage;