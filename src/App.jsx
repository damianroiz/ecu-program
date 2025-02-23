import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import BaseLayout from './ui/BaseLayout'
import Tuning from './pages/Tuning'
import ServiceAndRepairs from './pages/ServiceAndRepairs'
import Shop from './pages/Shop'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Navigate to="home" />}/>
        <Route path="home" index element={<Home />} />
        <Route path="tuning" element={<Tuning />} />
        <Route path="service-and-repairs" element={<ServiceAndRepairs />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
