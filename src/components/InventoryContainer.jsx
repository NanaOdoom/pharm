import React from 'react'
import "../styles/component-styles/inventorycontainer.css"
import AddInventory from './AddInventory'

const InventoryContainer = () => {
  return (
    <body className="body">
        <div className="inv-name">
          <h1 id="name_inv">
            Inventory
          </h1>
        </div>
        <div className="inv-cont">
          <AddInventory/>
        </div>
      </body>
  )
}

export default InventoryContainer
