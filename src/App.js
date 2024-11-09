import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Layout from './Components/Layouts/Layout'
import OnlineBanking from './Components/OnlineBanking'
import Loans from './Components/Loans'
import CarCalculator from './Components/CarCalculator'
import Help from './Components/Help'
import Transactions from './Components/Transactions'
import Success from './Components/Success'
import SendMoney from './Components/SendMoney'
import TransferMoney from './Components/TransferMoney'
import Investment from './Components/Investment'
import Donation from './Components/Donation'
import Login from './Components/Login'
import Register from './Components/Register'
import Profile from './Components/Profile'
import ProtectedRoute from './Components/ProtectedRoute'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Layout></Layout>}>
            <Route index element={<Home/>} />
            <Route path='onlinebanking' element={<ProtectedRoute> <OnlineBanking/> </ProtectedRoute>} />
            <Route path='loans' element={ <ProtectedRoute> <Loans/> </ProtectedRoute>} />
            <Route path='carcalculator' element={<CarCalculator/>} />
            <Route path='help' element={<Help/>} />
          </Route>
          
            <Route path='onlinebanking/transactions' element={<ProtectedRoute> <Transactions/> </ProtectedRoute>} />
            <Route path='onlinebanking/sendMoney/success' element={<ProtectedRoute> <Success/> </ProtectedRoute>} />
            <Route path='/onlinebanking/sendMoney' element={<ProtectedRoute> <SendMoney/> </ProtectedRoute>}/>
            <Route path='/onlinebanking/transferMoney' element={<ProtectedRoute> <TransferMoney/> </ProtectedRoute>} />
            <Route path='/onlinebanking/investment' element={<ProtectedRoute> <Investment/> </ProtectedRoute>} />
            <Route path='/onlinebanking/donation' element={<ProtectedRoute> <Donation/> </ProtectedRoute>} />
            <Route path='/profile' element={<ProtectedRoute> <Profile/> </ProtectedRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}