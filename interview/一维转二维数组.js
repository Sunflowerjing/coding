// 输入 [1,2,3,4,5,6,7,8]
// 输出[[1,2,3], [4,5,6], [7,8]]


// 方案一: reduce
var arr = [1,2,3,4,5,6,7,8];
function twoArray1(arr, num){
    return arr.reduce((pre, item, index) => {
        if( index%num === 0 ){
            pre.push([item])
        } else {
            pre[pre.length-1].push(item)
        }
        return pre
    }, [])
}
console.log('reduce 方案', twoArray1(arr, 3))


// 方案二: 循环方案
function twoArray2(arr, num){
    var newArr = [];
    for(var i=0; i<arr.length;){
        for(var j=0; j<num; j++, i++){
            j === 0 ? newArr.push([arr[i]]) : newArr[newArr.length-1].push(arr[i])
        }
    }
    return newArr;
}
console.log('循环方案',twoArray2(arr,2))







