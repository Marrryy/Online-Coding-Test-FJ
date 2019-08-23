// record:
// ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
// answer:
// ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]

function solution(record) {
  var answer=[], name=[];

  console.log(record)

  for(i=0; i<record.length ;i++){
    const split = record[i].split(" ");

    let save={
      cmd:split[0],
      id:split[1],
      name:split[2]
    }
    // if we find same uid with change or enter new nick we will change it    
    //testing for changing name 
    //find 1 one of this .if same replace
    if(save.cmd === "Change" || save.cmd === "Enter"){

      for(i=0; i<name.length ;i++){
        if(name[i].id === save.id ){
          name[i].name = save.name
        }
      }

    }
    name.push(save);
  }
  
  for(i=0; i<name.length ;i++){

    switch (name[i].cmd){
      case "Enter":
        answer.push(name[i].name+" came in.")
        break;
      case "Leave":
        answer.push(name[i].name+" has left.");
        break;
      default:
        break;
    }
  }

  return answer;
}
