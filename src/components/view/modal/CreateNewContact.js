

const CreateNewContact = () => {

  return(
    <div className="modal-content tx-14">
      <div className="modal-header">
          <h5 className="modal-title font-weight-bold">Customer Contact</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div className="modal-body">


          <form>
            <div className="df-title df-title-left" data-label="Contact Information">
              <div className="row">
                <div className="col-12 col-sm-3 col-lg-2 d-flex justify-content-center align-items-center">
                  <div className="avatar avatar-xxl mt-2">
                    <img src="https://shapka-youtube.ru/wp-content/uploads/2021/05/prikolnaya-avatarka-dlya-igr.jpg" className="rounded-circle" alt=""/>
                  </div>
                </div>
                <div className="col-12 col-sm-9 col-lg-10">
                    <div className="form-row">
                        <div className="form-group col-6">
                            <label className="small font-weight-bold">First Name</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-group col-6">
                            <label className="small font-weight-bold">Last Name</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-group col-12">
                            <label className="small font-weight-bold">Display Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-row">
                        <div className="form-group col-7 col-lg-4 order-1">
                            <label className="small font-weight-bold">Street Address</label>
                            <input type="text" className="form-control" placeholder=""/>
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
                <div className="col-12">
                    <div className="form-row">
                        <div className="form-group col-6 col-lg-4">
                            <label className="small font-weight-bold">Phone</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-group col-6 col-lg-4">
                            <label className="small font-weight-bold">Cell Phone</label>
                            <input type="text" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-group col-12 col-lg-4">
                            <label className="small font-weight-bold">Email <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder=""/>
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

export default CreateNewContact;