let result =" " ;
let i = 0;

do {
    i = 1 + 1;
    result = result + i;
   } while (i < 5);

   console.log(result);
   // expected result: "12345"



   let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"
