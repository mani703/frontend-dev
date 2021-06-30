/*
 4. default parameter
 */

 const print = function(strs, e='\n'){
     console.log(strs.join(e));
}

console.log("1)");
print(['Always', 'with', 'me']);

console.log("2)");
print(['Always', 'with', 'me'], ' ');