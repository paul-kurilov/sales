import { Helmet, HelmetProvider } from "react-helmet-async";
 


const FilesDocuments = () => {

    return(
        <> 
        <HelmetProvider>
            <Helmet>
                <meta
                    name="description"
                    content="FilesDocuments information portal"
                    />
                <title>FilesDocuments </title>
                {/* <body className="app-contact"/> */}
                <body className="app-filemgr"/>
            </Helmet> 
        </HelmetProvider>  
       
<div className="tab-content">
     
    <div className="row">
        <div className="col-12">
        
            <div className="df-title df-title-left pt-2" data-label="Files Documents">        
                <div className="row ">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between mg-b-15 mg-t-0">
                            <h6 className="mg-b-0"></h6>
                            <div className="d-flex">
                                <button href="#" className="btn btn-primary btn-xs mr-2">Create Folder</button>
                            </div>
                        </div> 
 
                        


 
                        <label className="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Folders</label>
                        <div className="row row-xs">
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="media media-folder">
                            <i data-feather="folder"></i>
                            <div className="media-body">
                                <h6><a href="" className="link-02">Downloads</a></h6>
                                <span>2 files, 14.05mb</span>
                            </div>
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mg-t-10 mg-sm-t-0">
                            <div className="media media-folder">
                            <i data-feather="folder"></i>
                            <div className="media-body">
                                <h6><a href="" className="link-02">Personal Stuff</a></h6>
                                <span>8 files, 76.3mb</span>
                            </div>
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mg-t-10 mg-lg-t-0">
                            <div className="media media-folder">
                            <i data-feather="folder"></i>
                            <div className="media-body">
                                <h6><a href="" className="link-02">3D Objects</a></h6>
                                <span>5 files, 126.3mb</span>
                            </div>
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mg-t-10 mg-xl-t-0">
                            <div className="media media-folder">
                            <i data-feather="folder"></i>
                            <div className="media-body">
                                <h6><a href="" className="link-02">Recordings</a></h6>
                                <span>0 files</span>
                            </div>
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3 mg-t-10">
                            <div className="media media-folder">
                            <i data-feather="folder"></i>
                            <div className="media-body">
                                <h6><a href="" className="link-02">Support</a></h6>
                                <span>1 file, 20mb</span>
                            </div>
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <hr className="mg-y-40 bd-0"/>
                        <label className="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Files</label>
                        <div className="row row-xs">
                        <div className="col-6 col-sm-4 col-md-3 col-xl">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-primary">
                                <i className="far fa-file-word"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">Job Requirements.docx</a></h6>
                                <p>Word Document</p>
                                <span>10.45kb</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-orange">
                                <i className="far fa-file-powerpoint"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">My Presentation.ppt</a></h6>
                                <p>Presentation File</p>
                                <span>135kb</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10 mg-sm-t-0">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-success">
                                <i className="far fa-file-excel"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">Inventory.xls</a></h6>
                                <p>Spreadsheet File</p>
                                <span>22.67kb</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10 mg-md-t-0">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-danger">
                                <i className="far fa-file-pdf"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">GettingStarted.pdf</a></h6>
                                <p>PDF File</p>
                                <span>94kb</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10 mg-xl-t-0">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-success">
                                <i className="far fa-file-excel"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">Financial_Final.xls</a></h6>
                                <p>Spreadsheet File</p>
                                <span>61.1kb</span>
                            </div>
                            </div>
                        </div>
                        <div className="d-none d-xl-block wd-100p ht-10"></div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-indigo">
                                <i className="far fa-file-image"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">DesignMockup.psd</a></h6>
                                <p>Photoshop File</p>
                                <span>105.4mb</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-gray-600">
                                <i className="far fa-file-alt"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">Instructions.txt</a></h6>
                                <p>Text Document</p>
                                <span>43.9kb</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-primary">
                                <i className="far fa-file-word"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">Journal.docx</a></h6>
                                <p>Word Document</p>
                                <span>33.4kb</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-info">
                                <i className="far fa-file-audio"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">MusicTwo.mp3</a></h6>
                                <p>Mp3 File</p>
                                <span>4.1mb</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-gray-600">
                                <i className="far fa-file-alt"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">ReadMe.txt</a></h6>
                                <p>Text Document</p>
                                <span>43.9kb</span>
                            </div>
                            </div>
                        </div>
                        <div className="d-none d-xl-block wd-100p ht-10"></div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-pink">
                                <i className="far fa-file-video"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">MiniMovie.mp4</a></h6>
                                <p>MP4 File</p>
                                <span>22.2mb</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-orange">
                                <i className="far fa-file-code"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">home.html</a></h6>
                                <p>HTML Document</p>
                                <span>43.9kb</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-primary">
                                <i className="far fa-file-code"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">style.css</a></h6>
                                <p>CSS File</p>
                                <span>43.9kb</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                            <div className="card card-file">
                            <div className="dropdown-file">
                                <a href="" className="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a href="#modalViewDetails" data-toggle="modal" className="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                <a href="" className="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                <a href="#modalShare" data-toggle="modal" className="dropdown-item share"><i data-feather="share"></i>Share</a>
                                <a href="" className="dropdown-item download"><i data-feather="download"></i>Download</a>
                                <a href="#modalCopy" data-toggle="modal" className="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                <a href="#modalMove" data-toggle="modal" className="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                <a href="#" className="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                <a href="#" className="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                </div>
                            </div>
                            <div className="card-file-thumb tx-purple">
                                <i className="far fa-file-code"></i>
                            </div>
                            <div className="card-body">
                                <h6><a href="" className="link-02">package.json</a></h6>
                                <p>JSON File</p>
                                <span>2.3kb</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
                        </div>
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

export default FilesDocuments;