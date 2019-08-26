// A Candidate Key is an attribute or a set of attributes that can uniquely identify a tuple of a relation in the relational database and satisfies the following two properties.
// - Uniqueness: The relation does not have two distinct tuples (i.e. rows or records in common database language) with the same values for these attributes.
// - Minimality: There should no subset of these attributes satisfy uniqueness, which means if we exclude one of these attributes, then uniqueness will be broken.

// (1) ["student number"] can be the candidate key of the relation. 
// (x) "name" can not be a candidate key.
// (2) ["name", "major"], all the tuples can be uniquely identified.
// (x) ["name", "major", "grade"],  because it does not satisfy the minimum.

// Therefore, the candidate key is ["student number"], ["name", "major"].


function kombinasi(n,k){
  var komb=1; 

  for(i=n; i>n-k; i--){
    komb = komb*i; 
  }
  for(i=1; i<=k; i++){
    komb = komb/i; 
  }
  return komb;
}

// This function only for 1 & 2 Tuples Combinations
function flattingArr(canKeys){
  return canKeys.reduce((total,x)=> {
    if(Array.isArray(x)){
      return total.concat(x);
    }
    total.push(x);
    return total;
  }, [])
}


function solution(relation) {
  var answer = 0;
  // leng=0, kombinasis= [0,0,0,0,0,0,0,0];

  // search combination for 1,2,3 -8 tuples
  // for(i=1; i<relation[0].length+1; i++){
  //   leng+= kombinasi(relation[0].length,i);
      
  //   if(i>1){
  //     const behind = kombinasis[i-1];
  //     const added = kombinasi(relation[0].length,i);
  //     const a = behind + added;
  //     kombinasis.splice(i-1 ,1, a);
  //   }else{
  //     kombinasis.splice(i-1 ,1, kombinasi(relation[0].length,i));
  //   }
  // }

  //CHECKING WITH 1 SLOT ONLY
  var count = 0, count1=0, canKeys=[];
  for(h=0;h<relation[0].length;h++){
    count = 0;
    count1 = 0;
    for(i=0; i<relation.length-1; i++){
      for(j=i; j<relation.length-1; j++){
        count1+= 1
        if(relation[i][h]!=relation[j+1][h]){
          count+= 1;
        }

      }
    }
    if(count === count1){
      canKeys.push(h);      
    }
  }


  //CHECKING WITH 2 SLOT ONLY
  count = 0, count1=0;
  for(h=0;h<relation[0].length-1;h++){
    
    if(!flattingArr(canKeys).includes(h)){
      for(k=h;k<relation[0].length-1;k++){
        if(!flattingArr(canKeys).includes(k+1)){
          count = 0;
          count1 = 0;
          for(i=0; i<relation.length-1; i++){
            for(j=i; j<relation.length-1; j++){
              count1+= 1
              if(relation[i][h]!=relation[j+1][h] || relation[i][k+1]!=relation[j+1][k+1]){
                count+= 1;
              }

            }
          }
          if(count === count1){
            canKeys.push([h,k+1]);
            break;      
          }
        }
      }
    }
  }
  
  console.log(canKeys)
  
  // This function only for 1 & 2 Tuples Combinations
  answer = canKeys.length;
  console.log(answer)
  return answer;
}