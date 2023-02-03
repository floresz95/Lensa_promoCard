import React from 'react'
import './PromoCardStyle.css'
import { Assets } from './enums/enums'

function PromoCard() {
  return (
<>
    <div className='promo-card'>
        <img
            src={Assets.main_icon}
            alt=""
            height="90"
            width="142"
        />
        <div className='content'>
            <div className='heading-text'>
                <h2>
                    Job alerts from
                </h2>
                <h1>
                    General Electric Company
                </h1>
        </div>
        <p>
                Never miss new job openings
        </p>
        <div className='buttons'>
                <button className='CTA'>
                    Get Free Job Alerts
                </button>
                <p className='secondary-btn'>
                    No, I'm not interested
                </p>
        </div>
        </div>
    </div>
</>
  )
}

export default PromoCard