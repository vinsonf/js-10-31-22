// math operators
// + - * / % 

// addition
1 + 1; // 2
// subtraction
1 - 1; // 0
// multiplication
1 * 1; // 1
// division
1 / 1; // 1
// modulus/ modulo (remainder)
5 % 2; // 1

// increment
let i = 0;
i++; // 1
i++; // 2
i++; // 3
// same as i = i + 1;
i += 1; // 4
console.log(i);

// decrement
let j = 0;
j--; // -1
j--; // -2
j--; // -3
// same as j = j - 1;
j -= 1; // -4
console.log(j);

// assignment operators
// = += -= *= /= %=
let k = 0; // assignment
k += 10; // k = k + 1;
k -= 10; // k = k - 1;
k *= 10; // k = k * 1;
k /= 10; // k = k / 1;
k %= 10; // k = k % 1;

// comparison operators
// == === != !== > < >= <=
1 == 1; // true (value)
1 === 1; // true

1 == "1"; // true
1 === "1"; // false  (value and type)

1 != '1'; // false (value)
1 !== '1'; // true (value and type)

1 > 1; // false
1 < 1; // false
1 >= 1; // true
1 <= 1; // true

// logical operators
// && || !
true && true; // true
true && false; // false

true || true; // true
true || false; // true

!true; // false
!false; // true