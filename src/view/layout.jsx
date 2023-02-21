import React from "react";

export default function SortingType(props) {
    return(
        <div className="select_container">
            <input 
                type="range"
                className="slid_bar"
                min="50"
                max="200"
                step={5}
            />
            <select className="speed_range">
                <option value="100">Slow</option>
                <option value="50">Meduim</option>
                <option value="10">Fast</option>
            </select>
            <select onChange={props.handleChange}>
                <option value="buble_sort">Buble sort</option>
                <option value="quick_sort">Quick sort</option>
                <option value="heap_sort">Heap sort</option>
                <option value="merge_sort">Merge sort</option>
                <option value="insertion_sort">Insertion sort</option>
            </select>
        </div>
    );
}