import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../../../../../redux/reducers/mainReducer";

import { Helmet, HelmetProvider } from "react-helmet-async";

import $ from 'jquery';
import "select2";
import "../../../../../resources/lib/select2/css/select2.min.css";

import QuillEditor from "../../../../UI/quill-editor/QuillEditor";

// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
// import Quill from "quill";
// import 'quill/dist/quill.snow.css';

// import "jquery-ui-dist/jquery-ui";
// import "../../../../../resources/lib/ionicons/css/ionicons.min.css";




const SalesLead = ({Component, dataType}) => {
    const dispatch = useDispatch();

    // const editorRef = useRef(null);
    

    useEffect(() => {
        
        $('.select2').select2({
            placeholder: 'Choose one',
            searchInputPlaceholder: 'Search options'
          });
        $('.select2-no-search').select2({
            minimumResultsForSearch: Infinity
        });

    
        // let quill2 = new Quill(editorRef.current, {
        //     modules: {
        //         toolbar: [
        //         ['bold', 'italic'],
        //         ['link', 'blockquote', 'code-block', 'image'],
        //         [{ list: 'ordered' }, { list: 'bullet' }]
        //         ]
        //     },
        //     placeholder: 'Compose an epic...',
        //     theme: 'snow'
    
        //     });
        
    //   $(accordionRef.current).accordion({collapsible: true});
    }, []);
    

    return(
        <>
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content="SalesLead information portal"
                    />
                <title>SalesLead </title>
            </Helmet> 
        </HelmetProvider>  
       
<div className="tab-content">
    
    <div className="row">
        <div className="col-12 col-md-6">
            <div className="df-title df-title-left" data-label="General Information">
                <form>
                    <div className="form-group">
                        <label className="font-weight-bold">Opportunitie Title <span className="text-danger">*</span></label>
                        <textarea type="text" className="form-control" rows="1"  placeholder=""/>
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
        <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center align-items-center df-title df-title-right h-100" data-label="Contact Information">
                <div className="form-row">
                    <div className="col-12 d-flex justify-content-center">
                        <h5 className="font-weight-bold">Connect your clients to this lead opportunity </h5>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <p className="font-weight-bold">Create or choose clients contact </p>
                    </div>
                    <div className="form-group col-12 col-md-6 d-flex justify-content-center">
                        <a href="#openModal_CreateNewContact" data-toggle="modal" 
                            onClick={() => dispatch(setModal(["CreateNewContact", "modal-lg"]))} 
                            className="btn btn-primary btn-xs"> Create New Contact</a>
                    </div>
                    <div className="form-group col-12 col-md-6 d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-primary btn-xs"> Choose from Existing Contacts</button>
                    </div>
                </div> 
            </div>
        </div>
    </div>   

    <div className="row mt-4">
        <div className="col-12">
            <div className="df-title df-title-left" data-label="Connections">        
                <div className="row">
                    <div className="col-12">
                        <form>  
                            <div className="form-row">
                                <div className="form-group col-12 col-md-6">
                                    <label className="small">Salespeople</label>
                                    <select className="form-control select2" multiple="multiple" defaultValue={["Vitaliy", "Alex"]}>
                                        <option label="Choose one"></option>
                                        <option value="Vitaliy">Vitaliy</option>
                                        <option value="Alex">Alex</option>
                                        <option value="Paul">Paul</option>
                                        <option value="Den">Den</option>
                                    </select> 
                                </div>
                                <div className="form-group col-8 col-md-4">
                                    <label className="small">Estimated Revenue</label>
                                    <div className="form-row align-items-center">
                                        <div className="col-5 input-group mg-b-10">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text small">$</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder=""  />
                                        </div>
                                        <div className="col-1 input-group mg-b-10 small"> to </div>
                                        <div className="col-5 input-group mg-b-10">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text small">$</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder=""  />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-4 col-md-2">
                                    <label className="small">Status</label>
                                    <select className="form-control select2 select2-no-search">
                                        <option value="Open">Open</option>
                                        <option value="Close">Close</option>
                                    </select> 
 
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-12 col-md-4">
                                    <label className="small">Tags</label>
                                    <div className="input-group mg-b-10">
                                        <select className="form-control select2" multiple="multiple" defaultValue={["Office"]}>
                                            <option label="Choose one"></option>
                                            <option value="Office">Office</option>
                                            <option value="App">App</option>
                                        </select>  
                                        <div className="input-group-append">
                                            <button type="button" className="input-group-text btn btn-primary btn-xs">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label className="small">Sources</label>
                                    <div className="input-group mg-b-10">
                                        <select className="form-control select2" multiple="multiple" defaultValue={["Google"]}>
                                            <option label="Choose one"></option>
                                            <option value="Google">Google</option>
                                            <option value="Ad">Ad</option>
                                        </select>  
                                        <div className="input-group-append">
                                            <button type="button" className="input-group-text btn btn-primary btn-xs">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label className="small">Project Type</label>
                                    <div className="input-group mg-b-10">
                                        <select className="form-control select2" multiple="multiple" defaultValue={[""]}>
                                            <option label="Choose one"></option>
                                            <option value="Office">Office</option>
                                            <option value="App">App</option>
                                        </select>  
                                        <div className="input-group-append">
                                            <button type="button" className="input-group-text btn btn-primary btn-xs">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    </div>  



    <div className="row mt-4">
        <div className="col-12">
            <div className="df-title df-title-left" data-label="Notes">        
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




{/* 
    <div ref={accordionRef} className="accordion">
        <h6 className="accordion-title">General Information</h6>
        <div className="accordion-body">
            
        </div>

        
        <h6 className="accordion-title">Activities</h6>
        <div className="accordion-body">
            
        </div>
        <h6 className="accordion-title">Proposals</h6>
        <div className="accordion-body">
            
        </div>
    </div>  */}
         
{/*  

    <div className="tab-pane show active pd-20 pd-xl-25">
        <div className="d-flex align-items-center justify-content-between mg-b-25">
        <h6 className="mg-b-0">Contact Information</h6>
        <div className="d-flex">
        <a href="#modalEditContact" data-toggle="modal" className="btn btn-sm btn-white d-flex align-items-center mg-r-5"><i data-feather="edit-2"></i><span className="d-none d-sm-inline mg-l-5"> Edit</span></a>
        <a href="#modalDeleteContact" data-toggle="modal" className="btn btn-sm btn-white d-flex align-items-center"><i data-feather="trash"></i><span className="d-none d-sm-inline mg-l-5"> Delete</span></a>
        </div>
    </div>

    <div className="row">
        <div className="col-12 col-sm-6">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Firstname</label>
        <p className="mg-b-0">Abigail</p>
        </div>
        <div className="col-6 col-sm">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Middlename</label>
        <p className="mg-b-0">Christensen</p>
        </div>
        <div className="col-sm mg-t-20 mg-sm-t-0">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Lastname</label>
        <p className="mg-b-0">Johnson</p>
        </div>
    </div>

    <h6 className="mg-t-40 mg-b-20">Contact Details</h6>

    <div className="row row-sm">
        <div className="col-6 col-sm-4">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Mobile Phone</label>
        <p className="tx-primary tx-rubik mg-b-0">+1 290 912 3868</p>
        </div>
        <div className="col-6 col-sm-4">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Home Phone</label>
        <p className="tx-primary tx-rubik mg-b-0">+1 011 342 3129</p>
        </div>
        <div className="col-6 col-sm-4 mg-t-20 mg-sm-t-0">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Work Phone</label>
        <p className="tx-primary tx-rubik mg-b-0">+1 100 003 3344</p>
        </div>
        <div className="col-sm-4 mg-t-20 mg-sm-t-30">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Email Address</label>
        <p className="tx-primary mg-b-0">me@themepixels.me</p>
        </div>
        <div className="col-sm-4 mg-t-20 mg-sm-t-30">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Company</label>
        <p className="mg-b-0">ThemePixels, Inc.</p>
        </div>
        <div className="col-sm-4 mg-t-20 mg-sm-t-30">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Job Position</label>
        <p className="mg-b-0">President &amp; CEO</p>
        </div>
        <div className="col-sm-6 mg-t-20 mg-sm-t-30">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Home Address</label>
        <p className="mg-b-0">4658 Kenwood Place<br/>Pompano Beach, FL 33060, United States</p>
        </div>
        <div className="col-sm-6 mg-t-20 mg-sm-t-30">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Work Address</label>
        <p className="mg-b-0">819 Waldeck Street<br/>Farmers Branch, TX 75244, United States</p>
        </div>
        <div className="col-sm-6 mg-t-20 mg-sm-t-30">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Personal Website</label>
        <p className="tx-primary mg-b-0">http://themepixels.me/</p>
        </div>
        <div className="col-sm-6 mg-t-20 mg-sm-t-30">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Social Profiles</label>
        <nav className="nav nav-social">
            <a href="" className="nav-link"><i data-feather="facebook"></i></a>
            <a href="" className="nav-link"><i data-feather="twitter"></i></a>
            <a href="" className="nav-link"><i data-feather="instagram"></i></a>
            <a href="" className="nav-link"><i data-feather="github"></i></a>
        </nav>
        </div>
        <div className="col-sm mg-t-20 mg-sm-t-30">
        <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Notes</label>
        <p className="tx-13 mg-b-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
    </div>
    </div>
    <div id="contactLogs" className="tab-pane pd-20 pd-xl-25">
    <div className="d-flex align-items-center justify-content-between mg-b-30">
        <h6 className="tx-15 mg-b-0">Call &amp; Message Logs</h6>
        <a href="#" className="btn btn-sm btn-white d-flex align-items-center"><i className="icon ion-md-time mg-r-5 tx-16 lh--9"></i> Clear History</a>
    </div>
    </div> */}
</div>





        </>
    )
}

export default SalesLead;