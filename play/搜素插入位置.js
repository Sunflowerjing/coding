/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 * 
 * 最终结果: 插入之后还是有序的位置
 */

// 示例 1:
输入: [1,3,5,6], 5
输出: 2  

// 示例 2:
输入: [1,3,5,6], 2
输出: 1

// 示例 3:
输入: [1,3,5,6], 7
输出: 4

// 示例 4:
输入: [1,3,5,6], 0
输出: 0

// 方案一: indexOf + for
function location1(arr, num){
    const index = arr.indexOf(num);
    if(index != -1)  return index;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>num){
            if(i === 0){
                arr.unshift(num)
            }else {
                arr.splice(i, 0, num)
            }
            return i
        } else if(i === arr.length-1) {
            arr.push(num)
            return arr.length-1
        }
        
    }
}
// console.log('结果1', location1([1,3,5,6], 5)); // 2
// console.log('结果2', location1([1,3,5,6], 2)); // 1
// console.log('结果3', location1([1,3,5,6], 7)); // 4
// console.log('结果4', location1([1,3,5,6], 0)); // 0


// 方案二: 有序数组的查找/搜索 -> 二分查找
function location2(arr, num){
    if(arr.length === 0 || arr[arr.length-1] < num){
        return arr.length
    }
    let mid, left = 0, right = arr.length -1;
    while(left<right){
        mid = Math.floor((left+right)/2)
        if(arr[mid] === num){
            return mid
        } else if(arr[mid] < num){
            left = mid + 1
        } else if(arr[mid] > num){
            right = mid
        }
    } 
    return left;
}
console.log('结果1', location2([1,3,5,6], 5)); // 2
console.log('结果2', location2([1,3,5,6], 2)); // 1
console.log('结果3', location2([1,3,5,6], 7)); // 4
console.log('结果4', location2([1,3,5,6], 0)); // 0











