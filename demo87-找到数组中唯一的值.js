var arr = [1, 3, 17, 3, 1]

/* 第一种方法 */
function singleNumber(nums) {
    for (let i = 0; i < nums.length; i++) {
        let found = false;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i] && i != j) {
                found = true;
                break;
            }
        }
        if (!found) return nums[i];
    }
};

var res1 = singleNumber(arr)
console.log('res1: ', res1);

/* 第二种方法 */
function findUniqueNumber(nums) {
    let memo = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!memo[num]) {
            memo[num] = 1;
        } else {
            memo[num] += 1;
        }
    }
    return Object.keys(memo).reduce((unique, num) => {
        return memo[num] === 1 ? Number(num) : unique;
    }, NaN);
};

var res2 = findUniqueNumber(arr)
console.log('res2: ', res2);

/* 第三种方法 */
function findUniqueNumber(nums) {
    return nums.reduce((val, num) => val ^ num);
}

var res3 = findUniqueNumber(arr)
console.log('res3: ', res3);