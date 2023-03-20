import { useDispatch } from "react-redux";

const CreateTabs = (arrays, stateTab, setStateTab) => { 
  const dispatch = useDispatch();

  let htmlTabs;
  if (!arrays || arrays.length < 1) {
    htmlTabs = <li className="nav-item">No data</li>
  } else {
    htmlTabs = arrays.map((arr) => {
      const sysTitle = arr[0].toLowerCase().replace(/\W/ig, "");
      if (arr.length < 2) {
        return (
          <li className="nav-item" key={sysTitle}>
            <a className={`nav-link ${stateTab[0] === arr[0] ? " active " : ""}`}
                data-toggle="tab" 
                href={`#${sysTitle}`}
                aria-controls={sysTitle}
                onClick={() => dispatch(setStateTab([`${arr[0]}`, `${arr[0]}`]))}> {arr[0]} </a>
          </li>
        )
      } else {
        const subTab = arr[1].map((element) => {
          const sysTitleElement = element.toLowerCase().replace(/\W/ig, "");
              return (
                  <a className={`dropdown-item ${stateTab[1] === element ? " active " : ""} ` } 
                      key={sysTitleElement} 
                      href={`#${sysTitleElement}`} 
                      data-toggle="tab" 
                      aria-controls={sysTitleElement}
                      onClick={() => dispatch(setStateTab([`${arr[0]}`, `${element}`]))}> {element} </a>
              )
          }
        )
        return(
          <li className="nav-item dropdown" key={sysTitle}>
            <a className={`nav-link dropdown-toggle ${stateTab[0] === arr[0] ? " active " : ""} `}  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                {stateTab[0] === arr[0] ? <>{arr[0]} / {stateTab[1]}</> : arr[0]}
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