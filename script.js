function ratechange()
{
  var rchng = document.getElementById("rate").value;
  document.getElementById("rate-displayer").innerHTML = rchng + '%';
}
function compute()
{
  var p = document.getElementById("principal").value;
  if(p<=0)
  {
    alert("enter a positive number greater than zero");
    document.getElementById("prinicipal").focus();
    document.getElementById("prinicipal").click();
    return null;
  }
  var r = document.getElementById("rate").value;
  var y =document.getElementById("years").value;
  console.log(y);
  var interest = p*r*y/100;
  console.log(p*r);
  var ndate = new Date();
  newdate = ndate.getFullYear();
  newdate+= parseInt(y);
  document.getElementById("result").innerHTML = " If you deposit " + p + " at an interest rate of " + r +'% , ' + "you will receive an amount of " +interest + " by the year " +newdate ;
}
