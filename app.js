function innerFunction(){
	console.log("Hello World From Inner Function");
}
function outerFunction(f){
	f();
}
outerFunction(innerFunction);