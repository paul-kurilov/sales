import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

// import $ from 'jquery';
// import "jquery-ui/themes/base/datepicker.css";
// import "jquery-ui/ui/widgets/datepicker";

const LeadActivity = (props) => {
    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState("10:00");
    const [endTime, setEndTime] = useState("5:00");
    // const inputRef = useRef(null);
    
    // useEffect(() => {
    //     $(inputRef.current).datepicker({
    //     //   dateFormat: "mm/dd/yy",
    //     //   onSelect: (date) => console.log(date),
    //     });
    //   }, []);

  return(
    <div className="modal-content tx-14">
      <div className="modal-header">
          <h5 className="modal-title font-weight-bold">Lead Activity</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.close}>
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div className="modal-body mb-scroll mmh" >


          <form>
            <div className="df-title df-title-left" data-label="Add new activity">
              <div className="row">
                <div className="col-12 col-sm-3 col-lg-2 d-flex justify-content-center align-items-center">
                  <i className="fa fa-phone rounded-circle"></i>
                </div>
                <div className="col-12 col-sm-9 col-lg-10">
                    <div className="form-row">
                        <div className="form-group col-6">
                            <label className="small font-weight-bold">Activity Type <span className="text-danger">*</span></label>
                            <div className="input-group mg-b-10">
                                <select className="form-control">
                                    <option label="Choose one"></option>
                                    <option value="Phone Call">Phone Call</option>
                                    <option value="Inspection">Inspection</option>
                                </select>  
                                <div className="input-group-append">
                                    <button type="button" className="input-group-text btn btn-primary btn-xs">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-6">
                            <label className="small font-weight-bold">Color</label>
                            <select className="form-control">
                                <option label="Choose one"></option>
                                <option value="Blue">Blue</option>
                                <option value="Red">Red</option>
                                <option value="Green">Green</option>
                            </select> 
                        </div>
                        <div className="form-group col-4">
                            <label className="small font-weight-bold">Activity Date <span className="text-danger">*</span></label>
                            {/* <input type="text" className="form-control" placeholder="Choose date" id="activity_date"/> */}
                            <DatePicker className="form-control" calendarClassName="" selected={startDate} onChange={(date) => setStartDate(date)} />
                            {/* <input type="text" ref={inputRef} className="form-control" /> */}
                        </div>
                        <div className="form-group col-4">
                            <label className="small font-weight-bold">Start Time <span className="text-danger">*</span></label>
                            <TimePicker
                                onChange={setStartTime}
                                value={startTime}
                                className="form-control time-picker-input"
                                disableClock={true}
                                clearIcon={null}/>
                        </div>
                        <div className="form-group col-4">
                            <label className="small font-weight-bold">Start Time <span className="text-danger">*</span></label>
                            <TimePicker
                                onChange={setEndTime}
                                value={endTime}
                                className="form-control time-picker-input"
                                disableClock={true}
                                clearIcon={null}/>
                        </div>
                    </div>
                </div>
                
                <div className="col-12">
                    <div className="form-row">
                        <div className="form-group col-6">
                            <label className="small font-weight-bold">Assigned User <span className="text-danger">*</span></label>
                            <select className="form-control">
                                <option label="Choose one"></option>
                                <option value="Paul">Paul</option>
                                <option value="Den">Den</option>
                                <option value="Mike">Mike</option>
                            </select> 
                        </div>
                        <div className="form-group col-6">
                            <label className="small font-weight-bold">Initiated by </label>
                            <select className="form-control">
                                <option label="Choose one"></option>
                                <option value="Salesperson">Salesperson</option>
                                <option value="Lead">Lead</option>
                                <option value="Other">Other</option>
                            </select> 
                        </div>

                        <div className="form-group col-6">
                            <label className="small font-weight-bold">Reminder</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                        
                        <div className="form-group col-6">
                            <label className="small font-weight-bold">Attendees</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                    </div>
                </div>
                
              </div>
            </div>

            <div className="df-title df-title-left mt-3" data-label="Location">
            <button className="btn btn-secondary btn-xs m-0 py-0 title-btn-right">Copy Address From</button>
              <div className="row">
                {/* <div className="col-12 d-flex justify-content-center">
                    <button className="btn btn-outline-secondary btn-xs m-0 py-0 ">Copy Address From</button>
                </div> */}
                <div className="col-12">
                    
                    <div className="form-row">
                        <div className="form-group col-7 col-lg-4 order-1">
                            <label className="small font-weight-bold">Street Address</label>
                            <input type="text" className="form-control" placeholder=""/>
                            {/* <div className="input-group mg-b-10">
                                <div className="input-group-prepend">
                                    <button type="button" className="input-group-text btn btn-primary btn-xs"><i className="fa fa-paste"></i></button>
                                </div>
                                <input type="text" className="form-control" placeholder=""/>
                            </div>  */}
                        </div>
                        <div className="form-group col-7 col-lg-3 order-3 order-lg-2">
                            <label className="small font-weight-bold">City</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-group col-5 col-lg-3 order-2 order-lg-3">
                            <label className="small font-weight-bold">State</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-group col-5 col-lg-2 order-4">
                            <label className="small font-weight-bold">Zip Code</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                    </div>
                </div>
              </div>  
            </div>

            <div className="df-title df-title-left mt-3" data-label="Details">
              <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <label className="small font-weight-bold">Description</label>
                        <textarea type="text" className="form-control" rows="3"  placeholder=""/>
                    </div>
                </div>
              </div>
            </div>    


          </form>  
        
      </div>
      <div className="modal-footer">
          {/* <button type="button" className="btn btn-secondary btn-xs" data-dismiss="modal">Close</button> */}
          <button type="button" className="btn btn-primary btn-xs">Save</button>
      </div>
    </div>
  )
}

export default LeadActivity;