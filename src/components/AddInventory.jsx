import React, { useContext } from 'react'
import "../styles/component-styles/addinventory.css"
import { DataContext } from '../context/DataContext'
import axios from 'axios'
import moment from 'moment'

const AddInventory = () => {
  const {drugName,setDrugName, quantity, setQuantity, category,setCategory, desc, setDesc, date, loading, setLoading, success, setSuccess}= useContext(DataContext);



  const handleSubmit = (event) => {
    event.preventDefault();
    if (!drugName || !category || quantity < 1 || !desc) {
      console.error("Please fill in all fields");
      return;
    }
    const formattedDate = moment(date).format("YYYY-MM-DD"); // Format the date

    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post("http://localhost:3500/drugs", {
      drugName,
      quantity,
      category,
      desc,
      date: formattedDate,
      // time,
      // id,
    })
      .then((response) => {
        setSuccess(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(()=>{
        setLoading(false)
      });
  };
  
  return (
  <>
    {(!drugName || !category || (quantity <1) || (!desc))&& 
      <div className="notice">
            <h4 id="notice-message">
              Kindly enter all information
            </h4>
          </div>}
    <div className="inv-entry">
            <form onSubmit={handleSubmit}>
              <div className="drug_name">
                <h6 id="dname">Drug Name</h6>
                <input 
                className="drug" 
                type="text" 
                value={drugName}
                onChange={(e)=>{
                    setDrugName(e.target.value)
                }}
                />
              </div>
              <div className="inv-category">
                <div className="Category">
                  <h6 id="dname">Category</h6>
                  <input 
                  className="cat" 
                  type="text" 
                  value={category}
                  onChange={(e)=>{
                      setCategory(e.target.value)
                  }}
                  />
                </div>
                <div className="Quantity">
                  <h6 id="dname">Quantity</h6>
                  <input 
                  className="quant" 
                  type="number" 
                  value={quantity}
                  onChange={(e)=>{
                      setQuantity(e.target.value);
                      console.log(quantity);
                  }}
                  />
                </div>
              </div>
              <div className="inv-desc">
                <h6 id="dname">Description</h6>
                <textarea 
                className="desc" 
                type="text" 
                value={desc}
                onChange={(e)=>{
                    setDesc(e.target.value)
                }}
                rows={14}
                cols={30}
                />
              </div>
          
                <button 
                type="submit"
                className="inv-btn"
                >
                  {loading ? "Loading..." : "ADD"}
                </button>
            </form>
            {success && <div className="success">Inventory added successfully!</div>}
          </div>
        </>
  )
}

export default AddInventory
