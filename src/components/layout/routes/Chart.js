import React from 'react'
import Candlestick from '../../Candlestick';
import '../../../App.css';


const Chart = () => {
  return (
    <>
    
      <div className='chart'>
        <Candlestick />
    </div>

    <div className='news-update'>
        News Update on Stock
    </div>
    </>
  
    
  )
}

export default Chart;