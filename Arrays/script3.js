let num = 4996;
let num1 = num;
let arr = new Array();
for(let i=2;i<=Math.sqrt(num1);i++){
	while(num%i==0){
		arr.push(i);
		num/=i;
	}
}
if(num!=1){
	arr.push(num);
}
for(let temp of arr){
	console.log(temp);
}
