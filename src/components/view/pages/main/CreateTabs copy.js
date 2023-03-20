

const CreateTabs = (arrays, stateTab, setStateTab) => { 
  let htmlTabs;
  if (!arrays || arrays.length < 1) {
    htmlTabs = <li className="nav-item">No data</li>
  } else {
    htmlTabs = arrays.map((arr) => {
      const activTab = arr[0][1] === "active" ? "active" : "";
      const sysTitle = arr[0][0].toLowerCase().replace(/\W/ig, "");
      if (arr.length < 2) {
        return (
          <li className="nav-item" key={sysTitle}>
            <a className={`nav-link ${activTab}`}
                data-toggle="tab" 
                href={`#${sysTitle}`}
                aria-controls={sysTitle}
                onClick={()=>setStateTab([`${arr[0][0]}`, `${sysTitle}`])}> {arr[0][0]} </a>
          </li>
        )
      } else {
        const subTab = arr[1].map((element) => {
          const sysTitleElement = element.toLowerCase().replace(/\W/ig, "");
              return (
                  <a className="dropdown-item" 
                      key={sysTitleElement} 
                      href={`#${sysTitleElement}`} 
                      data-toggle="tab" 
                      aria-controls={sysTitleElement}
                      onClick={()=>setStateTab([`${arr[0][0]}`, `${element}`])}> {element} </a>
              )
          }
        )
        return(
          <li className="nav-item dropdown" key={sysTitle}>
            <a className={`nav-link dropdown-toggle ${activTab}`}  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                {stateTab[0] === arr[0][0] ? <>{arr[0][0]} / {stateTab[1]}</> : arr[0][0]}
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
    <ul className="nav nav-tabs" >
      { htmlTabs }
    </ul>
  )
}

export default CreateTabs;