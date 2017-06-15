var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var num1 = parseInt(array.length / 3);
var num2 = array.length % 3;
if (num2 == 0) {
    var getArrs = [];
    for (var i = 0, j = 0; j < array.length; j += 3) {
        getArrs[i] = getArr(j);
        i++;
    }
    for (var j = 0; j < getArrs.length; j++) {
        console.log(getArrs[j]);
    }
} else {
    var getArrs = [];
    for (var i = 0, j = 0; j < array.length; j += 3) {
        if (i == num1) {
            getArrs[i] = getArr(j, num2);
            i++;
        } else {
            getArrs[i] = getArr(j);
            i++;
        }
    }
    for (var j = 0; j < getArrs.length; j++) {
        console.log(getArrs[j]);
    }
}

function getArr(index, num) {
    var arr = [];
    if (num) {
        for (var i = index; i < (index + num); i++) {
            arr.push(array[i]);
        }
    } else {
        for (var i = index; i < index + 3; i++) {
            arr.push(array[i]);
        }
    }
    return arr;
}
