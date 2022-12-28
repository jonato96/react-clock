import { useState } from "react";
const Clock = () => {
    const [date, setDate]=useState(new Date())    

    setInterval(()=>{
        setDate(new Date())  
    }, 1000)

    const time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const [h, m, s] = time; 

    const degHour = h * (360 / 12) + m * (360 / 12 / 60);
    const degMin = m * (360 / 60) + s * (360 / 60 / 60);
    const degSec = s * (360 / 60);

    return (
      <div className="clock">
        <div className="hand hour" data-hour-hand style={{transform: `translate(-50%) rotate(${degHour}deg)`}}></div>
        <div className="hand minute" data-minute-hand style={{transform: `translate(-50%) rotate(${degMin}deg)`}}></div>
        <div className="hand second" data-second-hand style={{transform: `translate(-50%) rotate(${degSec}deg)`}}></div>
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
    );
  };
  
  export default Clock;