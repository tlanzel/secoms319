fetch("./data.json")
    //read json file
    .then(function (response) {
        return response.json();
    })
    //put data into html
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log("error:" + err);
    });

function appendData(data) {
    
    let theDate = formatDate(data.d);
    document.getElementsByClassName("display-4 fst-italic")[0].innerHTML = 
    `Weather for ${theDate}`;

    let theTime = getTime(data.d);
    document.getElementsByClassName("lead my-3")[0].innerHTML = 
    `<br><h2>Temperature: ${data.t}\xB0F</h2> <br>
    <h2>Humidity: ${data.h}%</h2><br>
    <h3>Time: ${theTime}</h3><br>`;

    let box = document.getElementsByClassName("lead my-3")[0];

    if (data.t >= 75) {
        addPicture("./images/sun.png");
        box.childNodes[1].style.backgroundColor = 'red';
        box.childNodes[1].style.color = 'white';
    }
    if ((data.t >= 60) & (data.t < 75)) {
        addPicture("./images/partlycloudy.png");
    }
    if ((data.t >= 40) & (data.t < 60)) {
        addPicture("./images/cloudy.png");
    }
    if (data.h > 50) {
        addPicture("./images/rain.png");
        box.childNodes[5].style.backgroundColor = 'blue';
        box.childNodes[5].style.color = 'white';
    }
    if (data.t < 40) {
        addPicture("./images/snow.png");
        box.childNodes[1].style.backgroundColor = 'blue';
        box.childNodes[1].style.color = 'white';
    }

    console.log(data.t);
    console.log(data.h);
    console.log(data.d);
    console.log(theDate);

} // end of function appendData


function addPicture(picturelink) {
    let contentNode = document.getElementsByClassName("col px-0")[0];
    let img = document.createElement("img");
    img.src = picturelink;
    img.height = 200;
    contentNode.appendChild(img);
}

function formatDate(theDate) {
    console.log(theDate);
    const myArray = theDate.split(" ");
    let dateObjects = myArray[0].split("/");

    let time = myArray[1];
    let month = dateObjects[0];
    let day = dateObjects[1];
    let year = dateObjects[2];

    switch (month) {
        case "1":
            month = "January";
            break;
        case "2":
            month = "February";
            break;
        case "3":
            month = "March";
            break;
        case "4":
            month = "April";
            break;
        case "5":
            month = "May";
            break;
        case "6":
            month = "June";
            break;
        case "7":
            month = "July";
            break;
        case "8":
            month = "August";
            break;
        case "9":
            month = "September";
            break;
        case "10":
            month = "October";
            break;
        case "11":
            month = "November";
            break;
        case "12":
            month = "December";
            break;
    }

    let ending;

    if ((Number(day) >= 10) & (Number(day) <= 20) || day == "30") {
        ending = "th";
    } else if (day.endsWith("1")) {
        ending = "st";
    } else if (day.endsWith("2")) {
        ending = "nd";
    } else if (day.endsWith("3")) {
        ending = "rd";
    } else {
        ending = "th";
    }

    return month + " " + day + ending + " " + year;
}

function getTime(theDate){
    console.log("time function: " + theDate);
    const myArray = theDate.split(" ");
    let dateObjects = myArray[0].split("/");

    return myArray[1];
}
