import { Outlet } from "react-router-dom";
import { AppHeader } from "../cmps/app-header";

export function RootLayout() {


    return (
      <div className="App">
        <AppHeader />
        <main>
          <Outlet />
        </main>
      </div>
    )
   }
   
   
   export default RootLayout;
   