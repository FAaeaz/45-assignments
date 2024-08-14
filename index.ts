console.log("Equality test with string: ", "Apple" === "Apple");


console.log("Equality test with string: ", ("Apple" as string) != "orange");

console.log("lower case function test: ", "HELLO".toLowerCase() === "hello")

console.log("Equality test with numbers: ", 26 === 26);

console.log("Equality test with numbers: ", (26 as number )!= 35);

console.log("Greater than test: ", 10 > 5);


console.log("Greater than and equal to test: ", 10 >= 5);

console.log("less than or equal to test: ", 5 <= 10);


console.log("And operator test: ", 5 === 5 && 10 > 5);

console.log("OR operator test: ", 10 === 10 || 5 > 8)

const fruits :string[] = ['Nashpati','Apple','Banana','ornage']

console.log("test 'Nashpati' in the array: ", fruits.includes('Nashpati'));

console.log('Testing "apple" is not in array: ' , !fruits.includes("apple"));