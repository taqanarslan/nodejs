var str1 = "test"
var str2 = "it please"

//add strings
var str3 = `${str1} ${str2}`
console.log(str1+" "+str2)
console.log(str3)

//get the length of a string
console.log(str3.length)

//take a substring or a character
console.log(str1[0]+str2.substring(5,7))
console.log(str1.charAt(0)+str2.substring(5,7))

//find the index of a specific character (-1 if exists not)
console.log(str1.indexOf("a"))
//use the lastIndexOf if you wanna find the last one
//indexOf() returns the first one
console.log(str1.indexOf("t",3)) //the second parameter determines the beginning of the search

//control if a string starts or ends with a 
//returns true or false according to the condition
console.log(str3.startsWith("test"))
console.log(str3.endsWith("ease",10)) //the second parameter determines the end of the search

//control if a string includes a specific substring
//returns true or false according to the condition
console.log(str2.includes("t p"))

//remove a part of the string
console.log(str3.slice(3))
console.log(str3.slice(2,5))

//to make a string upper or lowercase
console.log(str3.toUpperCase(str2))

//to delete the unnecessary spaces in the beginning and end of a string
console.log("   taqan arslan  ".trim())

//any of these methods won't change the string itself 
//if you want so, you should assign as below
str3=str3.slice(3);

//there are a lot of methods to use with Strings :) 
//don't be afraid to ctrl space when needed

