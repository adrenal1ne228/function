display();

function display(){
    console.log('Bomj');
}

let aaa = function(){
    console.log('Emil bomj');
}

aaa();

function ha(x){
    let z = x*x;
    console.log(z);
}
ha(7);  

function display(x = 5, y = 10){
    let z = x * y;
    console.log(z);
}

display();
display(6);
display(6, 4);

function square(x) {
    return x*x;
}

console.log(square(5));
console.log(square(3));

function xnkal(a){
    return a*a;
}
console.log(xnkal(3));

function a (x){
    if(x>=0){
        console.log('True');
    }
    else{
        console.log('False');
    }
}
a(3);
a(-1);

function bomj (a, b, c){
    let res = a + b + c;
    console.log(res);
}
bomj(1,2,3);

let res=0;

function g (arr=[]){
    for(let i=0; i<arr.length; i++){
        res = res+arr[i];
    }
    console.log(res);
}
g([1,2,3,4]);