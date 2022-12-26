
export function Helperbuble_sort(array) {
    let animation = [];
    let newGeneratedArray = array.slice();
    buble_sort(newGeneratedArray, animation);
    array = newGeneratedArray;
    return [animation, array];
}

function Swap(array, startIndex, endIndex) {
    let tempArray = array[startIndex];
    array[startIndex] = array[endIndex];
    array[endIndex] = tempArray;
}

function buble_sort(newGeneratedArray, animation) {
    let len = newGeneratedArray.length;
    for (let i = 0; i < len - 1; i++){
        for (let j = 0; j < len - i - 1; j++){
            animation.push([j, j + 1]);
            animation.push([j, j + 1]);
            if (newGeneratedArray[j] > newGeneratedArray[j + 1]){
                animation.push([j, newGeneratedArray[j + 1]]);
                animation.push([j + 1, newGeneratedArray[j]]);
                Swap(newGeneratedArray, j, j + 1); 
            }else {
                animation.push([-1, -1]);
                animation.push([-1, -1]);
            }
        }
    }
}