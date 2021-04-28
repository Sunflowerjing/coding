/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var mid, l = 0, r = x;
    while(l<=r){
        mid = Math.floor((l+r)/2);
        if(mid*mid<=x && (mid+1)*(mid+1)>x){
            return mid
        } else if(mid*mid<x) {
            l = mid + 1;
        } else {
            r = mid -1;
        }
    }
};
// @lc code=end
console.log(mySqrt(2))
