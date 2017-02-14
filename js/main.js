

document.getElementById("button").onclick = submit





function submit(){
  var pay = document.getElementById("numOne").value;
  var hrs = document.getElementById("numTwo").value;
  pay =  (parseFloat(pay))
  hrs = (parseFloat(hrs))

  if(document.getElementById("multi").checked){
    var total = pay * hrs;
  }else if(document.getElementById("divide").checked){
    var total = pay / hrs;
  }else if(document.getElementById("add").checked){
    var total = pay + hrs;
  }else if(document.getElementById("sub").checked){
    var total = pay - hrs;
  }else if(document.getElementById("mod").checked){
    var total = pay % hrs;
  }
  document.getElementById("sum").innerHTML = total;
}










// var numsArray = [];
// var total = 0;
//
// function beautiful(multiple1,multiple2,upwardBound){
//   	for(var n=0;n<=upwardBound;n++){
// 		if (n % multiple1 === 0 || n % multiple2 === 0){
// 			numsArray.push(n);
//   	}
// 	}
//   sum(numsArray);
// }
//
// 	function sum(multiArr){
// 		multiArr.forEach(function(a){
//       total += a;
//     });
//    console.log(total);
//   }
//
// beautiful(3,5,1000);
