import { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../../../redux/reducers/mainReducer";

import MainSpinner from "../../../UI/spinners/MainSpinner";
import CreateTabs from "./CreateTabs"; 

const SummaryPage = lazy(() => import('../summary/SummaryPage'));
const SalesLead = lazy(() => import('./sales/SalesLead'));
const SalesActivities = lazy(() => import('./sales/SalesActivities'));
const SalesProposals = lazy(() => import('./sales/SalesProposals'));
const FilesDocuments = lazy(() => import('./files/FilesDocuments'));
const TimeSchedule = lazy(() => import('./time/TimeSchedule'));
const TimeDailyLogs = lazy(() => import('./time/TimeDailyLogs'));

const JobsJob = lazy(() => import('./jobs/JobsJob'));

const TabRoutes = () => {
  const dispatch = useDispatch();
  const wsCategory = useSelector((state) => state.workspace.category);
  const wsType = useSelector((state) => state.workspace.type);
  
  const salesTabs = [ ["Lead"], //, ["Lead Opportunities", "Lead Activities", "Lead Proposals"]
    ["Activities"],
    ["Proposals"],
    ["Files", ["Documents", "Photos", "Videos"]],
    ["Control", ["Schedule", "Time Clock", "Daily Logs"]] ];

  const jobsTabs = [ ["Job"],
    ["Files", ["Documents", "Photos", "Videos"]],
    ["Control", ["Schedule", "Time Clock", "Daily Logs"]] ];


  function search(arr, value) {
    if(!(arr instanceof Array)) return value === arr;
    return arr.some(item => search(item, value)); 
  }

  useEffect(() => {    
    if (!search(salesTabs, wsCategory[0]) && wsType === "sales") {
      let subTab = salesTabs[0].length < 2 ? salesTabs[0][0] : salesTabs[0][1][0];
      dispatch(setCategory([salesTabs[0][0], subTab]))
    } 
    if (!search(jobsTabs, wsCategory[0]) && wsType === "jobs") {
      let subTab = jobsTabs[0].length < 2 ? jobsTabs[0][0] : jobsTabs[0][1][0];
      dispatch(setCategory([jobsTabs[0][0], subTab]))
    } 
  },[wsType])

  

  let tabBuilding;
  switch (wsType) {
    default: case "sales": 
      tabBuilding = CreateTabs(salesTabs, wsCategory, setCategory);
      break;
    case "jobs":
      tabBuilding = CreateTabs(jobsTabs, wsCategory, setCategory)
      break;  
  }

  return(
   <>
    { tabBuilding }
   </>
  )
}



const ContentRoutes = () => {
  const wsCategory = useSelector((state) => state.workspace.category);
  
  let contentBuilding;
  switch (wsCategory[1]) {
    case "Lead":  contentBuilding = <SalesLead/>; break;
    case "Activities":  contentBuilding = <SalesActivities/>; break;
    case "Proposals":  contentBuilding = <SalesProposals/>; break;

    case "Documents": contentBuilding = <FilesDocuments/>; break;
    case "Photos": contentBuilding = <FilesDocuments/>; break;
    case "Videos": contentBuilding = <FilesDocuments/>; break;

    case "Schedule": contentBuilding = <TimeSchedule/>; break;
    case "Time Clock": contentBuilding = <MainSpinner/>; break;
    case "Daily Logs": contentBuilding = <TimeDailyLogs/>; break;

    
    case "Job":  contentBuilding = <JobsJob/>; break;

    default: break;  
  }
  

  return(
    <>
    <Suspense fallback={<MainSpinner/>}>
      { contentBuilding }
    </Suspense>
    </>
  )
}


export { TabRoutes, ContentRoutes };
