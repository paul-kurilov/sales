
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



{/* 
          <ul className="nav nav-tabs">  
              { createTab(["Job", "active"]) }
              { createTab(["Files", "noactive"], ["Documents", "Photos", "Videos"]) }
              { createTab(["Control", "noactive"], ["Schedule", "Time Clock", "Videos"]) }
          </ul> */}