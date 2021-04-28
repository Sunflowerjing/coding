var arr = [3,4,5,6,7];
function A(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] != 5){
            console.log('==aaa', arr[i])
        } else {
            return 'xxx'
        }
       
    }
}
console.log('===', A(arr))