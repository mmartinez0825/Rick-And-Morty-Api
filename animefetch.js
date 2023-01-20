function GetData() {
  let dropDown = document.getElementById("DropDown");
  let displayFetch = document.getElementById("api data");
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      //For loop for the dropdown
      for (let i = 0; i < data.length; i++) {
        let opt = document.createElement("option");
        opt.textContent = data[i].results.name;
        opt.value = data[i].results.name;
        dropDown.appendChild(opt);
      }

      // characters data info
      let message = `${data.results[0].name}
${data.results[0].origin.name} <br>
<img src ="https://rickandmortyapi.com/api/character/avatar/1.jpeg"> <br><br>

${data.results[1].name} <br>
${data.results[1].origin.name} <br>
<img src ="https://rickandmortyapi.com/api/character/avatar/2.jpeg"><br><br>

${data.results[2].name} <br>
${data.results[2].origin.name} <br>
<img src ="https://rickandmortyapi.com/api/character/avatar/3.jpeg"><br><br>

${data.results[3].name} <br>
${data.results[3].origin.name} <br>
<img src ="https://rickandmortyapi.com/api/character/avatar/4.jpeg">`;
      displayFetch.innerHTML = loopThruData(data);
    });
}
GetData();

// fetch with loop
// function GetData() {
//   let displayFetch = document.getElementById("api data");
//   let baseURL = "https://rickandmortyapi.com/api/character";

//   fetch(baseURL)
//     .then((response) => response.json())
//     .then(function (data) {
//        displayFetch.innerHTML = loopThruData(data);
//      // displayFetch.innerHTML = data.results[0].name;
//     });
// }
// GetData();
// // loop
// const loopThruData = (data) => {
//   let displayData = "";

//   return `${data.results[0].name}`;
//   // for (let i = 0; i < data.length; i++) {
//   //   displayData += `
//   // Name: ${data.results[i].name}
//   // Origin: ${data.results[i].origin.name} </div> <br> <br>`;
//   // }
//   return displayData;
// }
