import { Helmet, HelmetProvider } from "react-helmet-async";
// import '../../../../../resources/assets/css/dashforge.calendar.css'; 
// import '../../../../../resources/lib/fullcalendar/fullcalendar.min.css'; 


// import '../../../../../resources/lib/fullcalendar/fullcalendar.min.js'; 
// import '../../../../../resources/assets/js/calendar-events.js'; 
// import '../../../../../resources/assets/js/dashforge.calendar.js'; 


const TimeSchedule = () => {

    return(
        <> 
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content="TimeSchedule information portal"
                    />
                <title>TimeSchedule </title>
                {/* <body className="app-contact"/> */}
                <body className="app-calendar"/>
            </Helmet> 
        </HelmetProvider>  
       
<div className="tab-content">
     
    <div className="row">
        <div className="col-12">
        
            <div className="df-title df-title-left pt-2" data-label="Schedule">        
               
                {/* <div className="calendar-wrapper"> */}

                <div className="calendar-content">
                  <div id="calendar" className="calendar-content-body"></div>
                </div>

                {/* </div>     */}

            </div>
        </div>
    </div>  


 

 
</div>





        </>
    )
}

export default TimeSchedule;