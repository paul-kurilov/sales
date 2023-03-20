import { TabRoutes, ContentRoutes } from "./ContentRoutes";

const Content = () => {

  return(
    <div className="contact-content">  
      <div className="contact-content-title">
          Name of Some Project
      </div>

      <div className="contact-content-header">

      { <TabRoutes/> }

          {/* <nav className="nav ">
              <a href="#contactInformation" className="nav-link active" data-toggle="tab">Contact Info<span>rmation</span></a>
              <a href="#contactLogs" className="nav-link" data-toggle="tab"><span>Call &amp; Message </span>Logs</a>
          </nav> */}
          <a href="" id="contactOptions" className="text-secondary mg-l-auto d-xl-none"><i data-feather="more-horizontal"></i></a>
      </div>

      <div className="contact-content-body">
          <div className="tab-content  bd-t-0 pd-20" id="myTabContent">
              <div className="tab-pane fade show active"> 
                { <ContentRoutes/> }
              </div> 
          </div>


          
      </div>

      <div className="contact-content-sidebar">
      <div className="clearfix mg-b-25">
          <div id="contactAvatar" className="pos-relative float-left">
          <div className="avatar avatar-xl"><span className="avatar-initial rounded-circle bg-gray-700 tx-normal">A</span></div>
          <a href="" className="contact-edit-photo" data-toggle="tooltip" title="Upload Photo"><i data-feather="edit-2"></i></a>
          </div>
      </div>
      <h5 id="contactName" className="tx-18 tx-xl-20 mg-b-5">Abigail Johnson</h5>
      <p className="tx-13 tx-lg-12 tx-xl-13 tx-color-03 mg-b-20">President &amp; CEO - ThemePixels, Inc.</p>
      <nav className="contact-call-nav mg-b-20">
          <a href="#" className="nav-call" data-toggle="tooltip" title="Make a Phone Call"><i data-feather="phone"></i></a>
          <a href="#" className="nav-video" data-toggle="tooltip" title="Make a Video Call"><i data-feather="video"></i></a>
          <a href="#" className="nav-msg" data-toggle="tooltip" title="Send Message"><i data-feather="message-square"></i></a>
      </nav>

      <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Biography</label>
      <p className="tx-13 mg-b-0">Gambler, Tea Drinker, Ultimate Piggie, Replacement President of a Major Soft Drink Manufacturer. When I give out candies, I give people the flavour I don't like. </p>

      <hr className="mg-y-20"/>

      <label className="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-15">Options</label>
      <nav className="nav flex-column contact-content-nav mg-b-25">
          <a href="" className="nav-link"><i data-feather="share"></i> Share this Contact</a>
          <a href="" className="nav-link"><i data-feather="star"></i> Add to Favorites</a>
          <a href="" className="nav-link"><i data-feather="slash"></i> Block this Contact</a>
      </nav>

      </div>
    </div>
  )
}

export default Content;