import React from 'react'

import 'styles/DiscountList.css'


function DiscountList(props) {
   return (
      <div className="discounts">
         <ul>
            <li>
               <span>
                  Mua
                  <span className="highlight-text"> 10 </span>
                  chỉ với
                  <span className="highlight-text"> €90,00 </span>
                  tiết kiệm
                  <span className="highlight-text"> 10% </span>
               </span>
            </li>
            <li>
               <span>
                  Mua
                  <span className="highlight-text"> 10 </span>
                  chỉ với
                  <span className="highlight-text"> €85,00 </span>
                  tiết kiệm
                  <span className="highlight-text"> 15% </span>
               </span>
            </li>
            <li>
               <span>
                  Mua
                  <span className="highlight-text"> 10 </span>
                  chỉ với
                  <span className="highlight-text"> €80,00 </span>
                  tiết kiệm
                  <span className="highlight-text"> 20% </span>
               </span>
            </li>
            <li>
               <span>
                  Mua
                  <span className="highlight-text"> 10 </span>
                  chỉ với
                  <span className="highlight-text"> €75,00 </span>
                  tiết kiệm
                  <span className="highlight-text"> 25% </span>
               </span>
            </li>
            <li>
               <span>
                  Mua
                  <span className="highlight-text"> 10 </span>
                  chỉ với
                  <span className="highlight-text"> €70,00 </span>
                  tiết kiệm
                  <span className="highlight-text"> 30% </span>
               </span>
            </li>
         </ul>

      </div>
   )
}

export default DiscountList