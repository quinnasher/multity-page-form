import {BrowserRouter, Route, Routes} from "react-router-dom";
import PersonalFormPage from "./pages/Form-Personal.jsx";
import SelectPlanFormPage from "./pages/Form-Plan.jsx";
import AddonsFormPage from "./pages/Form-Addons.jsx";
import SummaryFormPage from "./pages/Form-Summary.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<PersonalFormPage/>}/>
              <Route path='/select-plan' element={<SelectPlanFormPage/>}/>
              <Route path="/addons" element={<AddonsFormPage/>} />
              <Route path="/summary" element={<SummaryFormPage/>} />
          </Routes>
      </BrowserRouter>

  )
}

export default App
