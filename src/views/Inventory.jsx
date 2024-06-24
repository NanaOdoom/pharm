import React from 'react'
import "../styles/view-styles/inventory.css"
import Sidebar from '../components/Sidebar'
import InventoryContainer from '../components/InventoryContainer'


const Inventory = () => {
  return (
    <div className="main-inventory-container">
      <Sidebar/>
      <InventoryContainer/>
    </div>
  )
}

export default Inventory
