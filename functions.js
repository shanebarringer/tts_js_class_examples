var a = [1,2,3,4,5,6];

var myNewArray = [];
a.filter(function(item){
  return item%2;
}).reduce(function(sum,item){
  return sum + item; 
},0)

console.log(filteredArray)
