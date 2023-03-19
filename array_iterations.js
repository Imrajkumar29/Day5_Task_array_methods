// 1)Print odd numbers in an array

//   Annonymous function
var odd = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
odd([1, 2, 3, 4, 5, 6, 7]);

//using filter and arrow function

let inputarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(inputarr.filter((element) => element % 2));

//IIFE and arrow function
(function (inputarr) {
  console.log(inputarr.filter((element) => element % 2));
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//    IIFE Function
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7]);

//    Arrow function
odd = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
odd(1, 2, 3, 4, 5, 6, 7);

//OUTOUT=1,3,5,7

// 2)Sum of all numbers in an array

//   Annonymous function
var sum = function (arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};
console.log(sum([1, 2, 3, 4, 5, 6, 7]));

//   IIFE Function with reduce
(function (arrInput) {
  //   var result = 0;
  //   for (var i = 0; i < arr.length; i++) {
  //     result += arr[i];
  console.log(
    "reduce sum",
    arrInput.reduce((result, element) => {
      return result + element;
    }, 0)
  );
})([1, 2, 3, 4, 5, 6, 7]);

//   Arrow function
sumarr = (arr) => {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

console.log(sumarr([1, 2, 3, 4, 5, 6, 7]));

//OUTPUT=28

// 3)Convert all the strings to title caps in a string array

//   Annonymous function
var caps = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    x = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
    console.log(x);
  }
};
caps(["guvi", "geeks"]);

["guvi", "geeks"].map((element) => {
  console.log(element.toUpperCase());
});

//   IIFE function
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    x = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
    console.log(x);
  }
})(["guvi", "geeks"]);

//   Arrow function
titlecaps = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    x = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
    console.log(x);
  }
};
titlecaps(["guvi", "geeks"]);

//OUTPUT=Guvi Geeks

// 4)Return all the prime numbers in an array

//  Annonymous function
let primeno = function (data) {
  return data.filter((n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  });
};
console.log(primeno([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//   IIFE function
(function (data) {
  let prime = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 2) {
      prime.push(data[i]);
      continue;
    }
    for (let j = 2; j < data[i]; j++) {
      if (data[i] % j == 0) {
        break;
      }
      if (j === data[i] - 1) prime.push(data[i]);
    }
  }
  console.log(prime);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//   Arrow function
let prime = (data) => {
  return data.filter((n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  });
};
console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//OUTPUT=2,3,5,7

// 5)  Return all the palindromes in an array

// Annonymous function:
var arr = ["radar", "level", "refer", "hello"];
arr = arr.filter((w) => {
  let len = w.length;
  console.log(len / 2);
  for (var i = 0; i < len / 2; i++) {
    if (w[i] == w[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(arr);

// IIFE function:
var arr = ["radar", "level", "refer", "hello"];
arr = arr.filter((w) => {
  let len = w.length;
  for (var i = 0; i < len / 2; i++) {
    if (w[i] == w[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(arr);

// Arrow function:
var arr = ["radar", "level", "refer", "hello"];
arr = arr.filter((w) => {
  let len = w.length;
  for (var i = 0; i < len / 2; i++) {
    if (w[i] == w[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(arr);

//OUTPUT=['radar', 'level', 'refer']

// 6)Median of two sorted arrays

Annonymous: var a = [1, 2, 3, 4, 5];
var b = [2, 4, 6, 8, 10];
var n = a.length;
var median = function (a, b, n) {
  var i = 0,
    j = 0;
  var count;
  var m1 = -1,
    m2 = -1;

  for (count = 0; count <= n; count++) {
    if (i == n) {
      m1 = m2;
      m2 = b[0];
      break;
    } else if (j == n) {
      m1 = m2;
      m2 = a[0];
      break;
    }
    if (a[i] <= b[j]) {
      m1 = m2;
      m2 = a[i];
      i++;
    } else {
      m1 = m2;
      m2 = b[j];
      j++;
    }
  }
  return (m1 + m2) / 2;
};
console.log(median(a, b, n));

IIFE: var a = [1, 2, 3, 4, 5];
var b = [2, 4, 6, 8, 10];
var n = a.length;
var median = ((a, b, n) => {
  var i = 0,
    j = 0;
  var count;
  var m1 = -1,
    m2 = -1;

  for (count = 0; count <= n; count++) {
    if (i == n) {
      m1 = m2;
      m2 = b[0];
      break;
    } else if (j == n) {
      m1 = m2;
      m2 = a[0];
      break;
    }
    if (a[i] <= b[j]) {
      m1 = m2;
      m2 = a[i];
      i++;
    } else {
      m1 = m2;
      m2 = b[j];
      j++;
    }
  }
  return (m1 + m2) / 2;
})(a, b, n);
console.log(median);

//OUTPUT=4
// ---------------------------------------------------------------
// 7)Remove duplicates from an Array

//  Anonymous Function:
var duplicate = function (array) {
  let dup = [...new Set(array)];
  console.log(dup);
};
duplicate([1, 1, 2, 3, 4]);

IIFE: (function (array) {
  let dup = [...new Set(array)];
  console.log(dup);
})([1, 1, 2, 3, 4]);

//OUTOUT=[1, 2, 3, 4]

// 8)Rotate an array by K times

let rotate = function (arr, d) {
  let data;
  for (let i = 0; i < d; i++) {
    data = arr.shift();
    arr.push(data);
  }
  return arr;
};
console.log(rotate([1, 2, 3, 4, 5, 6], 2));

//OUTPUT=[3, 4, 5, 6, 1, 2]

// Rotate an array by k times and return the rotated array using IIFE function
console.log(
  (function (arr, d) {
    let data;
    for (let i = 0; i < d; i++) {
      data = arr.shift();
      arr.push(data);
    }
    return arr;
  })([1, 2, 3, 4], 3)
);

//OUTPUT=[4, 1, 2, 3]
