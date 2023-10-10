function add(a,b=9){
    return a+b
}

console.log(add(5,null));

n = (a,b) => {return a+b}
console.log(n(4,5))

n = function() {
    console.log("hi")
}
n()