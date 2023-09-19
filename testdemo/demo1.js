let arr = [123, '字符串', ['数组元素1', '数组元素2']]
let arr2 = []

function choose() {
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            arr2.push(arr[i])
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        console.log(arr2[j])
    }

}

choose()