import {Link, NavLink, useLocation} from 'react-router-dom';

import './header.scss';
import '../../../resources/assets/css/dashforge.css';
import '../../../resources/lib/@fortawesome/fontawesome-free/css/all.css'; 

const Header = () => { 

    let { pathname } = useLocation(); 

    const setClassExactlyPath = (path) => (pathname === path ? ' active' : '');
    const setClassIncludingPath = (path) => (pathname.match(path) ? ' active' : '');
    const createNavSubLink = (link, icon, text) => {
        return (
            <li className="nav-sub-item">
                <NavLink className="nav-sub-link" to={link}>
                    <i data-feather={icon}></i> {text}
                </NavLink>
            </li>
        )
    }

    

    return (
        <> 
        <header className="navbar navbar-header navbar-header-fixed">
            <a href="" id="mainMenuOpen" className="burger-menu"><i data-feather="menu"></i></a>
            <a href="" id="contactContentHide" className="burger-menu d-none"><i data-feather="arrow-left"></i></a>
            {/* <div className="navbar-brand">
                <a href="/" className="df-logo">dash<span>forge</span></a>
            </div> */}
    
            <div id="navbarMenu" className="navbar-menu-wrapper">
                <div className="navbar-menu-header">
                <a href="/" className="df-logo">dash<span>forge</span></a>
                <a id="mainMenuClose" href=""><i data-feather="x"></i></a>
                </div> 
                <ul className="nav navbar-menu">
                <li className="nav-label pd-l-20 pd-lg-l-25 d-lg-none">Main Navigation</li>  
                <li className={'nav-item' + setClassExactlyPath("/")}> 
                    <NavLink className="nav-link" to="/">
                            <i data-feather="home"></i> <i className='fa fa-home homepic'></i> 
                            <span className='hometxt'> Home</span> 
                    </NavLink> 
                </li>
                <li className={'nav-item with-sub' + setClassIncludingPath("/summary/")} >
                    <a href="#" className="nav-link"><i data-feather="layers"></i> Summary List</a>
                    <div className="navbar-menu-sub">
                    <div className="d-lg-flex">
                        <ul>
                            <li className="nav-label">Sales</li>
                            {createNavSubLink('/summary/lead/opportunities', 'users', 'Lead Opportunities')}
                            {createNavSubLink('/summary/lead/activities', 'user-plus', 'Lead Activities')}
                            {createNavSubLink('/summary/lead/proposals', 'user-check', 'Lead Proposals')}
                        </ul>
                        <ul>
                            <li className="nav-label">Jobs</li>
                            {createNavSubLink('/summary/jobs/list', 'list', 'Jobs List')}
                            {createNavSubLink('/summary/jobs/map', 'map-pin', 'Jobs Map')}
                        </ul>
                        <ul>
                            <li className="nav-label">Files</li>
                            {createNavSubLink('/summary/files/documents', 'archive', 'Documents')}
                            {createNavSubLink('/summary/files/photos', 'image', 'Photos')}
                            {createNavSubLink('/summary/files/videos', 'film', 'Videos')}
                        </ul>
                        <ul>
                            <li className="nav-label">Invoices</li>
                            {createNavSubLink('/summary/invoices/owner', 'file-text', 'Owner Invoices')} 
                        </ul>
                    </div>
                    </div> 
                </li>
                <li className={'nav-item with-sub' + setClassIncludingPath("/projects/")}>
                    <a href="#" className="nav-link"><i data-feather="package"></i> Projects Management</a>
                    <div className="navbar-menu-sub">
                    <div className="d-lg-flex">
                        <ul>
                        <li className="nav-label">Control</li>
                        {createNavSubLink('/projects/control/schedule', 'calendar', 'Schedule')}
                        {createNavSubLink('/projects/control/time', 'clock', 'Time Clock')} 
                        {createNavSubLink('/projects/control/logs', 'list', 'Daily Logs')} 
                        </ul>
                        <ul>
                        <li className="nav-label">Messaging</li>
                        {createNavSubLink('/projects/messaging/comments', 'message-square', 'Comments')}
                        {createNavSubLink('/projects/messaging/messages', 'message-circle', 'Messages')}
                        {createNavSubLink('/projects/messaging/notifications', 'bell', 'Notifications')}
                        </ul>
                        <ul>
                        <li className="nav-label">Financial</li>
                        {createNavSubLink('/projects/financial/budget', 'dollar-sign', 'Budget')}
                        {createNavSubLink('/projects/financial/bills', 'credit-card', 'Bills')}
                        </ul>
                    </div>
                    </div> 
                </li>

                </ul>
            </div> 
            
            <div className="navbar-right">
                <a id="navbarSearch" href="" className="search-link"><i data-feather="search"></i></a>
                <div className="dropdown dropdown-message">
                <a href="" className="dropdown-link new-indicator" data-toggle="dropdown">
                    <i data-feather="message-square"></i>
                    <span>5</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-header">New Messages</div>
                    <a href="" className="dropdown-item">
                    <div className="media">
                        <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/350" className="rounded-circle" alt=""/></div>
                        <div className="media-body mg-l-15">
                        <strong>Socrates Itumay</strong>
                        <p>nam libero tempore cum so...</p>
                        <span>Mar 15 12:32pm</span>
                        </div> 
                    </div> 
                    </a>
                    <a href="" className="dropdown-item">
                    <div className="media">
                        <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500" className="rounded-circle" alt=""/></div>
                        <div className="media-body mg-l-15">
                        <strong>Joyce Chua</strong>
                        <p>on the other hand we denounce...</p>
                        <span>Mar 13 04:16am</span>
                        </div> 
                    </div> 
                    </a>
                    <a href="" className="dropdown-item">
                    <div className="media">
                        <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/600" className="rounded-circle" alt=""/></div>
                        <div className="media-body mg-l-15">
                        <strong>Althea Cabardo</strong>
                        <p>is there anyone who loves...</p>
                        <span>Mar 13 02:56am</span>
                        </div> 
                    </div> 
                    </a>
                    <a href="" className="dropdown-item">
                    <div className="media">
                        <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500" className="rounded-circle" alt=""/></div>
                        <div className="media-body mg-l-15">
                        <strong>Adrian Monino</strong>
                        <p>duis aute irure dolor in repre...</p>
                        <span>Mar 12 10:40pm</span>
                        </div>
                    </div>
                    </a>
                    <div className="dropdown-footer"><a href="">View all Messages</a></div>
                </div>
                </div>
                <div className="dropdown dropdown-notification">
                <a href="" className="dropdown-link new-indicator" data-toggle="dropdown">
                    <i data-feather="bell"></i>
                    <span>2</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-header">Notifications</div>
                    <a href="" className="dropdown-item">
                    <div className="media">
                        <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/350" className="rounded-circle" alt=""/></div>
                        <div className="media-body mg-l-15">
                        <p>Congratulate <strong>Socrates Itumay</strong> for work anniversaries</p>
                        <span>Mar 15 12:32pm</span>
                        </div>
                    </div>
                    </a>
                    <a href="" className="dropdown-item">
                    <div className="media">
                        <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500" className="rounded-circle" alt=""/></div>
                        <div className="media-body mg-l-15">
                        <p><strong>Joyce Chua</strong> just created a new blog post</p>
                        <span>Mar 13 04:16am</span>
                        </div>
                    </div>
                    </a>
                    <a href="" className="dropdown-item">
                    <div className="media">
                        <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/600" className="rounded-circle" alt=""/></div>
                        <div className="media-body mg-l-15">
                        <p><strong>Althea Cabardo</strong> just created a new blog post</p>
                        <span>Mar 13 02:56am</span>
                        </div>
                    </div>
                    </a>
                    <a href="" className="dropdown-item">
                    <div className="media">
                        <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500" className="rounded-circle" alt=""/></div>
                        <div className="media-body mg-l-15">
                        <p><strong>Adrian Monino</strong> added new comment on your photo</p>
                        <span>Mar 12 10:40pm</span>
                        </div>
                    </div>
                    </a>
                    <div className="dropdown-footer"><a href="">View all Notifications</a></div>
                </div>
                </div>
                <div className="dropdown dropdown-profile">
                <a href="" className="dropdown-link" data-toggle="dropdown" data-display="static">
                    <div className="avatar avatar-sm"><img src="https://via.placeholder.com/500" className="rounded-circle" alt=""/></div>
                </a>
                <div className="dropdown-menu dropdown-menu-right tx-13">
                    <div className="avatar avatar-lg mg-b-15"><img src="https://via.placeholder.com/500" className="rounded-circle" alt=""/></div>
                    <h6 className="tx-semibold mg-b-5">Katherine Pechon</h6>
                    <p className="mg-b-25 tx-12 tx-color-03">Administrator</p>

                    <a href="" className="dropdown-item"><i data-feather="edit-3"></i> Edit Profile</a>
                    <a href="page-profile-view.html" className="dropdown-item"><i data-feather="user"></i> View Profile</a>
                    <div className="dropdown-divider"></div>
                    <a href="page-help-center.html" className="dropdown-item"><i data-feather="help-circle"></i> Help Center</a>
                    <a href="" className="dropdown-item"><i data-feather="life-buoy"></i> Forum</a>
                    <a href="" className="dropdown-item"><i data-feather="settings"></i>Account Settings</a>
                    <a href="" className="dropdown-item"><i data-feather="settings"></i>Privacy Settings</a>
                    <a href="page-signin.html" className="dropdown-item"><i data-feather="log-out"></i>Sign Out</a>
                </div>
                </div>
            </div> 
            <div className="navbar-search">
                <div className="navbar-search-header">
                <input type="search" className="form-control" placeholder="Type and hit enter to search..."/>
                <button className="btn"><i data-feather="search"></i></button>
                <a id="navbarSearchClose" href="" className="link-03 mg-l-5 mg-lg-l-10"><i data-feather="x"></i></a>
                </div>
                <div className="navbar-search-body">
                <label className="tx-10 tx-medium tx-uppercase tx-spacing-1 tx-color-03 mg-b-10 d-flex align-items-center">Recent Searches</label>
                <ul className="list-unstyled">
                    <li><a href="dashboard-one.html">modern dashboard</a></li>
                    <li><a href="app-calendar.html">calendar app</a></li>
                    <li><a href="../../collections/modal.html">modal examples</a></li>
                    <li><a href="../../components/el-avatar.html">avatar</a></li>
                </ul>

                <hr className="mg-y-30 bd-0"/>

                <label className="tx-10 tx-medium tx-uppercase tx-spacing-1 tx-color-03 mg-b-10 d-flex align-items-center">Search Suggestions</label>

                <ul className="list-unstyled">
                    <li><a href="dashboard-one.html">cryptocurrency</a></li>
                    <li><a href="app-calendar.html">button groups</a></li>
                    <li><a href="../../collections/modal.html">form elements</a></li>
                    <li><a href="../../components/el-avatar.html">contact app</a></li>
                </ul>
                </div> 
            </div> 
        
        </header> 
        </>
        
    )
}

export default Header;