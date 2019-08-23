// N: 5
// users: [2,1,2,6,2,4,3,3]
// Stage 1 failure rate: 1/8 0.125
// Stage 2 failure rate: 3/7 0.428571429
// Stage 3 failure rate: 2/4 0.5
// Stage 4 failure rate: 1/2 0.5
// Stage 5 failure rate: 0/1 0

// Sort the number of stages by failure rate in descending order: [3,4,2,1,5]


function solution(N, users) {
// function solution() {
//   const N = 5;
//   const users= [2,1,2,6,2,4,3,3];

 
  var answer = [], people,  rate=[];
  people= users.length;

  for(i=1; i<N+1; i++){
    let count = 0, score = 0;
    // Checking People

    if(people > 0){
    
      // count people who has same score 
      for(j=0; j<users.length; j++){
        if(i === users[j]){
          count += 1;
        }
      }
      
      // same score / people
      score = count / people;

      // save the failure rate
      rate.push(score);

      // reduce people
      people = people - count;

    }
  };

  var max, index, ans;  
  for(i=1; i<rate.length+1 ;i++){
    answer.push(i);
  }
  
  for(i=0; i<rate.length-1 ;i++){ 
    max= rate[i];
    ans= answer[i];
    change=false;
    index=i;
    
    for(j=i; j<rate.length-1; j++){
      if(max < rate[j+1]){
        
        max=rate[j+1];
        index=j+1
        ans=answer[j+1]
        change=true;
        
      }
    }

    if(change){
      first = rate[i];
      second= answer[i];

      //Repalce old
      rate.splice(index,1);
      rate.splice(i,0,max);

      answer.splice(index,1);
      answer.splice(i,0,ans)

    }
  }

  console.log(answer)
  return answer;
}