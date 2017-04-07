
var btns = document.getElementById("btnbg");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
input1.onblur = function(){
	  if(input1.value.length==0&&input2.value.length==0){
		btns.style.backgroundColor="#fff";
      }else{
		btns.style.backgroundColor="blue";
      }
}
