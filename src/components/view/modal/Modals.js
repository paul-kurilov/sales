import { lazy } from "react";
import { useSelector } from "react-redux";

import CreateNewContact from "./CreateNewContact";
import AddLeadActivity from "./AddLeadActivity";


const Modals = () => {
  const wsModal = useSelector((state) => state.workspace.modal);

  let modalBuilding;
  switch (wsModal[0]) {
    case "CreateNewContact": modalBuilding = <CreateNewContact/>; break;
    case "AddLeadActivity": modalBuilding = <AddLeadActivity/>; break;
    default: break; 
  }

  return (
    <> 
        <div className="modal" id="openModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className={`modal-dialog modal-dialog-centered ${wsModal[1]}`} role="document">
                { modalBuilding }

                {/* <div className="modal-content tx-14">
                  <div className="modal-header">
                      <h6 className="modal-title">Customer Contact</h6>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div className="modal-body">

                    
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary btn-xs" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary btn-xs">Save changes</button>
                  </div>
                </div> */}

            </div>
        </div>
    </>
  )
}

export default Modals;