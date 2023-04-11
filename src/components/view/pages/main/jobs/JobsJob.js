import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../../../../../redux/reducers/mainReducer";
import DatePicker from "react-datepicker";

import { Helmet, HelmetProvider } from "react-helmet-async";

import $ from 'jquery';
import "select2";
import "../../../../../resources/lib/select2/css/select2.min.css";

import QuillEditor from "../../../../UI/quill-editor/QuillEditor";
 



const JobsJob = ( ) => {
    const dispatch = useDispatch();

    const [prjStartDate, setPrjStartDate] = useState(null);
    const [prjEndDate, setPrjEndDate] = useState(null);
    const [actStartDate, setActStartDate] = useState(null);
    const [actEndDate, setActEndDate] = useState(null);

    // const editorRef = useRef(null);
    

    useEffect(() => {
        
        $('.select2').select2({
            placeholder: 'Choose one',
            searchInputPlaceholder: 'Search options'
          });
        $('.select2-no-search').select2({
            minimumResultsForSearch: Infinity
        });
 
    }, []);
    

    return(
        <>
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content="JobsJob information portal"
                    />
                <title>JobsJob </title>
            </Helmet> 
        </HelmetProvider>  
       
<div className="tab-content">
    
    <div className="row">
        <div className="col-12 col-md-8">
            <div className="df-title df-title-left" data-label="General Information">
                <form>
                    <div className="form-group">
                        <label className="font-weight-bold">Job Name <span className="text-danger">*</span></label>
                        <textarea type="text" className="form-control" rows="1"  placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Job Type <span className="text-danger">*</span></label>
                        <select className="form-control select2 select2-no-search">
                            <option value="">Type of job 1</option>
                            <option value="">Type of job 2</option>
                            <option value="">Type of job 3</option>
                        </select> 
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label className="small">Job Prefix</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label className="small">Job Group</label>
                            <div className="input-group mg-b-10">
                                <select className="form-control select2" multiple="multiple" defaultValue={["Group of job 1"]}>
                                    <option label="Choose one"></option>
                                    <option value="Group of job 1">Group of job 1</option>
                                    <option value="Group of job 2">Group of job 2</option>
                                    <option value="Group of job 3">Group of job 3</option>
                                </select>  
                                <div className="input-group-append">
                                    <button type="button" className="input-group-text btn btn-primary btn-xs">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-12">
                            <span className="font-weight-bold">Address</span>
                        </div>
                    </div>    
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label className="small">Street Address</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label className="small">City</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-12 col-md-6">
                            <label className="small">State</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label className="small">Zip Code</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-12 col-md-4">
            <div className="df-title df-title-right h-100" data-label="Status Information">
                <div className="form-row">
                    <div className="col-12">
                        <label className="font-weight-bold">Status</label>
                        <select className="form-control select2 select2-no-search">
                            <option value="Open">Open</option>
                            <option value="Close">Close</option>
                        </select> 
                    </div>                    
                    <div className="col-12 mt-2">
                    <label className="small">Contract Price</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text small">$</span>
                            </div>
                            <input type="text" className="form-control" placeholder=""  />
                        </div>
                    </div>
                    <div className="form-group col-12 mt-2">
                        <label className="small">Project Managers</label>
                        <select className="form-control select2" multiple="multiple" defaultValue={["Paul"]}>
                            <option label="Choose one"></option>
                            <option value="Paul">Paul</option>
                            <option value="Den">Den</option>
                            <option value="Viktor">Viktor</option>
                        </select>   
                    </div> 
                    <div className="form-group col-12 col-md-6">
                        <label className="small">Square Feet</label>
                        <input type="text" className="form-control" placeholder=""/>
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label className="small">Permit #</label>
                        <input type="text" className="form-control" placeholder=""/>
                    </div> 
                    <div className="form-group col-12">
                        <label className="small">Lot Info</label>
                        <textarea type="text" className="form-control" rows="2"  placeholder=""/>
                    </div>
                </div> 
            </div> 
        </div>
    </div>   

    <div className="row mt-4">
        <div className="col-12">
            <div className="df-title df-title-left" data-label="Schedule">        
                <div className="row"> 
                    <div className="form-group col-6 col-md-3">
                        <label className="small">Projected Start</label>
                        <DatePicker className="form-control" calendarClassName="" selected={prjStartDate} onChange={(date) => setPrjStartDate(date)} />
                    </div>                         
                    <div className="form-group col-6 col-md-3">
                        <label className="small">Projected Completion</label>
                        <DatePicker className="form-control" calendarClassName="" selected={prjEndDate} onChange={(date) => setPrjEndDate(date)} />
                    </div>     
                    <div className="form-group col-6 col-md-3">
                        <label className="small">Actual Start</label>
                        <DatePicker className="form-control" calendarClassName="" selected={actStartDate} onChange={(date) => setActStartDate(date)} />
                    </div>                         
                    <div className="form-group col-6 col-md-3">
                        <label className="small">Actual Completion</label>
                        <DatePicker className="form-control" calendarClassName="" selected={actEndDate} onChange={(date) => setActEndDate(date)} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label className="small">Job Color</label>
                        <select className="form-control select2 select2-no-search">
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                        </select> 
                    </div> 
                    <div className="form-group col-12 col-md-8">
                        <label className="small">Work Days <span className="text-danger">*</span></label>
                        <select className="form-control select2" multiple="multiple" defaultValue={["Monday"]}>
                            <option label="Choose one"></option>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select> 
                    </div>   
                </div>
            </div>
        </div>
    </div>  



    <div className="row mt-4">
        <div className="col-12 col-md-6">
            <div className="df-title df-title-left" data-label="Notes for Internal Users">        
                <div className="row">
                    <div className="col-12">
                        <form>  
                           <QuillEditor height={200} />

                            {/* <div className="ht-200 mg-b-25 bg-white" ref={editorRef} style={{ height: '300px' }}>
                                <strong>Quill</strong> is a free, <a href="#">open source</a> WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.
                            </div> */}
                        </form>
                    </div> 
                </div>
            </div>
        </div>
        <div className="col-12 col-md-6">
            <div className="df-title df-title-right" data-label="Notes for Subs/Vendors">        
                <div className="row">
                    <div className="col-12">
                        <form>  
                           <QuillEditor height={200} />

                            {/* <div className="ht-200 mg-b-25 bg-white" ref={editorRef} style={{ height: '300px' }}>
                                <strong>Quill</strong> is a free, <a href="#">open source</a> WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.
                            </div> */}
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    </div>  

 
</div>





        </>
    )
}

export default JobsJob;