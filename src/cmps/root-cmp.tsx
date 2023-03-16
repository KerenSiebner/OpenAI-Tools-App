import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import App from "../App"
import RootLayout from "../layout/root-layout"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<App />} />
            {/* <Route path="/customize/:storeId" element={<GiftDetails />} />  */}
        </Route>
    )
 )
 
 
 export function RootCmp() {
    return (
        <RouterProvider router={router} />
    )
 }
 