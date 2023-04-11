import { useState  } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../../../redux/reducers/mainReducer";

import QuillEditor from "../../UI/quill-editor/QuillEditor";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


const Proposal = (props) => {
    const dispatch = useDispatch();
    const [deadlineDate, setDeadlineDate] = useState(null);
    const [deadlineTime, setDeadlineTime] = useState("18:00");
   

  return(
    <div className="modal-content tx-14">
      <div className="modal-header">
          <h5 className="modal-title font-weight-bold">Lead Proposal</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.close}>
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div className="modal-body mb-scroll mmh"  >


          <form>
            <div className="df-title df-title-left" data-label="Proposal And Deadlines">
                <div className="row"> 
                    <div className="col-12">
                        <div className="form-row"> 
                            <div className="form-group col-12 col-md-8">
                                <label className="small font-weight-bold">Title <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder=""/>
                            </div>
                            <div className="form-group col-6 col-md-2">
                                <label className="small font-weight-bold">Approval Deadline</label>
                                <DatePicker 
                                    className="form-control" 
                                    calendarClassName="" 
                                    selected={deadlineDate}
                                    onChange={(date) => setDeadlineDate(date)} />
                            </div>
                            <div className="form-group col-6 col-md-2">
                                <label className="small font-weight-bold"></label>
                                <TimePicker
                                    onChange={setDeadlineTime}
                                    value={deadlineTime}
                                    className="form-control time-picker-input"
                                    disableClock={true}
                                    clearIcon={null}/>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>



            <ul className="nav nav-line" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" 
                        data-toggle="tab" 
                        id="tab-details"
                        href="#details" 
                        role="tab" 
                        aria-selected="true">Details</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" 
                        data-toggle="tab" 
                        id="tab-worksheet"
                        href="#worksheet" 
                        role="tab" 
                        aria-selected="false">Worksheet</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"  
                        href="#openModal_LeadActivity"   
                        data-toggle="modal"
                        onClick={() => dispatch(setModal(["LeadActivity", "modal-lg"]))}
                        >Preview</a>
                </li>
            </ul> 
 

           
            <div className="tab-content  mg-t-20"> 
                        {/* modal-scroll-content */}
                <div className="tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="tab-details"> 
                    <div className=" df-title df-title-left mt-3" data-label="Proposal Details" >
                        <div className="row" >                             
                            <div className="form-group col-12">
                                <label className="small font-weight-bold">Internal Notes</label>
                                <input type="text" className="form-control" placeholder=""/>
                            </div>
                            <div className="form-group col-12">
                                <label className="small font-weight-bold">Introductory Text</label>
                                <QuillEditor height={200} />
                            </div>
                            <div className="form-group col-12">
                                <label className="small font-weight-bold">Closing Text</label>
                                <QuillEditor height={200} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="worksheet" role="tabpanel" aria-labelledby="tab-worksheet">
                    <div className="df-title df-title-left mt-3" data-label="Proposal Worksheet">
                        <div className="row"> 
                            <div className="col-12">

                                <div className="d-flex align-items-center justify-content-between mg-b-15 mg-t-0">
                                    <h6 className="mg-b-0"></h6>
                                    <div className="d-flex">
                                        <button href="#" className="btn btn-outline-primary btn-xs mr-2">Import From</button>
                                        <button href="#" className="btn btn-outline-primary btn-xs mr-2">Add From</button>
                                        <button href="#openModal_" data-toggle="modal"
                                            onClick={() => dispatch(setModal(["AddNewCost", "modal-lg"]))} 
                                            className="btn btn-primary btn-xs">Add New Cost</button>
                                    </div>
                                </div> 

                                <div className="d-flex justify-content-center mt-1">
                                     
                                    <div class="table-responsive">
                                        <table class="table table-hover mg-b-0">
                                        <thead>
                                            <tr>
                                            <th scope="col">Items</th>
                                            <th scope="col">Cost Type</th>
                                            <th scope="col">Unit Cost</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Unit</th>
                                            <th scope="col">Builder Cost</th>
                                            <th scope="col">Markup</th>
                                            <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr> <th scope="row">some items / work</th> <td></td><td></td><td></td><td></td><td></td><td></td><td></td> </tr> 
                                            <tr> <th scope="row">some items / work</th> <td></td><td></td><td></td><td></td><td></td><td></td><td></td> </tr> 
                                            <tr> <th scope="row">some items / work</th> <td></td><td></td><td></td><td></td><td></td><td></td><td></td> </tr> 
                                            <tr> <th scope="row">some items / work</th> <td></td><td></td><td></td><td></td><td></td><td></td><td></td> </tr> 
                                            <tr> <th scope="row">some items / work</th> <td></td><td></td><td></td><td></td><td></td><td></td><td></td> </tr> 
                                            <tr> <th scope="row">some items / work</th> <td></td><td></td><td></td><td></td><td></td><td></td><td></td> </tr> 
                                            <tr> <th scope="row">some items / work</th> <td></td><td></td><td></td><td></td><td></td><td></td><td></td> </tr> 
                                            <tr> <th scope="row">some items / work</th> <td></td><td></td><td></td><td></td><td></td><td></td><td></td> </tr> 
                                            <tr> <th scope="row">some items / work</th> <td></td><td></td><td></td><td></td><td></td><td></td><td></td> </tr> 

                                        </tbody>
                                        </table>
                                    </div>
                                    
                                </div> 

                            </div>
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

export default Proposal;