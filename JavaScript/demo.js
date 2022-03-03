let person ={
    first_name:'Nilesh',
	last_name:'Kotkar',
	
	getFunction : function(){
        return ("The name of the person is " +
          person.first_name + " " + person.last_name)
}
}
	console.log(person.getFunction());


    let n = 10;
    let result = n%2==0 ? "Even" : "Odd"
    console.log(result)

    let data2 = [5, 7, 8, 9, 4]
// console.log(data2.push(2)) // add in last
// console.log(data2.pop())   // delete in last
// console.log(data2.shift()) // delete in first
// console.log(data2.unshift(1)) // add in first
console.log(data2.splice(2, 2, 15, 14))  // add new element in place of exist element
// console.log(data2.slice(2,3))
// console.log(data2)

// this keyword
let obj = {
    a : 10,
    b : 20,
    add : function(){
        return this.a + this.b;
    }
}
console.log(obj.add())

// maximum value
let sample = {
    x : 100,
    y : 150,
    max : function(){
        if(this.x>this.y){
            return this.x;
        }else{
            return this.y;
        }
    }
}
console.log(sample.max())

let ar = []
for (j=0; j<5; j++){
    ar.push(Math.floor(Math.random() * 10));
}
console.log(ar)

let fun = (a,b=null) => {
    return a+b;
}
let swag = fun(10);
console.log(swag)
