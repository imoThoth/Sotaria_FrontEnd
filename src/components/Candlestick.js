import React, { useState, useRef, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const Candlestick = () => {

    const [inputData, setInputData] = useState('');
    const inputRef = useRef(null);
    const [serverResponseMap, setServerResponseMap] = useState(new Map());
    const [buttonClicked, setButtonClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    //allows user to input data
    // const handleInputChange = (e) => {
    //     setInputData(e.target.value)
    // } n
   
    const handlePostData = async() => {
        // Access the input value using the ref
        const inputValue = inputRef.current.value;
        setIsLoading(true);

         axios.post('http://localhost:8081/api/market/stock', inputValue)
        .then(response => setServerResponseMap(response.data))
        console.log(`Response Map: ${serverResponseMap}`)
        // .then(data => {
        //     setServerResponseMap(data)
        //     setIsLoading(false);
        // })
   }

//    useEffect(() => {
//         handlePostData();
//    }, [])
 

    console.log(serverResponseMap);

 const mappedCandlestickData = [];

    for (const [date, data] of Object.entries(serverResponseMap)) {
        const candlestickDataPoint = {
          x: new Date(date),
          y: {
          open: data["1. open"],
          high: data["2. high"],
          low: data["3. low"],
          close: data["4. close"],
          volume: data["5. volume"]
          }
          
        };
        mappedCandlestickData.push(candlestickDataPoint);
      }
    




    const candlestickData = mappedCandlestickData
    .sort((a, b) => new Date(a.x) - new Date(b.x))
    .map(item => ({
        x:`
        ${new Date(item.x).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        })}
         ${new Date(item.x).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
        })}`,
        y: [
            item.y.open,
            item.y.high,
            item.y.low,
            item.y.close
        ]
    }))

    console.log("Candle Stick", candlestickData);

    // [
        // { x: '2023-09-01', y: [30, 60, 15, 45] },
        // { x: '2023-09-02', y: [45, 80, 30, 60] },
        // Add more data points as needed
    //   ];

    const series = [
        {
          data: candlestickData,
        },
      ];
    
      const options = {
        chart: {
          type: 'candlestick',
        },
        xaxis: {
          type: 'time',
        },
      };
    
      return (
        <>
            <input type='text' ref={inputRef} defaultValue={inputData} />
            <button type='submit' onClick={handlePostData}> Send Data</button>


            <ReactApexChart options={options} series={series} type="candlestick" height={350} />
        
        </>
      );
}

export default Candlestick;