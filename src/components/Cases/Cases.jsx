import React from 'react'
import './Cases.css'
import lockCase from '../../img/lock.svg' 
import linkIcon from '../../img/link.png'
import dot from '../../img/dot.svg'
import upLoad from '../../img/upload.png'


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
      <div className='case-info-wrapper'>
         <div className='cases-info'>
            <div className='case-info-container'>
               <div class="info-data">
                  <p class="data"> Opened in <span>45 days</span> </p>
                  <button class="del-button">
                     <img class="del-icon" src={lockCase} alt=""/>
                     <p>Close case</p>
                  </button>
               </div>
               <div className='case-info-description'>
                  <h3 className='case-title'>Fix the parking meter</h3> 
                  <p className='case-text'>
                     Dolor mollit nostrud est adipisicing aliquip consequat qui ex sunt esse incididunt. Excepteur irure tempor Lorem ea nostrud dolor veniam. Proident ex laborum sit labore officia ipsum Lorem duis sunt officia. Anim aute cupidatat ut adipisicing ipsum ullamco amet magna. Officia ipsum
                  </p> 
                  <div className='case-param'>
                     <svg display="none">
                        <symbol viewBox="0 0 22 20" id="inven">
                        <path d="M20.675 6.69399C20.1479 5.44644 19.3838 4.31299 18.425 3.35649C17.4685 2.39769 16.3351 1.63357 15.0875 1.10649C13.7914 0.558057 12.418 0.281494 11 0.281494C9.58203 0.281494 8.20859 0.558057 6.9125 1.10649C5.66494 1.63357 4.5315 2.39769 3.575 3.35649C2.61619 4.31299 1.85207 5.44644 1.325 6.69399C0.776562 7.99009 0.5 9.36353 0.5 10.7815C0.5 13.8917 1.86641 16.8213 4.24766 18.8229L4.2875 18.8557C4.42344 18.9682 4.59453 19.0315 4.77031 19.0315H17.232C17.4078 19.0315 17.5789 18.9682 17.7148 18.8557L17.7547 18.8229C20.1336 16.8213 21.5 13.8917 21.5 10.7815C21.5 9.36353 21.2211 7.99009 20.675 6.69399ZM16.8453 17.2502H5.15469C4.24905 16.4337 3.52524 15.4358 3.03021 14.3214C2.53518 13.207 2.28001 12.0009 2.28125 10.7815C2.28125 8.45181 3.18828 6.26274 4.83594 4.61743C6.48359 2.96978 8.67266 2.06274 11 2.06274C13.3297 2.06274 15.5188 2.96978 17.1641 4.61743C18.8117 6.26509 19.7188 8.45415 19.7188 10.7815C19.7188 13.2565 18.6758 15.5979 16.8453 17.2502ZM13.6133 7.5354C13.578 7.50051 13.5305 7.48093 13.4809 7.48093C13.4313 7.48093 13.3837 7.50051 13.3484 7.5354L11.368 9.51587C10.9297 9.39868 10.4445 9.51118 10.1 9.85571C9.97797 9.97751 9.88116 10.1222 9.8151 10.2814C9.74904 10.4407 9.71504 10.6114 9.71504 10.7838C9.71504 10.9563 9.74904 11.127 9.8151 11.2862C9.88116 11.4455 9.97797 11.5902 10.1 11.712C10.2218 11.834 10.3665 11.9308 10.5257 11.9969C10.685 12.0629 10.8557 12.0969 11.0281 12.0969C11.2005 12.0969 11.3713 12.0629 11.5305 11.9969C11.6898 11.9308 11.8344 11.834 11.9562 11.712C12.1195 11.5492 12.2369 11.3463 12.2965 11.1236C12.3562 10.901 12.3561 10.6666 12.2961 10.444L14.2766 8.46353C14.3492 8.39087 14.3492 8.27134 14.2766 8.19868L13.6133 7.5354V7.5354ZM10.4844 5.15649H11.5156C11.6188 5.15649 11.7031 5.07212 11.7031 4.96899V3.09399C11.7031 2.99087 11.6188 2.90649 11.5156 2.90649H10.4844C10.3812 2.90649 10.2969 2.99087 10.2969 3.09399V4.96899C10.2969 5.07212 10.3812 5.15649 10.4844 5.15649ZM16.5781 10.2659V11.2971C16.5781 11.4002 16.6625 11.4846 16.7656 11.4846H18.6406C18.7438 11.4846 18.8281 11.4002 18.8281 11.2971V10.2659C18.8281 10.1627 18.7438 10.0784 18.6406 10.0784H16.7656C16.6625 10.0784 16.5781 10.1627 16.5781 10.2659ZM16.8758 5.64399L16.1469 4.91509C16.1116 4.88019 16.064 4.86062 16.0145 4.86062C15.9649 4.86062 15.9173 4.88019 15.882 4.91509L14.5555 6.24165C14.5206 6.27689 14.501 6.32448 14.501 6.37407C14.501 6.42367 14.5206 6.47125 14.5555 6.50649L15.2844 7.2354C15.357 7.30806 15.4766 7.30806 15.5492 7.2354L16.8758 5.90884C16.9484 5.83618 16.9484 5.71665 16.8758 5.64399ZM6.12734 4.91509C6.0921 4.88019 6.04452 4.86062 5.99492 4.86062C5.94533 4.86062 5.89774 4.88019 5.8625 4.91509L5.13359 5.64399C5.0987 5.67923 5.07913 5.72682 5.07913 5.77642C5.07913 5.82601 5.0987 5.8736 5.13359 5.90884L6.46016 7.2354C6.53281 7.30806 6.65234 7.30806 6.725 7.2354L7.45391 6.50649C7.52656 6.43384 7.52656 6.31431 7.45391 6.24165L6.12734 4.91509ZM5.14062 10.0784H3.26562C3.1625 10.0784 3.07812 10.1627 3.07812 10.2659V11.2971C3.07812 11.4002 3.1625 11.4846 3.26562 11.4846H5.14062C5.24375 11.4846 5.32812 11.4002 5.32812 11.2971V10.2659C5.32812 10.1627 5.24375 10.0784 5.14062 10.0784Z" fill="#F1287E"/>
                        </symbol>
                     </svg>
                     <svg class="inven-icon">
                        <use xlinkHref="#inven"></use>
                     </svg>
                     <p className='param-title'>Bergengatan 19</p>
                     <p className='param-num'>117320</p>
                  </div>
                  <div className='case-link'>
                     <p className='link-address'>https://easyparksystem.net/2c45g9wc</p>
                     <button className='link-btn'><img src={linkIcon} alt="logo"/>Copy Public Link</button>
                  </div>
               </div>
               <div className="subtitle">
                  Attachments
               </div>
               <button class="add-button"><img src={upLoad} alt="logo" />Upload</button>
               <div className='case-foto'></div>

            </div>
            <div className='cases-history'>
            <div class="history">
               <h4 class="subtitle">History</h4>
               <div class="history-chain">
                  <div class="chain-element">
                     <div class="chain-icon">
                        <div class="icon-holder">
                           <img src={dot} alt="logo"/>
                        </div>
                     </div>
                     <div class="chain-description">
                        <p class="chain-title">Lasse added an image Today at 09:10</p>
                        <p class="chain-time">Today at 09:10</p>
                     </div>
                  </div>
                  <div class="chain-element">
                     <div class="chain-icon">
                        <div class="icon-holder">
                           <img src={dot} alt="icon"/>
                        </div>
                        
                     </div>
                     <div class="chain-description">
                        <p class="chain-title">Lasse created the asset</p>
                        <p class="chain-time">Yesterday at 13:02</p>
                     </div>
                  </div>
               </div>
            </div>
            </div>
         </div>
         
      </div>
   </div>
  )
}

export default Cases