let arr = new Array();
for(let i =1;i<=3;i++){
	let temp = Math.floor(Math.random()*900 + 100);
	arr.push(temp);
	console.log(temp);
}
let target = 0;
if((arr[0]>=arr[1]) && (arr[0]<=arr[2])){
	target = arr[0];
}else if((arr[0]<=arr[1]) && (arr[0]>=arr[2])){
        target = arr[0];
}else if((arr[1]>=arr[0]) && (arr[1]<=arr[2])){
        target = arr[1];
}else if((arr[1]<=arr[0]) && (arr[1]>=arr[2])){
        target = arr[1];
}else{
	target = arr[2];
}
console.log("Mid element is: "+target);