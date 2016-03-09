'use strict';

const _ = require('lodash');

const arr = _.shuffle([0,1,2,3,4,5,6,7,8,9]);


// Bubble sort (sinking sort)
function bubbleSort(array) {
  let swapped = false;
  for (var j = array.length-1; j > 0; j--) {
    for (var i = 0; i < array.length-1; i++) {
      if (array[i] > array[i+1]) {
        swap(array, i, i+1);
      }
    }
  }
  return array;
}

// Utility functions
function swap (array, index1, index2) {
  const temp = array[index1];

  array[index1] = array[index2];
  array[index2] = temp;
}


const sort_arr = bubbleSort(arr);
