function toggleBF(){
  current=document.getElementById('current-equation').value
  $('.BFpage').hide();
  $('#'+current).show();
}
function drawChart() {
  if (document.getElementById('current-equation').value=='standard'){
    output=createTableStand()
    dataArray = output[0]
    title=output[1]
  }
  if (document.getElementById('current-equation').value=='vertex'){
    output=createTableVer()
    dataArray = output[0]
    title=output[1]
  }
  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    title: "y = "+title,
    hAxis: {title: 'X'},
    vAxis: {title: 'Y'},
    zoomLevel: 30,
    explorer: {
      axis: 'horizontal',
      keepInBounds: true,
      maxZoomIn: 10.0
    },
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div_'+document.getElementById('current-equation').value));

  chart.draw(data, options);
}

function createTableStand(){
  dataArray=[['X','Y']]
  a=document.getElementById('bfStandardA').value
  b=document.getElementById('bfStandardB').value
  c=document.getElementById('bfStandardC').value
  a=parseFloat(a)
  b=parseFloat(b)
  c=parseFloat(c)
  for(i=-100;i<=100;i++){
    squa=Math.pow(i,2);
    one=a*squa
    two=b*i
    yValue=one+two+c
    dataArray[i+101]=[i,yValue]
  }
  if(a==0&&b==0){
    title=c
  }
  else if(a==0&&c==0){
    title=b+'x'
  }
  else if(b==0&&c==0){
    title=a+"x^2"
  }
  else if(a==0){
    title=b+'x+'+c
  }
  else if(b==0){
    title=a+"x^2+"+c
  }
  else if(c==0){
    title=a+"x^2+"+b+'x'
  }
  else{
    title=a+"x^2+"+b+'x+'+c
  }
  return [dataArray, title]
}
function createTableVer(){
  dataArray=[['X','Y']]  
  a=document.getElementById('bfVerA').value
  h=document.getElementById('bfVerH').value
  k=document.getElementById('bfVerK').value
  a=parseFloat(a)
  h=parseFloat(h)
  k=parseFloat(k)
  for(i=-100;i<=100;i++){
    yValue=i-h
    yValue=Math.pow(yValue,2);
    yValue=yValue*a
    yValue=yValue+k
    dataArray[i+101]=[i,yValue]
  }
  if(a==0&&h==0){
    title=k
  }
  else if(a==0&&k==0){
    title=0
  }
  else if(h==0&&k==0){
    title=a+"x^2"
  }
  else if(a==0){
    title=k
  }
  else if(h==0){
    title=a+"x^2+"+k
  }
  else if(k==0){
    title=a+'(x-'+h+')^2'
  }
  else{
    title=a+"(x-"+h+")^2+"+k
  }
  return [dataArray, title]
}