let arr = new Array();
let sum = 0;
for(let i=1;i<=3;i++){
	let coin = Math.floor(Math.random()*1000)%2;
	if(coin%2){
		arr.push(Math.floor(Math.random()*100));
	}else{
		arr.push(Math.floor(Math.random()*100)*-1);
	}
}
for(let num of arr){
	sum+=num;
	console.log(num);
}
console.log("Sum is: "+sum);