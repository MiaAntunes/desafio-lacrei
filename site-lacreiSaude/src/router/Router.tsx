import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Professional } from "../pages/profissional/Professional"
import { User } from "../pages/user/User"

export const Router = () =>{
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/user" element={<User />} />
         </Routes>
        </BrowserRouter>
    )
}