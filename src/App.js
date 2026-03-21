import { colorModeContext, useMode } from "./theme";
import { CssBaseline,  ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Scenes/Dashboard";
import Topbar from "./Scenes/Dashboard/Global/Topbar";
import Sidebar from "./Scenes/Dashboard/Global/Sidebar";
// ...existing code...
// import Team from "./Scenes/team";
// import Invoices from "./Scenes/invoices";
// import Contacts from "./Scenes/contacts";
// import Bar from "./Scenes/bar";
// import Form from "./Scenes/form";
// import Line from "./Scenes/line";
// import Pie from "./Scenes/pie";
// import Faq from "./Scenes/faq";
// import Geography from "./Scenes/geography";  
// import Calendar from "./Scenes/calendar";

function App() { 
  const [Theme, colorMode] = useMode ();
  return (<colorModeContext.Provider value={colorMode}> 
   <ThemeProvider theme={Theme}>
      <CssBaseline />
    <div className="app">
      <Sidebar />
    <main className="content">
      <Topbar/>
      <Routes>
         <Route path="/" element={<Dashboard/>}/>
          {/* <Route path="/team" element={<Team />}/> */}
            {/* <Route path="/contacts" element={<Contacts />}/> */}
           {/* <Route path="/invoices" element={<Invoices />}/> */}
             {/* <Route path="/form" element={<Form />}/> */}
              {/* <Route path="/bar" element={<Bar />}/> */}
               {/* <Route path="/pie" element={<Pie />}/> */}
                {/* <Route path="/line" element={<Line />}/> */}
                 {/* <Route path="/faq" element={<Faq />}/> */}
                  {/* <Route path="/geography" element={<Geography />}/> */}
                   {/* <Route path="/calendar" element={<Calendar />}/> */}
                   
      </Routes>
    </main>
    </div>
    </ThemeProvider>
    </colorModeContext.Provider>

    
  );}


export default App;
