module.exports = function multiply(first, second) {
a = first.split('');
 b = second.split('');
 res = [];
 for(i=a.length-1;i>=0;i--){ 
  let temp = []
  for(j=b.length-1;j>=0;j--){
   let m = b[j]*a[i];
   temp.unshift(m);
  }
  temp.reverse().forEach(function(val,ind,arr){
   arr[ind] = String(val);
   if(arr[ind+1] && arr[ind].length > 1){
    arr[ind+1] += +arr[ind].slice(0,-1);
    arr[ind] = arr[ind].slice(-1);
   } else if(!arr[ind+1] && arr[ind].length > 1){
    arr[ind+1] = +arr[ind].slice(0,-1);
    arr[ind] = arr[ind].slice(-1);
   }   
  })
  res.push(temp.reverse().join(''));
  temp = [];  
  a.splice(a.length-1);
 } 
 

 
 for(i=0;i<res.length;i++){
 res[i] = res[i] + '0'.repeat(i) 
 res[i] = res[i].split('').reverse().join('')
 }
 


 var sum = [];

console.log(res)
 
for(var j=res[res.length-1].length-1;j>=0;j--){

 var tmp = 0
 for(var i=res.length-1;i>=0;i--){  
  tmp += +res[i][j] || 0;
 }
 sum.unshift(tmp)
 console.log(sum)
}

 
 
 
 /*
 for(i=res.length-1;i>=0;i--){
 let tmp = 0;
 for(j=0;j<res.length;j++){
  tmp += +res[j][i] || +'0';
  
 }
 sum.push(tmp)
 }
 */


 sum.forEach(function(val,ind,arr){
 arr[ind] = String(val);
 if(arr[ind+1] && arr[ind].length > 1){
    arr[ind+1] += +arr[ind].slice(0,-1);
    arr[ind] = arr[ind].slice(-1);
   } else if(!arr[ind+1] && arr[ind].length > 1){
    arr[ind+1] = +arr[ind].slice(0,-1);
    arr[ind] = arr[ind].slice(-1);
   }
 }
 )
 
 sum.reverse();
 return sum.join('')

}