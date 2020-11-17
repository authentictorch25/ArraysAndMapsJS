let map = new Map();
while(true){
	let dice = Math.floor(Math.random()*6 +1 );
	if(!map.has(dice)){
		map.set(dice,1);
	}else{
		let freq = map.get(dice);
		if(freq>=10){
			break;
		}else{
			map.set(dice,freq+1);
		}
	}
}
console.log(map);