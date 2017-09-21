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
    arr[ind+1] += +arr[ind][0];
    arr[ind] = arr[ind][1];
   }
  })
  res.push(temp.reverse().join(''));
  temp = [];  
  a.splice(a.length-1);
 } 
 
 for(i=0;i<res.length;i++){
 res[i] = '0'.repeat(res.length - 1 - i) + res[i] + '0'.repeat(i)
 }
 
 var sum = [];
 
 for(i=res[0].length-1;i>=0;i--){
 let tmp = 0;
 for(j=0;j<res.length;j++){
  tmp+= +res[j][i]
 }
 sum.push(tmp)
 }

 sum.forEach(function(val,ind,arr){
 arr[ind] = String(val);
 if(arr[ind+1] && arr[ind].length > 1){
  arr[ind+1] += +arr[ind][0];
  arr[ind] = arr[ind][1];
  }
 }
 )
 
 sum.reverse();
 return sum.join('')

}
