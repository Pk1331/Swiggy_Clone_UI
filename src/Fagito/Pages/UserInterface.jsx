import React from 'react'
import FirmsChain from '../Components/FirmsChain'
import ItemDisplay from '../Components/ItemDisplay'
import Navbar from '../Components/Navbar'
import TopFirms from '../Components/TopFirms'
const UserInterface = () => {
  return (
    <div>
      <Navbar/>
      <div className="Menu">
        <ItemDisplay/>
        <TopFirms/>
        <FirmsChain/>
       </div>
    </div>
  )
}

export default UserInterface