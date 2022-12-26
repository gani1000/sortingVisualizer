
import React from "react";
import { Helperbuble_sort } from '../algorithms/bubleSort';
import '../sortingAlgorithms/sortingVisualizer.css'

export default class sortingVisualizer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            array: [],
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray () {
        const array = [];
        for (let i = 0; i < 200; i++){
            array.push(reandomizArray(4, 500));
        }
        this.setState({ array });
    }

    bubleSort() {
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

    /* not complete yet */
    quickSort() {}
    mergeSort() {}
    insertionSort() {}

    render() {
        const {
            array,
        } = this.state;
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
                <div className="select_container">
                    <input 
                        type="range"
                        className="slid_bar"
                        min="50"
                        max="200"
                        step={5}
                        defaultValue={this.state}
                    />
                    <select className="speed_range">
                        <option value="100">Slow</option>
                        <option value="50">Meduim</option>
                        <option value="10">Fast</option>
                    </select>
                    <select onChange={this.handleChange}>
                        <option value="buble_sort">Buble sort</option>
                        <option value="quick_sort">Quick sort</option>
                        <option value="heap_sort">Heap sort</option>
                        <option value="merge_sort">Merge sort</option>
                        <option value="insertion_sort">Insertion sort</option>
                    </select>
                </div>
                <div className="btns_container">
                    <button 
                        onClick={() => this.resetArray()} 
                        className="randomize_array_btn"
                        >
                        Randomize Array
                        </button>
                    <button
                        className="sort_btn"
                        onClick={() => this.bubleSort()}
                        >
                        Sort
                        </button>
                </div>
             </div>
        );
    }
}

function reandomizArray (min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min);
}