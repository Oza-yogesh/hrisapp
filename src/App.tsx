import AppRouter from "./routing/AppRouter";
import CssBaseline from "@mui/material/CssBaseline";
import ErrorBoundary from "./components/app/ErrorBoundary";
import Logs from "./components/app/leave/Logs";
import TypeHere from "./components/app/leave/typeHere";
import GeneralSetting from "./components/app/leave/Rules/GeneralSetting";
import AdvancedSettings from "./components/app/leave/Rules/AdvancedSettings";
import CasualLeave from "./components/app/leave/Rules/CasualLeave";
import RuleList from "./components/app/leave/Rules/RuleList";
import ApplyLeave from "./components/app/leave/ApplyLeave";
import AcasualLeave from "./components/app/leave/AcasualLeave";
import SickLeave from "./components/app/leave/SickLeave";
import McasualLeave from "./components/app/leave/McasualLeave";
import MsickLeave from "./components/app/leave/MsickLeave";
import MapplyLeave from "./components/app/leave/MapplyLeave";
import Leaves from "./components/app/leave/Leaves";

function App() {
  return (
    <>
      <ErrorBoundary>
        <CssBaseline />
        <AppRouter />
        {/* {/* <Logs />  */}
        {/* <TypeHere /> */}
        {/* <GeneralSetting /> */}
        {/* <AdvancedSettings />  */}
        {/* <CasualLeave />     */}
        {/* <RuleList />   */}
        {/* <ApplyLeave />     */}
        {/* <AcasualLeave />       */}
        {/* <SickLeave />   */}
        {/* <McasualLeave />   */}
        {/* <MsickLeave />  */}
        {/* <MapplyLeave />     */}
        {/* <Leaves />  */}
      </ErrorBoundary>
    </>
  );
}

export default App;
