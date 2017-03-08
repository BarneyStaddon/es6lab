//script.js

//http://es6-features.org

console.log('We are off')

////////////////////////////////////////////////////////////////////////////////

// Constants

///////////////////////////////////////////////////////////////////////////////

const PI = 3.141593
console.log(PI > 3)



////////////////////////////////////////////////////////////////////////////////

// Block scoped variable

////////////////////////////////////////////////////////////////////////////////


let a = ['this', 'that', 'and', 'the', 'other']

for (let i = 0; i < a.length; i++){
	let x = a[i]
	console.log('x:' + x)
}

//console.log('x:' + x) // not defined
//console.log('i:' + i) // not defined
console.log('a:' , a) //defined

let callbacks = []
for (let i = 0; i <= 2; i++) {
	//note - a copy of i is kept in each function
	//so no need to use a promise
	callbacks[i] = function () { return i * 2 }
}

console.log(callbacks[0]())
console.log(callbacks[1]())
console.log(callbacks[2]())



////////////////////////////////////////////////////////////////////////////////

// Block scoped functions

////////////////////////////////////////////////////////////////////////////////

{
	function foo() { return 1 }

	console.log('foo(): ' + foo())

	{
		function foo() { return 2 }
		console.log('foo(): ' + foo())
	}

	console.log('foo(): ' + foo())
}



////////////////////////////////////////////////////////////////////////////////

// Arrow functions - expression bodies

////////////////////////////////////////////////////////////////////////////////

let odds, pairs, nums 
	evens = [2,4,6,8,10,12,14,16,18,20]

//single param wth expression - no braces required
odds = evens.map(v => v + 1)

console.log('odds:' ,odds)

//single param, returning an object literal (brackets required) 
pairs = evens.map(v => ({ even: v, odd: v + 1}))

console.log('pairs:' , pairs)

//double params - second being the index
nums = evens.map((v,i) => v + i)

console.log('nums:' , nums)

//no params so need empty brackets
nums = evens.map(() => 2 + 2)

console.log('nums:' , nums)



////////////////////////////////////////////////////////////////////////////////

// Arrow functions - statement bodies

////////////////////////////////////////////////////////////////////////////////


let fives = [],
	numsAgain = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

numsAgain.forEach(v => {
	if(v % 5 === 0)
		fives.push(v)
})

console.log('fives' , fives);


////////////////////////////////////////////////////////////////////////////////

// Arrow functions - lexical this

////////////////////////////////////////////////////////////////////////////////


function Person(){
	this.age = 0

	setTimeout(() => {
		//'this' refers to the person object as it should do, rather than the context of the timer callback 
		this.age++
		console.log('this.age',this.age)
	},1000)
} 

let p = new Person()



////////////////////////////////////////////////////////////////////////////////

// Extended parameter handling - default parameter values

////////////////////////////////////////////////////////////////////////////////

function f(x, y = 7, z = 42) {
	return x + y + z
}

console.log('f(1)', f(1))



////////////////////////////////////////////////////////////////////////////////

// Extended parameter handling - rest parameter

////////////////////////////////////////////////////////////////////////////////

function f(x, y, ...a) {

	//1 + 2 * 3 
	//N.B 'a' is a rest paramter which is an instance of an array and can be used exactly like an array
	//In this case it holds 3 arguments 
	return (x + y) * a.length
}

console.log( 'f(1,2 "hello", true, 7)' , f(1,2, "hello", true, 7) )



////////////////////////////////////////////////////////////////////////////////

// Extended parameter handling - spread operator 

////////////////////////////////////////////////////////////////////////////////

var params = ["hello", true, 7]
//the spread operator simply puts the elements of 'params' into 'other'
var other = [1,2, ...params]

console.log('other', other)
//the spread operator simply takes the elements of params ands passes them as params 
console.log('f(1,2, ...params)', f(1,2, ...params))  

var str = "foo"
var chars = [...str]

//here elements of a string are 'spread' instead
console.log('chars', chars)



////////////////////////////////////////////////////////////////////////////////

// Template literals - string interpolation

////////////////////////////////////////////////////////////////////////////////

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

//Intuitive expression interpolation for single-line and multi-line strings
console.log(message)


////////////////////////////////////////////////////////////////////////////////

// Template literals - custom interpolation

//////////////////////////////////////////////////////////////////////////////// 

//Flexible expression interpolation for arbitrary  
//get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`


////////////////////////////////////////////////////////////////////////////////

// Template literals - raw string access

//////////////////////////////////////////////////////////////////////////////// 

function quux(strings, ...values){
	console.log('strings[0]', strings[0])
	console.log('strings[1]', strings[1])
	console.log('strings.raw[0]', strings.raw[0])
	console.log('strings.raw[1]', strings.raw[1])
	console.log('values[0]', values[0])
}

//access the raw template string content
quux `foo\n${ 42 }bar`

console.log('String raw test', String.raw `foo\n${42}bar`)


////////////////////////////////////////////////////////////////////////////////

// Enhanced object properties - property shorthand

////////////////////////////////////////////////////////////////////////////////  

var x = 'Hi'
var y = 'there'
var obj = {x,y}

console.log('obj', obj)


////////////////////////////////////////////////////////////////////////////////

// Enhanced object properties - computed property names

////////////////////////////////////////////////////////////////////////////////

let obj2 = {
	foo: "bar",
	[ "baz" + "that" ] : 42
}

console.log('obj', obj2)



////////////////////////////////////////////////////////////////////////////////

// Enhanced object properties - enhanced object properties

////////////////////////////////////////////////////////////////////////////////


//support for method notation in object property definitions 

let obj3 = {
	
	foo(a, b){

	},
	
	bar(x,y){

	},
	
	*quux(x,y){

	} 
}

//This is the same as
let obj4 = {

	foo: function(a,b){

	},

	bar: function(x,y){

	}
}

console.log('obj3', obj3)
console.log('obj4', obj4)



////////////////////////////////////////////////////////////////////////////////

// Destructuring Assignment - array matching

////////////////////////////////////////////////////////////////////////////////

var list = [1,2,3]
var [foo2,,foo3] = list

//intuitive and flexible destructuring of Arrays into individual variables during assignment
//We now have 2 variables, foo2 and foo3 with 1 and 3 assigned to them respectively   
console.log('foo2', foo2)
console.log('foo3', foo3)







