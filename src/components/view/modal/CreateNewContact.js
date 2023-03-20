

const CreateNewContact = () => {

  return(
    <div className="modal-content tx-14">
      <div className="modal-header">
          <h6 className="modal-title">Customer Contact</h6>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div className="modal-body">


      </div>
      <div className="modal-footer">
          {/* <button type="button" className="btn btn-secondary btn-xs" data-dismiss="modal">Close</button> */}
          <button type="button" className="btn btn-primary btn-xs">Save</button>
      </div>
    </div>
  )
}

export default CreateNewContact;