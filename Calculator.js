function calculatoradd(){
  $('#calButton').remove()


  hold7 = 1;
  $(".caltypes").each(function() {
    hold7++
  });


  $("#calculator").append('<div class="input-group mb-3"><input type="text" class="form-control calValue" id="calValue'+hold7+'"><div class="input-group-append"><select class="form-control caltypes" id="caltype'+hold7+'"><option value="false" selected>Type</option><option value="oct">Octal</option><option value="hex">Hexadecimal</option><option value="bi">Binary</option><option value="dec">Decimal</option></select></div></div><select class="form-control caloperations" id="caloperation'+hold7+'"><option class="form-control" value="false" selected>None</option><option class="form-control" value="+">Addition (+)</option><option class="form-control" value="-">Subtraction (-)</option><option class="form-control" value="*">Multiplication (*)</option><option class="form-control" value="/">Divison (/)</option></select><br><button type="button" class="form-control" id="calButton" onclick="calCal()">Enter</button>');
}

function resetCal(){
  document.getElementById("calculator").innerHTML='<div class="input-group mb-3"><input type="text" class="form-control calValue" id="calValue1"><div class="input-group-append"><select class="form-control caltypes" id="caltype1"><option value="false" selected>Type</option><option value="oct">Octal</option><option value="hex">Hexadecimal</option><option value="bi">Binary</option><option value="dec">Decimal</option></select></div></div><select class="form-control caloperations" id="caloperation1"><option class="form-control" value="false" selected>None</option><option class="form-control" value="+">Addition (+)</option><option class="form-control" value="-">Subtraction (-)</option><option class="form-control" value="*">Multiplication (*)</option><option class="form-control" value="/">Divison (/)</option></select><br>'
  document.getElementById("caluRes").innerHTML=""
}

function calCal(){
  equation=[]
  holdA1=0;
  holdA2=0;
  $(".caltypes").each(function() {
    holdA2++
  });
  $(".caltypes").each(function() {
    holdA1++
    value="calValue"+holdA1
    value=document.getElementById(value).value
    if (value==""){
      document.getElementById("caluRes").innerHTML="Please input values in all boxes"
      return
    }
    type="caltype"+holdA1
    type=document.getElementById(type).value
    if(type=="false"){
      document.getElementById("caluRes").innerHTML="Please select type for all values"
      return
    }
    if(type=="oct"){
      value=value.toString();
      value = parseInt(value, 8);
    }
    if(type=="hex"){
      value=value.toString();
      value = parseInt(value, 16);
    }
    if(type=="bi"){
      value=value.toString();
      value = parseInt(value, 2);
    }
    value=value.toString();
    operator="caloperation"+holdA1
    operator=document.getElementById(operator).value
    if (holdA1!=holdA2){
      if(operator=="false"){
        document.getElementById("caluRes").innerHTML="Please select select an operator for all (last not nessessary)"
      }
    }
    equation.push(value);
    if (holdA1!=holdA2){
      equation.push(operator)
    }
  });
  equationFinal=equation.join("");
  console.log(equationFinal)
  resFinal=eval(equationFinal)
  if(resFinal==undefined){
    return;
  }
  document.getElementById("caluRes").innerHTML=resFinal
}