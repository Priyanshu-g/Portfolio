function setUpOhm()
{
  wanted = document.getElementById('findOhm').value
  output = document.getElementById('ohmmIntake')
  $('#ohmmIntake').show();
  if(wanted=='error'){
    output.innerHTML = 'Please select a value'
  }
  var volt = "'volt'"
  if(wanted=='volt'){
    output.innerHTML = '<input type="number" placeholder="Voltage" class="form-control" id="finalvol" disabled></input>&nbsp=&nbsp<input type="number" placeholder="Current" class="form-control" oninput="calOhm('+volt+')" id="volCur"></input>&nbsp*&nbsp<input type="number" placeholder="Resistance" class="form-control" oninput="calOhm('+volt+')" id="volRes"></input>'
  }
  var curr = "'curr'"
  if(wanted=='curr'){
    output.innerHTML = '<input type="number" placeholder="Current" class="form-control" id="finalcur" disabled></input>&nbsp=&nbsp<input type="number" placeholder="Voltage" class="form-control" oninput="calOhm('+curr+')" id="curVol"></input>&nbsp/&nbsp<input type="number" placeholder="Resistance" class="form-control" oninput="calOhm('+curr+')" id="curRes"></input>'
  }
  var resi = "'resi'"
  if(wanted=='resi'){
    output.innerHTML = '<input type="number" placeholder="Resistance" class="form-control" id="finalres" disabled></input>&nbsp=&nbsp<input type="number" placeholder="Voltage" class="form-control" oninput="calOhm('+resi+')" id="resVol"></input>&nbsp/&nbsp<input type="number" placeholder="Current" class="form-control" oninput="calOhm('+resi+')" id="resCur"></input>'
  }
}

function calOhm(x)
{
  if (x=="volt"){
    var current = document.getElementById('volCur').value
    var resistance = document.getElementById('volRes').value
    document.getElementById('finalvol').placeholder =(current*resistance)
  }
  if (x=="resi"){
    var current = document.getElementById('resCur').value
    var voltage = document.getElementById('resVol').value
    document.getElementById('finalres').placeholder =(voltage/current)
  }
  if (x=="curr"){
    var voltage = document.getElementById('curVol').value
    var resistance = document.getElementById('curRes').value
    document.getElementById('finalcur').placeholder =(voltage/resistance)
  }
}