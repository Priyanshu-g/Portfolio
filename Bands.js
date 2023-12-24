function band4(){
  a = document.getElementById("fourBand1").value
  b = document.getElementById("fourBand2").value
  c = document.getElementById("fourBand3").value
  type = document.getElementById("typeRes").value
  astr = a.toString();
  bstr = b.toString();
  cstr = c.toString();
  resBase = astr + bstr + cstr
  val = parseInt(resBase);
  holdPercent = document.getElementById("fourBand4").value
  holdPercent = holdPercent/100
  holdPerVal = holdPercent * val
  tolerUp = val + holdPerVal
  tolerDown = val - holdPerVal
  resBaseF = nFormatter(val, resBase.length)
  tolerUpF = nFormatter(tolerUp, tolerUp.toString().length)
  tolerDownF = nFormatter(tolerDown, tolerDown.toString().length)
  resBaseC = val.toLocaleString()
  tolerUpC = tolerUp.toLocaleString()
  tolerDownC = tolerDown.toLocaleString()

  if (type == "F"){
    document.getElementById("4BandRes").innerHTML = "&nbsp&nbspBase: " + resBaseF + " &#8486;<br>&nbsp&nbspTolerance: " + tolerDownF + " &#8486; & " + tolerUpF + " &#8486;"
  }

  if (type == "C"){
    document.getElementById("4BandRes").innerHTML = "&nbsp&nbspBase: " + resBaseC + " &#8486;<br>&nbsp&nbspTolerance: " + tolerDownC + " &#8486; & " + tolerUpC + " &#8486;"
  }
}

function band5(){
  a = document.getElementById("fiveBand1").value
  b = document.getElementById("fiveBand2").value
  c = document.getElementById("fiveBand3").value
  d = document.getElementById("fiveBand4").value
  type = document.getElementById("typeRes").value
  astr = a.toString();
  bstr = b.toString();
  cstr = c.toString();
  dstr = d.toString();
  resBase = astr + bstr + cstr + dstr
  val = parseInt(resBase);
  holdPercent = document.getElementById("fiveBand5").value
  holdPercent = holdPercent/100
  holdPerVal = holdPercent * val
  tolerUp = val + holdPerVal
  tolerDown = val - holdPerVal
  resBaseF = nFormatter(val, resBase.length)
  tolerUpF = nFormatter(tolerUp, tolerUp.toString().length)
  tolerDownF = nFormatter(tolerDown, tolerDown.toString().length)
  resBaseC = val.toLocaleString()
  tolerUpC = tolerUp.toLocaleString()
  tolerDownC = tolerDown.toLocaleString()

  if (type == "F"){
    document.getElementById("5BandRes").innerHTML = "&nbsp&nbspBase: " + resBaseF + " &#8486;<br>&nbsp&nbspTolerance: " + tolerDownF + " &#8486; & " + tolerUpF + " &#8486;"
  }

  if (type == "C"){
    document.getElementById("5BandRes").innerHTML = "&nbsp&nbspBase: " + resBaseC + " &#8486;<br>&nbsp&nbspTolerance: " + tolerDownC + " &#8486; & " + tolerUpC + " &#8486;"
  }
}

function band6(){
  a = document.getElementById("sixBand1").value
  b = document.getElementById("sixBand2").value
  c = document.getElementById("sixBand3").value
  d = document.getElementById("sixBand4").value
  e = document.getElementById("sixBand6").value
  type = document.getElementById("typeRes").value
  astr = a.toString();
  bstr = b.toString();
  cstr = c.toString();
  dstr = d.toString();
  resBase = astr + bstr + cstr + dstr
  val = parseInt(resBase);
  holdPercent = document.getElementById("sixBand5").value
  holdPercent = holdPercent/100
  holdPerVal = holdPercent * val
  tolerUp = val + holdPerVal
  tolerDown = val - holdPerVal
  resBaseF = nFormatter(val, resBase.length)
  tolerUpF = nFormatter(tolerUp, tolerUp.toString().length)
  tolerDownF = nFormatter(tolerDown, tolerDown.toString().length)
  resBaseC = val.toLocaleString()
  tolerUpC = tolerUp.toLocaleString()
  tolerDownC = tolerDown.toLocaleString()

  if (type == "F"){
    document.getElementById("6BandRes").innerHTML = "&nbsp&nbspBase: " + resBaseF + " &#8486;<br>&nbsp&nbspTolerance: " + tolerDownF + " &#8486; & " + tolerUpF + " &#8486;<br>&nbsp&nbspTCR: " + e
  }

  if (type == "C"){
    document.getElementById("6BandRes").innerHTML = "&nbsp&nbspBase: " + resBaseC + " &#8486;<br>&nbsp&nbspTolerance: " + tolerDownC + " &#8486; & " + tolerUpC + " &#8486;<br>&nbsp&nbspTCR: " + e
  }
}

//not made by me
function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: " k" },
    { value: 1E6, symbol: " M" },
    { value: 1E9, symbol: " B" },
    { value: 1E12, symbol: " T" },
    { value: 1E15, symbol: " P" },
    { value: 1E18, symbol: " E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

function resiWant(){
res=""
current=""
  type = document.getElementById("resiWantUnit").value
  before = document.getElementById("resiWant").value
  want = 0;
  if (type=="T"){
    want = before*1000000000000
  }
  if (type=="G"){
    want = before*1000000000
  }
  if (type=="M"){
    want = before*1000000
  }
  if (type=="k"){
    want = before*1000
  }
  if (type=="base"){
    want = before
  }
  wantA = want.toString().split("");
  wantA = wantA.map(Number)
  if (wantA.length==0 ||	wantA[0]==0 || wantA.length==1){
    document.getElementById("resiWantRes").innerHTML="Please enter value or not possible"
    return
  }
  if (wantA.length>=4){
      for (i=3; i<wantA.length; i++){
        holdb=wantA[i]
        if(holdb!=0){
          document.getElementById("resiWantRes").innerHTML="Please enter value or not possible"
          return
        }
      }
  }
  if (wantA.length==2 || wantA.length==3){
    for (i=0; i<wantA.length; i++){
      current = wantA[i];
      if (i==wantA.length - 1){
        break;
      }
      if (current == 0){
        res += "Black, "
      }
      if (current == 1){
        res += "Brown, "
      }
      if (current == 2){
        res += "Red, "
      }
      if (current == 3){
        res += "Orange, "
      }
      if (current == 4){
        res += "Yellow, "
      }
      if (current == 5){
        res += "Green, "
      }
      if (current == 6){
        res += "Blue, "
      }
      if (current == 7){
        res += "Violet, "
      }
      if (current == 8){
        res += "Grey, "
      }
      if (current == 9){
        res += "White, "
      }
    }
    rent = wantA[wantA.length - 1];
        if (rent == 0){
          res += "Black"
        }
        if (rent == 1){
          res += "Brown"
        }
        if (rent == 2){
          res += "Red"
        }
        if (rent == 3){
          res += "Orange"
        }
        if (rent == 4){
          res += "Yellow"
        }
        if (rent == 5){
          res += "Green"
        }
        if (rent == 6){
          res += "Blue"
        }
        if (rent == 7){
          res += "Violet"
        }
        if (rent == 8){
          res += "Grey"
        }
        if (rent == 9){
          res += "White"
        }
        document.getElementById("resiWantRes").innerHTML=res
        return
  }


  if (wantA.length>=4){
    current = wantA[0];
    if (current == 0){
        res += "Black, "
      }
      if (current == 1){
        res += "Brown, "
      }
      if (current == 2){
        res += "Red, "
      }
      if (current == 3){
        res += "Orange, "
      }
      if (current == 4){
        res += "Yellow, "
      }
      if (current == 5){
        res += "Green, "
      }
      if (current == 6){
        res += "Blue, "
      }
      if (current == 7){
        res += "Violet, "
      }
      if (current == 8){
        res += "Grey, "
      }
      if (current == 9){
        res += "White, "
      }
      wantA.shift()


      current = wantA[0];
    if (current == 0){
        res += "Black, "
      }
      if (current == 1){
        res += "Brown, "
      }
      if (current == 2){
        res += "Red, "
      }
      if (current == 3){
        res += "Orange, "
      }
      if (current == 4){
        res += "Yellow, "
      }
      if (current == 5){
        res += "Green, "
      }
      if (current == 6){
        res += "Blue, "
      }
      if (current == 7){
        res += "Violet, "
      }
      if (current == 8){
        res += "Grey, "
      }
      if (current == 9){
        res += "White, "
      }
      wantA.shift()


      current = wantA[0];
    if (current == 0){
        res += "Black, "
      }
      if (current == 1){
        res += "Brown, "
      }
      if (current == 2){
        res += "Red, "
      }
      if (current == 3){
        res += "Orange, "
      }
      if (current == 4){
        res += "Yellow, "
      }
      if (current == 5){
        res += "Green, "
      }
      if (current == 6){
        res += "Blue, "
      }
      if (current == 7){
        res += "Violet, "
      }
      if (current == 8){
        res += "Grey, "
      }
      if (current == 9){
        res += "White, "
      }
      wantA.shift()


      current = wantA.length;
      console.log(current);
      if (current == 0){
        res += "Black"
      }
      if (current == 1){
        res += "Brown"
      }
      if (current == 2){
        res += "Red"
      }
      if (current == 3){
        res += "Orange"
      }
      if (current == 4){
        res += "Yellow"
      }
      if (current == 5){
        res += "Green"
      }
      if (current == 6){
        res += "Blue"
      }
      if (current == 7){
        res += "Violet"
      }
      if (current == 8){
        res += "Grey"
      }
      if (current == 9){
        res += "White"
      }
      if (current > 9){
        document.getElementById("resiWantRes").innerHTML="Number too big"
        return
      }
      document.getElementById("resiWantRes").innerHTML=res
      return
  }
}