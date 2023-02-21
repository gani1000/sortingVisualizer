
import React, { useEffect, useState } from "react";
import { Helperbuble_sort } from '../algorithms/bubleSort';
import '../sortingAlgorithms/sortingVisualizer.css'
import SortingType from "../view/layout";

export default function sortingVisualizer() {
    const [array, setArray] = useState([]);
    const [options, setOptions] = useState("");

    function resetArray () {
        const arrayElements = [];
        
        for (let i = 0; i < 200; i++){
            arrayElements.push(reandomizArray(4, 500));
        }
        setArray(arrayElements);
    }

    function reandomizArray (min, max) {
        return Math.floor( Math.random() * (max - min + 1) + min);
    }

    function handleChange(e) {
        setOptions(e.target.value);
    }

    function bubleSort() {
        let [animation] = Helperbuble_sort(this.state.array);
        for (let i = 0; i < animation.length; i++){
            const barColor = (i % 4 === 0) || (i % 4 === 1);
            const bars = document.getElementsByClassName('array-bar');
            if (barColor) {
                const color = (i % 4 === 0) ? "red" : "turquoise";
                const [barIdxOne, barIdxTwo] = animation[i];
                const barOneStyle = bars[barIdxOne].style;
                const barTwoStyle = bars[barIdxTwo].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 2);
            }else {
                const [barIdx, newHeight] = animation[i];
                if (barIdx == -1) {
                    continue;
                }
                const barStyle = bars[barIdx].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                }, i * 2);
            }
        }
    }

    useEffect(() => {
        resetArray();
    }, []);

    return (
        <div className="array-container">
            {array.map((val, index) => (
                <div
                    className="array-bar"
                    key={index}
                    style= {{
                        backgroundColor: 'aqua',
                        height: `${val}px`
                    }}>
                </div>
            ))}
            <SortingType 
                handleChange={(e) => handleChange(e)}
            />
            <div className="btns_container">
                <button 
                    onClick={() => resetArray()} 
                    className="randomize_array_btn"
                    >
                    Randomize Array
                </button>
                <button
                    className="sort_btn"
                    onClick={() => bubleSort()}
                    >
                    Sort
                </button>
            </div>
        </div>
    );
}