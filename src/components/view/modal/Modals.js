import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModals, setModal } from "../../../redux/reducers/mainReducer";
import PerfectScrollbar from 'perfect-scrollbar';

import CreateNewContact from "./CreateNewContact";
import LeadActivity from "./LeadActivity";
import Proposal from "./Proposal";


const Modals = () => {
  const dispatch = useDispatch();
  const wsModals = useSelector((state) => state.workspace.modals);
  const wsModal = useSelector((state) => state.workspace.modal);

  const modalBuilding = (modals) => { 
    const handleHide = (close) => {
      const newModals = wsModals.filter((item) => item[0] !== close);
      dispatch(setModals(newModals));
      dispatch(setModal([]));
    };
    const wrapper = (Component, item) => {
      return (
        <div className="modal" key={item[0]} id={`openModal_${item[0]}`} tabIndex="-1" role="dialog" aria-hidden="true" 
            onClick={(e) => { 
                if (e.target.className === `modal`) { handleHide(item[0]) }
              }
            }>
            <div className={`modal-dialog modal-dialog-centered ${item[1]}`} role="document">
              <Component close={()=>{handleHide(item[0])}} />
            </div>
        </div> 
      )
    }

    const res = modals.map((item) => {
      switch (item[0]) {
        case "CreateNewContact": return (wrapper(CreateNewContact, item))
        case "LeadActivity": return (wrapper(LeadActivity, item))
        case "Proposal": return (wrapper(Proposal, item))
        default: break; 
      }
    }) 

    return (
      <>
        {res}
      </>
    )
  }


  useEffect(() => { 
    if (wsModal[0]) {
      let addModal = [...wsModals];
      const foundArrayIndex = wsModals.findIndex(arr => arr[0] === wsModal[0]);
      if (foundArrayIndex < 0) { 
        addModal.push([wsModal[0], wsModal[1]]);
        dispatch(setModals(addModal));
      } 
    } 
  },[wsModal[0]])

 
  useEffect(() => {
    const elements = document.querySelectorAll('.modal-body.mb-scroll'); // .modal-body.mb-scroll, .modal-scroll-content
    elements.forEach(element => {
      new PerfectScrollbar(element, {
        suppressScrollX: true
      });
    });    
  }, [wsModals]);

  return (
    <> 
      {modalBuilding(wsModals)} 
    </>
  )
}

export default Modals;