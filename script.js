import data from './data.js';

function renderData(data, biggerContainerId) {

    //loop through the data.
    for (let x = 0; x < data.length; x++) {

        let content = `
           <b>Id:</b> ${data[x].id} <br>
           <b>Website name:</b> ${data[x].name} <br>
           <b>Url:</b> <a href="http://${data[x].url}"" target=_>${data[x].url}</a>  <br>
        `
        //create a new div and add the content.
        let newDiv = document.createElement('div');
        newDiv.innerHTML += content;
        //give the div a class for style and an unique id so i can determine parent-child later.
        let newDivId = newDiv.id = data[x].id
        newDiv.classList = 'website-container';
        //position the div inside the father div.
        document.getElementById(biggerContainerId).appendChild(newDiv)
        //if there is subData, call the renderData function with the new arguments if true.
        if (data[x].subData) {
            let subData = data[x].subData;
            renderData(subData, newDivId);
        }
    }
}

renderData(data, 'container')