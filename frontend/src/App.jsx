
// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Shared/Home'
// import Login from './pages/Shared/Login'
// import Register from './pages/Shared/Register'
// import UserLayout from './layout/UserLayout'
// import UserDashboard from './pages/User/UserDashboard'
// import AdminLayout from './layout/AdminLayout'
// import AdminDashboard from './pages/Admin/AdminDashboard'
// import NotFound from './pages/Shared/NotFound'
// import HomeLayout from './layout/HomeLayout'
// import RetroGrid from "@/components/magicui/retro-grid";





// const App = () => {
//     return (
//         <>
//             <RetroGrid />
//             <BrowserRouter>
//                 <Routes>
//                     <Route element={<HomeLayout />}>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/login' element={<Login />} />
//                         <Route path='/register' element={<Register />} />
//                     </Route>

//                     <Route element={<UserLayout />}>
//                         <Route path='/dashboard' element={<UserDashboard />} />
//                     </Route>
                    
//                     <Route element={<AdminLayout />}>
//                         <Route path='/admin/dashboard' element={<AdminDashboard />} />
//                     </Route>

//                     <Route path='*' element={<NotFound />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     )
// }

// export default App



import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import AdminUsers from './pages/Admin/AdminUsers'
import AboutUs from './pages/Shared/AboutUs'
import Products from './components/Shared/Products'
import Reports from './pages/Admin/AdminReports'
import Stories from './components/Stories'
import ContactUs from './pages/User/ContactUs'
import AffiliateProgram from './pages/User/AffiliateProgram'
import Flash from './pages/User/Flash'
import Games from './pages/User/Games'
import CreateAct from './pages/User/CreateAct'
import StratoFirst from './components/Strato/StratoFirst'
import StratoMid from './components/Strato/StratoMid'
import StratoNext from './components/Strato/StratoNext'
import StratoSphere from './components/Strato/StratoSphere'








const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/aboutus' element={<AboutUs/>} />
                        <Route path='/products' element={<Products/>} />
                        <Route path='/story' element={<Stories/>} />
                        <Route path='/conta' element={<ContactUs/>} />
                        <Route path='/affil' element={<AffiliateProgram />} />
                        <Route path='/fla' element={<Flash />} />
                        <Route path='/game' element={<Games />} />
                        <Route path='/crea' element={<CreateAct />} />
                        <Route path='/s1' element={<StratoFirst />} />
                        <Route path='/s2' element={<StratoMid />} />
                        <Route path='/s3' element={<StratoNext />} />
                        <Route path='/s4' element={<StratoSphere />} />
                        <Route path='/s3' element={<StratoNext />} />
                        <Route path='/s4' element={<StratoSphere />} />
                        
                        
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
            
                    </Route>

                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                        <Route path='/admin/reports' element={<Reports />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App