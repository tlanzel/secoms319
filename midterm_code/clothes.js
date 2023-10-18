
fetch("./weather.json")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        append(data);
    })
    .catch(function (err) {
        console.log('error:' + err);
    })


function append(data) {
    if (data.t > 75) {
        addPicture("./tshirt.png")
        addPicture("./shorts.png")

    }
    else if (data.t > 60) {
        addPicture("./longsleeve.png")
        addPicture("./shorts.png")
    }
    else if (data.t > 50) {
        addPicture("./longsleeve.png")
        addPicture("./pants.png")
    }
    else if (data.t > 45) {
        addPicture("./sweatshirt.png")
        addPicture("./pants.png")
    }
    else {
        addPicture("./coat.png")
        addPicture("./pants.png")
    }
}


function addPicture(picturelink) {
    let node = document.getElementsByClassName("col-lg-0 px-0")[0]
    let img = document.createElement("img");
    var linebreak = document.createElement("br")
    img.src = picturelink;
    img.height = 200;
    node.appendChild(img)
    node.style.textAlign = "center";
    node.style.fontWeight = "bold";
    node.style.fontSize = "25px";

    if (picturelink == "./tshirt.png") {
        node.append("T-shirt")
       
    }
    else if (picturelink == "./shorts.png") {
        node.append("Shorts")
    }
    else if (picturelink == "./longsleeve.png") {
        node.append("Longsleeve")
    }
    else if (picturelink == "./pants.png") {
        node.append("Pants")
    }
    else if (picturelink == "./swearshirt.png") {
        node.append("Sweatshirt")
    }
    else if (picturelink == "./coat.png") {
        node.append("Coat")
    }

    node.append(linebreak)
}

    
