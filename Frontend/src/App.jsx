import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CreateTicket from './pages/CreateTicket'
import TicketDetails from './pages/TicketDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/new" element={<CreateTicket/>}></Route>
        <Route path="/tickets/:ticketId" element={<TicketDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App
