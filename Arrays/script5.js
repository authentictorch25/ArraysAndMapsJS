function check(x){
	x = x.toString();
	if(x.length==1){
		return false;
	}
	x = parseInt(x);
	let target = x%10;
	while(x>0){
		digit = x%10;
		if(digit!=target){
			return false;
		}
		x/=10;
		x = Math.floor(x);
	}
	return true;
}

let arr = new Array();

for(let i=0;i<=100;i++){
	if(check(i))
		arr.push(i);
}
for(let num of arr){
	console.log(num);
}