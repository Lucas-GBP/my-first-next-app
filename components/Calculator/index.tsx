import React, { FC, useRef, useState } from "react";
import { CalMatrix, matrixButton } from "./CalMatrix";

enum calStates{
    Input_1,
    SelectOperation,
    Input_2,
    Result
}
enum calOperation{
    Equal,
    Sum,
    Sub,
    Mult,
    Divi,
    None,
}
interface calculatorProps{
    id: string;
}

export const Calculator: FC<calculatorProps> = (props) => {
    const [display, setDisplay] = useState<string>('');
    const state = useRef<calStates>(calStates.Input_1);
    const operation = useRef<calOperation>(calOperation.None);
    const firstNumber = useRef<number>(0);
    const secondNumber = useRef<number>(0);

    const cleanDisplay = () =>{
        state.current = calStates.Input_1;
        operation.current = calOperation.None;
        setDisplay('');
    }

    const calculateResult = () =>{
        state.current = calStates.Result;
        secondNumber.current = parseFloat(display);

        switch (operation.current) {
        case calOperation.Sum:
            firstNumber.current = firstNumber.current + secondNumber.current;
            break;
        case calOperation.Sub:
            firstNumber.current = firstNumber.current - secondNumber.current;
            break;
        case calOperation.Mult:
            firstNumber.current = firstNumber.current * secondNumber.current;
            break;
        case calOperation.Divi:
            firstNumber.current = firstNumber.current / secondNumber.current;
            break;
        }

        operation.current = calOperation.None;
        setDisplay(firstNumber.current.toString());
    }

    const numberClick = (value:string) =>{
        if(state.current === calStates.Result){
            setDisplay(value);
            state.current = calStates.Input_1;

            return;
        }
        if(state.current === calStates.SelectOperation){
            setDisplay(value);
            state.current = calStates.Input_2;

            return;
        }

        setDisplay(display+value);
    }

    const opClick = (nextOperation:calOperation) =>{
        if(nextOperation === calOperation.Equal){
            if(state.current === calStates.SelectOperation){
                calculateResult();
                return;
            }
            if(state.current === calStates.Input_2){
                calculateResult();
                return;
            }
        }
        if(nextOperation !== calOperation.Equal){
            if(state.current === calStates.Input_1){
                state.current = calStates.SelectOperation;
                operation.current = nextOperation;
                firstNumber.current = parseFloat(display);
                return;
            }
            if(state.current === calStates.SelectOperation){
                operation.current = nextOperation;
                return;
            }
            if(state.current === calStates.Input_2){
                operation.current = nextOperation;
                return;
            }
            if(state.current === calStates.Result){
                state.current = calStates.Input_2;
                operation.current = nextOperation;
                setDisplay('');
                return;
            }
        }
    }

    const calMatrix:matrixButton[][] = [
        [ {label:'C/A', onClick:cleanDisplay}, {label:'C/A', onClick:cleanDisplay}, {label:'C/A', onClick:cleanDisplay}, {label:'C/A', onClick:cleanDisplay} ],
        [ {label:'7', onClick:()=>numberClick('7')}, {label:'8', onClick:()=>numberClick('8')}, {label:'9', onClick:()=>numberClick('9')}, {label:'X', onClick:()=>opClick(calOperation.Mult)} ],
        [ {label:'4', onClick:()=>numberClick('4')}, {label:'5', onClick:()=>numberClick('5')}, {label:'6', onClick:()=>numberClick('6')}, {label:'-', onClick:()=>opClick(calOperation.Sub)} ],
        [ {label:'1', onClick:()=>numberClick('1')}, {label:'2', onClick:()=>numberClick('2')}, {label:'3', onClick:()=>numberClick('3')}, {label:'+', onClick:()=>opClick(calOperation.Sum)} ],
        [ {label:'0', onClick:()=>numberClick('0')}, {label:'.', onClick:()=>numberClick('.')}, {label:'=', onClick:()=>opClick(calOperation.Equal)}, {label:'/', onClick:()=>opClick(calOperation.Divi)} ]
    ]

    const displayWidthPx:string = ' w-['+((calMatrix[0].length*2-2)*4+(calMatrix[0].length*64))+'px]'

    return <div className="calculator" id={props.id}>
        <div className={"calculator-display max-w-[280px]"+displayWidthPx}>{display}</div>
        <CalMatrix matrix={calMatrix} sizeButton='w-50'/>
    </div>;
}