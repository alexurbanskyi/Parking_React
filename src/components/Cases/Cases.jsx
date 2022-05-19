import React from 'react'
import './Cases.css'
import lockCase from '../../img/lock.svg' 

function Cases() {
  return (
   <div className='cases-wrapper'>  
      <div className='cases'>
         <div className='cases-container'>
            <div class="cases-add">
               <h1 class="cases-title">Cases</h1>
               <button class="add-button"><span>+</span>New case</button>
            </div>
            <div className='cases-going'>
               <h4 className='cases-going-title'>On-going<span className='going-number'>(3)</span></h4>
               <div className='cases-element active'>
                  <p className='cases-element-title'>Fix the parking meter</p>
                  <p className='cases-element-time'>Opened in 13 days</p>
               </div>
               <div className='cases-element'>
                  <p className='cases-element-title'>Broken PnD</p>
                  <p className='cases-element-time'>Opened in 17 days</p>
               </div>
               <div className='cases-element'>
                  <p className='cases-element-title'>Broken asphalt</p>
                  <p className='cases-element-time'>Opened in 20 days</p>
               </div>
               <h4 className='cases-going-title'>Done<span className='going-number'>(2)</span></h4>
               <div className='cases-element'>
                  <p className='cases-element-title'>Broken PnD</p>
                  <p className='cases-element-time'>Closed: 2019-08-13</p>
               </div>
               <div className='cases-element'>
                  <p className='cases-element-title'>Broken PnD</p>
                  <p className='cases-element-time'>Closed: 2019-08-13</p>
               </div>
            </div>
         </div>
      </div>
      <div className='cases-info'>
         <div className='case-info-container'>
            <div class="info-data">
               <p class="data"> Opened in <span>45 days</span> </p>
               <button class="del-button">
                  <img class="del-icon" src={lockCase} alt=""/>
                  <p>Close case</p>
               </button>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Cases