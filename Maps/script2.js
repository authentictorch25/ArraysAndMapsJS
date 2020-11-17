let map = new Map();

for(let i=1;i<=50;i++){
	let month = Math.floor(Math.random()*23 +1);
	if(!map.has(month)){
		let arr = new Array(i);
		map.set(month,arr);
	}else{
		let arr = map.get(month);
		arr.push(i);
		map.set(month,arr);
	}
}
console.log(map);

let itr = map.keys();

for(let i=0;i<map.size;i++){
	let key = itr.next().value;
	let arr = map.get(key);
	let values = "";
	for(let num in arr){
		values += (num+"  ");
	}
	console.log(key+"---> "+ values);