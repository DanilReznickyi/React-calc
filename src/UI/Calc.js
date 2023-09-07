import React, {useState} from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import './Calc.css'


function Calc() {
    const [currentValue, setCurrentValue] = useState('')
    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
              const result = eval(currentValue);
              setCurrentValue(result.toString());
            } catch (error) {
              setCurrentValue('Error');
            }
          } else if (value === 'C') {
            setCurrentValue('');
          } else {
            setCurrentValue(currentValue + value);
          }
    }
    return(
            <div className="calculator">
            <Display value={currentValue} />
            <div className="button-row">
                <Button label="7" onClick={() => handleButtonClick('7')} />
                <Button label="8" onClick={() => handleButtonClick('8')} />
                <Button label="9" onClick={() => handleButtonClick('9')} />
                <Button label="C" onClick={() => handleButtonClick('C')} />
                <Button label="(" onClick={() => handleButtonClick('(')} />
            </div>
            <div className="button-row">
                <Button label="4" onClick={() => handleButtonClick('4')} />
                <Button label="5" onClick={() => handleButtonClick('5')} />
                <Button label="6" onClick={() => handleButtonClick('6')} />
                <Button label="*" onClick={() => handleButtonClick('*')} />
                <Button label=")" onClick={() => handleButtonClick(')')} />
            </div>
            <div className="button-row">
                <Button label="1" onClick={() => handleButtonClick('1')} />
                <Button label="2" onClick={() => handleButtonClick('2')} />
                <Button label="3" onClick={() => handleButtonClick('3')} />
                <Button label="/" onClick={() => handleButtonClick('/')} />
                <Button label="%" onClick={() => handleButtonClick('%')} />
            </div>
            <div className="button-row">
                <Button label="0" onClick={() => handleButtonClick('0')} />
                <Button label="." onClick={() => handleButtonClick('.')} />
                <Button label="=" onClick={() => handleButtonClick('=')} />
                <Button label="+" onClick={() => handleButtonClick('+')} />
                <Button label="-" onClick={() => handleButtonClick('-')} />
            </div>
            </div>
    )
}

export default Calc