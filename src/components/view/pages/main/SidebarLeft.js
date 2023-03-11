

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFilter, faArrowDownShortWide, faSearch } from '@fortawesome/free-solid-svg-icons'


const SidebarLeft = () => {

  return(
    <div className="contact-sidebar">
      <div className="choice-workspace">
          <div className="btn-group w-100 mr-1" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-outline-info btn-xs w-50">SALES</button>
              <button type="button" className="btn btn-success btn-xs w-50">JOBS</button>
          </div>
          <FontAwesomeIcon icon={faArrowRight} size='2xs' opacity={0.2}/>
          <button type="button" className="btn btn-primary btn-xs w-100 ml-1">NEW JOB</button>
      </div>
      {/* <div className="new-project">
          <button type="button" className="btn btn-primary btn-xs w-100">NEW JOB</button>
      </div> */}
      <div className="contact-sidebar-header">    
          <FontAwesomeIcon icon={faSearch} size='sm'/>
          <div className="search-form">
              <input type="search" className="form-control" placeholder="Search..."/>
          </div>
          <a href="#modalFilter" className="filter" data-toggle="modal" title="search filter">
              <FontAwesomeIcon icon={faFilter} size='sm'/>
          </a>
          <a href="#modalSort" className="filter" data-toggle="modal" title="sorting">
              <FontAwesomeIcon icon={faArrowDownShortWide} size='sm'/>
          </a>
      </div>

      <div className="contact-sidebar-body">
        <div className="tab-content">
            <div id="tabProject" className="tab-pane fade active show">
            <div className="contact-list">
                {/* <label id="contactA" className="contact-list-divider">A</label> */}
                <div className="media">
                    <div className="avatar avatar-sm avatar-online"><span className="avatar-initial rounded-circle bg-gray-700">A</span></div>
                    <div className="media-body mg-l-10">
                        <h6 className="tx-13 mg-b-3">Abigail Johnson</h6>
                        <span className="tx-12">+1-234-567-890</span>
                    </div>
                    <nav>
                        <a href=""><i data-feather="star"></i></a>
                        <a href=""><i data-feather="edit-2"></i></a>
                    </nav>
                </div>

                
                <div className="media">
                <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500" className="rounded-circle" alt=""/></div>
                <div className="media-body mg-l-10">
                    <h6 className="tx-13 mg-b-3">Archie Cantones</h6>
                    <span className="tx-12">archie@cantones.com</span>
                </div>
                <nav>
                    <a href=""><i data-feather="star"></i></a>
                    <a href=""><i data-feather="edit-2"></i></a>
                </nav>
                </div>

            </div>
            </div>


            {/* <div id="tabPhoneCall" className="tab-pane fade">
            <div className="pd-y-20 pd-x-10 contact-list">
                <label className="contact-list-divider">Recently Contacted</label>
                <div className="media">
                <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500" className="rounded-circle" alt=""/></div>
                <div className="media-body mg-l-10">
                    <h6 className="tx-13 mg-b-3">Camille Audrey</h6>
                    <span className="tx-12">+1-234-567-890</span>
                </div>
                <nav>
                    <a href=""><i data-feather="star"></i></a>
                    <a href=""><i data-feather="edit-2"></i></a>
                </nav>
                </div> 
            </div>
            </div> */}

        </div>
      </div>
    </div>
  )
}

export default SidebarLeft;