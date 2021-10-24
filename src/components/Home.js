import React, { useEffect, useRef, useState } from "react";

const Home = (props) =>{
    const [value, setValue]= useState("");
    const displayRef = useRef(null);

    useEffect(() => displayRef.current.focus());

    function handleClick(e) {
      setValue(value.concat(e.target.name))
    }
    function backspace() {
        setValue(value.slice(0, value.length-1));
    }
    function clear(){
        setValue("");
    }
    function calculate(){
       try {
           setValue(eval(value).toString());
       }catch(error) {
           setValue("Error")}
    }

    return(
        <>
        <div className="containers home">
            <h1>Simple Calculator </h1>
            <div className="box">
             <div className="display" ref={displayRef}>{value}</div>
             <div className="keypad"> 
                <button className="buttons" onClick={clear} id="clear">Clear</button>
                <button name="7" className="buttons" onClick={handleClick}>7</button>
                <button name="4" className="buttons" onClick={handleClick}>4</button>
                <button name="1" className="buttons" onClick={handleClick}>1</button>
                <button name="0" className="buttons" onClick={handleClick}>0</button>

                <button name="" className="buttons" onClick={backspace} id="back">Back</button>
                <button name="8" className="buttons" onClick={handleClick}>8</button>
                <button name="5" className="buttons" onClick={handleClick}>5</button>
                <button name="2" className="buttons" onClick={handleClick}>2</button>
                <button name="." className="buttons" onClick={handleClick}>.</button>

                <button name="+" className="buttons" onClick={handleClick}>+</button>
                <button name="9" className="buttons" onClick={handleClick}>9</button>
                <button name="6" className="buttons" onClick={handleClick}>6</button>
                <button name="3" className="buttons" onClick={handleClick}>3</button>
                <button name="00" className="buttons" onClick={handleClick}>00</button>

                <button name="-" className="buttons" onClick={handleClick}>-</button>
                <button name="*" className="buttons" onClick={handleClick}>&times;</button>
                <button name="/" className="buttons" onClick={handleClick}>/</button>
                <button name="%" className="buttons" onClick={handleClick}>%</button>
                <button name="=" className="buttons" onClick={calculate}>=</button>

             </div>
                  
            </div>
        </div>
        </>
    )
}
export default Home;