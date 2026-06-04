/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    
    inversionCount(arr) {
        return this.mergeSort(arr, 0, arr.length - 1);
    }

    mergeSort(arr, left, right) {
        let count = 0;

        if (left < right) {
            let mid = Math.floor((left + right) / 2);

            count += this.mergeSort(arr, left, mid);
            count += this.mergeSort(arr, mid + 1, right);
            count += this.merge(arr, left, mid, right);
        }

        return count;
    }

    merge(arr, left, mid, right) {
        let temp = [];
        let i = left;
        let j = mid + 1;
        let count = 0;

        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp.push(arr[i]);
                i++;
            } else {
                temp.push(arr[j]);
                
                count += (mid - i + 1);
                
                j++;
            }
        }

        while (i <= mid) {
            temp.push(arr[i]);
            i++;
        }

        while (j <= right) {
            temp.push(arr[j]);
            j++;
        }

        for (let k = left; k <= right; k++) {
            arr[k] = temp[k - left];
        }

        return count;
    }
}