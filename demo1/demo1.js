var preObj = {
    a: 1,
    d: {
        b: 1,
        e: {
            c: 1,
            f: {
                a: 2,
                b: 3,
                c: 4
            }
        }
    }
};
//第一种方式
// var obj = {};
// check(preObj);
// function check(param) {
//     for (var i in param) {
//         if (typeof param[i] == 'number') {
//             if (i == 'a' || i == 'b' || i == 'c') {
//                 if (!obj[i]) {
//                     obj[i] = [];
//                 }
//                 obj[i].push(param[i]);
//             }
//         } else {
//             check(param[i]);
//         }
//     }
// }
// for(var i in obj){
//     document.write(i + ':');
//     for(var j = 0;j < obj[i].length;j++){
//         document.write(obj[i][j] + ' ');
//     }
//     document.write('<br/>');
// }

// 第二种方式
var obj = {};
function extract(param) {
    check(param);
    function check(param) {
        for (var i in param) {
            if (typeof param[i] == 'number') {
                if (!obj[i]) {
                    obj[i] = [];
                }
                obj[i].push(param[i]);
            } else {
                check(param[i]);
            }
        }
    }
    for (var i in obj) {
        document.write(i + ':');
        for (var j = 0; j < obj[i].length; j++) {
            document.write(obj[i][j] + ' ');
        }
        document.write('<br/>');
    }
}
extract(preObj);