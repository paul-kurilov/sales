import { useState } from "react";

const Content = () => {
  const [selectedTab, setSelectedTab] = useState([]);
  
  const createTab = (title, subtabs) => { 
      const activTab = title[1] === "active" ? "active" : "";
      let cTab = '';
      if (!subtabs) {
          const sysTitle = title[0].toLowerCase().replace(/\W/ig, "_");
          cTab =  
          <li className="nav-item">
              <a className={`nav-link ${activTab}`}
                  key={sysTitle}
                  data-toggle="tab" 
                  href={`#${sysTitle}`}
                  aria-controls={sysTitle}
                  onClick={()=>setSelectedTab([`${title[0]}`, `${sysTitle}`])}> {title[0]} </a>
          </li>
      } else {
          const subTab = subtabs.map((element) => {
              const sysTitle = element.toLowerCase().replace(/\W/ig, "_");
                  return (
                      <a className="dropdown-item" 
                          key={sysTitle} 
                          href={`#${sysTitle}`} 
                          data-toggle="tab" 
                          aria-controls={sysTitle}
                          onClick={()=>setSelectedTab([`${title[0]}`, `${element}`])}> {element} </a>
                  )
              }
          );
          cTab =
          <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle ${activTab}`} data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                  {selectedTab[0] === title[0] ? <>{title[0]} / {selectedTab[1]}</> : title[0]}
              </a>
              <div className="dropdown-menu">
                  { subTab }
              </div>
          </li>
      }
      return (
          <> { cTab } </>
      )
  }




  const setTabs = (arrays) => { 
    let htmlTabs;
    if (!arrays || arrays.length < 1) {
      htmlTabs = <li className="nav-item">No data</li>
    } else {
      htmlTabs = arrays.map((arr) => {
        const activTab = arr[0][1] === "active" ? "active" : "";
        const sysTitle = arr[0][0].toLowerCase().replace(/\W/ig, "");
        if (arr.length < 2) {
          return (
            <li className="nav-item">
              <a className={`nav-link ${activTab}`}
                  key={sysTitle}
                  data-toggle="tab" 
                  href={`#${sysTitle}`}
                  aria-controls={sysTitle}
                  onClick={()=>setSelectedTab([`${arr[0][0]}`, `${sysTitle}`])}> {arr[0][0]} </a>
            </li>
          )
        } else {
          const subTab = arr[1].map((element) => {
            const sysTitle = element.toLowerCase().replace(/\W/ig, "");
                return (
                    <a className="dropdown-item" 
                        key={sysTitle} 
                        href={`#${sysTitle}`} 
                        data-toggle="tab" 
                        aria-controls={sysTitle}
                        onClick={()=>setSelectedTab([`${arr[0][0]}`, `${element}`])}> {element} </a>
                )
            }
          )
          return(
            <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle ${activTab}`} data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                  {selectedTab[0] === arr[0][0] ? <>{arr[0][0]} / {selectedTab[1]}</> : arr[0][0]}
              </a>
              <div className="dropdown-menu">
                  { subTab }
              </div>
            </li>
          )
        } 
      })
    }
 
    return (
      <ul className="nav nav-tabs">
        { htmlTabs }
      </ul>
    )
  }


  return(
    <div className="contact-content">  
      <div className="contact-content-title">
          Name of Some Project
      </div>

      <div className="contact-content-header">

        {
          setTabs([
            [["Job", "active"]],
            [["Files", "noactive"], ["Documents", "Photos", "Videos"]],
            [["Control", "noactive"], ["Schedule", "Time Clock", "Daily Logs"]]  
          ])
        }

{/* 
          <ul className="nav nav-tabs">  
              { createTab(["Job", "active"]) }
              { createTab(["Files", "noactive"], ["Documents", "Photos", "Videos"]) }
              { createTab(["Control", "noactive"], ["Schedule", "Time Clock", "Videos"]) }
          </ul> */}

          {/* <nav className="nav ">
              <a href="#contactInformation" className="nav-link active" data-toggle="tab">Contact Info<span>rmation</span></a>
              <a href="#contactLogs" className="nav-link" data-toggle="tab"><span>Call &amp; Message </span>Logs</a>
          </nav> */}

          <a href="" id="contactOptions" className="text-secondary mg-l-auto d-xl-none"><i data-feather="more-horizontal"></i></a>
      </div>

      <div className="contact-content-body">
          <div className="tab-content  bd-t-0 pd-20" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <h6>Home</h6>
                  <p>...</p>
              </div>
              <div className="tab-pane fade" id="job" role="tabpanel" aria-labelledby="profile-tab">
                  <h6>job</h6>
                  <p>...</p>
              </div>
              <div className="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="contact-tab">
                  <h6>documents</h6>
                  <p>...</p>
              </div>
              <div className="tab-pane fade" id="schedule" role="tabpanel" aria-labelledby="contact-tab">
                  <h6>schedule</h6>
                  <p>...</p>
              </div>
              <div className="tab-pane fade" id="timeclock" role="tabpanel" aria-labelledby="contact-tab">
                  <h6>timeclock</h6>
                  <p>...</p>
              </div>
              <div className="tab-pane fade" id="dailylogs" role="tabpanel" aria-labelledby="contact-tab">
                  <h6>dailylogs</h6>
                  <p>...</p>
              </div>
          </div>
          {/* <div className="tab-content">

              <div id="contactInformation" className="tab-pane show active pd-20 pd-xl-25">
              <div className="d-flex align-items-center justify-content-between mg-b-25">
                  <h6 className="mg-b-0">Personal Details</h6>
                  <div className="d-flex">
                  <a href="#modalEditContact" data-toggle="modal" className="btn btn-sm btn-white d-flex align-items-center mg-r-5"><i data-feather="edit-2"></i><span className="d-none d-sm-inline mg-l-5"> Edit</span></a>
                  <a href="#modalDeleteContact" data-toggle="modal" className="btn btn-sm btn-white d-flex align-items-center"><i data-feather="trash"></i><span className="d-none d-sm-inline mg-l-5"> Delete</span></a>
                  </div>
              </div>

              <div className="row">
                  <div className="col-6 col-sm">
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
              </div>
          </div> */}
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