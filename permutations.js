function permutations(string) {
  let perms = [];
  
  if (string.length == 1) return perms[string];
  
  string.split("").forEach(function (currVal, index, array){
    //check that we haven't already used the character. This avoids duplication
    if (string.indexOf(currVal) == index){
          let restOfString = array.filter(function(val, i){
            return !(i === index);
          }).join("");
          
          for (let subPerm of permutations(restOfString)){
            let newString = currVal + subPerm;
            perms = [...perms, newString];
          }
    }
  });
  return perms;
}