document.getElementById("button1").addEventListener("click", getApi);
function getApi() {
  fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json").then((response) => {
    response.json().then((data) => {
      // console.log(data);
      let result = "";
      for(var x in data)
{
  result+=data[x].language+" ";  
 
}
console.log(result);
     
      document.getElementById("output").innerHTML = result;
    });
  });
}

