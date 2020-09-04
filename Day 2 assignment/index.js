//Question 1
//Program to search for a particular character in a string
let str1 = "Hello Javascript";
let index = str1.indexOf("t");
console.log("The index of charcter t in "+str1+" = " +index);

//Question 2
//Program to convert minutes to seconds
let min=30;
let min_to_sec=min*60;
console.log("Number of seconds in "+min+ " minutes = " +min_to_sec+" seconds");

//Question 3
//Program to search for a element in a array of string
let Planguages=["Java","C","C++","Python","Javascript","PHP"];
let a=Planguages.includes("Max of Payen");

if (a==true){
	console.log(" Yes!! The language is in the list.");
}
else {
	console.log(" Sorry!! The language is not in the list");
}
//Question 4
//Program to display only elements containing 'a' in them from a array
let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log("The elements containing character 'a':");
for (let i=0;i<month.length;i=i+1){
	if (month[i].includes('a')==true) {
		console.log(month[i]); }
    }
//Question 5
//Print an array in reverse order
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
days.reverse();
console.log(days);