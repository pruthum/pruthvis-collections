var fruits = new Array("Apple","mango","kiwi","pear");
document.write(fruits)
console.log(fruits)


var veggies=["tomato","potato","brinjal","carrot"]
document.write(veggies)
console.log(veggies)

var dairy=["milk","butter","cheese","yogurt"]

// fruits.pop();
// console.log(fruits)

// fruits.shift();
// console.log(fruits)

fruits.push("berry")
fruits.unshift("pomo")
console.log(fruits)


fruits.splice(1,0,"orange")
console.log(fruits)

// fruits.splice(1,3)
// console.log(fruits)


var test=fruits.sort();
console.log(test)

var basket = fruits.concat(veggies,dairy)
console.log(basket);


var num=["1","58","5","250","67","72","27","1000"]
console.log(num)
var test1=num.sort(reverse);
console.log(test1)

function reverse(a,b){
	return b-a;
}

var over25=num.filter(myfun)
function myfun(value,index,Array) {
	return value>25
}
console.log(over25)


var over50=num.filter((value,index,array)=>{
	return value>50;
})
console.log(over50)


var users=["anu","manu","tanu","tanu","anu","anu"]
var duplicate =users.filter((value,index,array)=>{
	return array.indexOf(value)===index;
});
console.log(users)
console.log(duplicate)
