import { Helmet, HelmetProvider } from "react-helmet-async"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'


const TimeDailyLogs = () => {

    return(
        <> 
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content="TimeDailyLogs information portal"
                    />
                <title>TimeDailyLogs </title> 
            </Helmet> 
        </HelmetProvider>  
       
<div className="tab-content">
     
    <div className="row">
        <div className="col-12"> 

            <div className="df-title df-title-left pt-2" data-label="Daily Logs">        
                <div className="row ">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between mg-b-15 mg-t-0">
                            <h6 className="mg-b-0"></h6>
                            <div className="d-flex">
                                <button href="#" className="btn btn-outline-primary btn-xs mr-2">Print</button>
                                <button href="#openModal_Proposal" data-toggle="modal"
                                    // onClick={() => dispatch(setModal(["Proposal", "modal-xl"]))} 
                                    className="btn btn-primary btn-xs">New Daily Log</button>
                            </div>
                        </div> 

                        <div className="d-flex justify-content-center mt-5">
                            <FontAwesomeIcon icon={faBookBookmark} size='4x'/>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <h3>Track project progress with daily logs</h3>
                        </div>
                        <div className="d-flex justify-content-center mb-3 ">
                            <span>Share project with your team</span>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            <button href="#openModal_Proposal" data-toggle="modal" 
                                    // onClick={() => dispatch(setModal(["Proposal", "modal-xl"]))} 
                                    className="btn btn-primary btn-xs">Add a Daily Log</button>
                        </div>

                        


                    </div> 
                </div>
            </div>
            
        </div>
    </div>  


 

 
</div>





        </>
    )
}

export default TimeDailyLogs;