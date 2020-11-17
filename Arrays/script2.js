let arr = new Array();
for(let i =1;i<=3;i++){
        let temp = Math.floor(Math.random()*900 + 100);
        arr.push(temp);
        console.log(temp);
}
arr.sort();
console.log("Mid element is: "+arr[1]);