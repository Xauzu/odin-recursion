function merge(arr1, arr2) {
    let result = [];
    const newArr1 = [...arr1];
    const newArr2 = [...arr2];
    while (newArr1.length > 0 && newArr2.length > 0) {
        if (newArr1[0] < newArr2[0]){
            result = [...result, newArr1[0]];
            newArr1.splice(0, 1);
        }
        else{
            result = [...result, newArr2[0]];
            newArr2.splice(0, 1);
        }
    }

    // arr + remaining element in either array
    return [...result, ...newArr1, ...newArr2];
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    else {
        const mid = arr.length / 2;
        const arr1 = mergeSort(arr.slice(0, mid));
        const arr2 = mergeSort(arr.slice(mid));

        return merge(arr1, arr2);
    }
}

const arr1 = [3,2,1,4];
console.log(arr1, '->', mergeSort(arr1));

const arr2 = [4,2,6,7,1,5,3,8,9,0];
console.log(arr2, '->', mergeSort(arr2));