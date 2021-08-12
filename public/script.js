/*
    API Project 2 - NASA API selected
    API Key: ezYsQEwxtd6xWCyvWaKifwQHYgpjeOVrPfpBFMI4
    Main URL: https://api.nasa.gov/planetary/apod?api_key=ezYsQEwxtd6xWCyvWaKifwQHYgpjeOVrPfpBFMI4
    Mars Rover Curiosity: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY

    Account Email: carter502@gmail.com
    Account ID: aa866737-7031-447c-9e33-60a7d89646e6
*/

const mainEndpoint = 'https://api.nasa.gov/planetary/apod?api_key=ezYsQEwxtd6xWCyvWaKifwQHYgpjeOVrPfpBFMI4'

function fetchPOTD() {
    fetch(mainEndpoint)
    .then (response => response.json())
    .then (potd => {
        let potdPic = potd.url;
        let potdTitle = potd.title;
        let potdCopyright = potd.copyright;
        let potdExp = potd.explanation;
        let potdHD = potd.hdurl;
        let potdDiv = document.getElementsByClassName('potdDiv');
        let potdContainer = document.createElement('div');
        potdContainer.className = 'containerDiv';

        // The picture
        let potdPicAdd = document.createElement('img');
        potdPicAdd.className = 'myImg';
        potdPicAdd.src = potdPic
        // The title
        let potdTitleAdd = document.createElement('h4');
        potdTitleAdd.innerHTML = '<u>Title</u>: ' + potdTitle;
        // The copyright
        let potdCopyrightAdd = document.createElement('p');
        potdCopyrightAdd.innerHTML = '<b><u>Copyright</u></b>: ' + potdCopyright;
        // The explanation
        let potdExpAdd = document.createElement('p');
        potdExpAdd.innerHTML = '<b><u>Explanation</u></b>:<br>' + potdExp;
        // The HD link
        let potdHDAdd = document.createElement('p');
        potdHDAdd.className = 'splainer';
        potdHDAdd.innerHTML = '<a href="' + potdHD + '">[view full HD version]</a>';

        // Appending the div to call each item we want to add
        potdContainer.append(potdPicAdd, potdTitleAdd, potdCopyrightAdd, potdExpAdd, potdHDAdd);
        potdDiv[0].appendChild(potdContainer);
    })
    .catch (error => console.log(error))
}

fetchPOTD()