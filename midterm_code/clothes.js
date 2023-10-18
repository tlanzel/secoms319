
fetch("./data.json")
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
    if (data.t > 68) {
        addPicture("./images/tshirt.png")
        addPicture("./images/shorts.png")

    }
    else if (data.t > 60) {
        addPicture("./images/longsleeve.png")
        addPicture("./images/shorts.png")
    }
    else if (data.t > 50) {
        addPicture("./images/longsleeve.png")
        addPicture("./images/pants.png")
    }
    else if (data.t > 45) {
        addPicture("./images/sweatshirt.png")
        addPicture("./images/pants.png")
    }
    else {
        addPicture("./images/coat.png")
        addPicture("./images/pants.png")
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

    if (picturelink == "./images/tshirt.png") {
        node.append("T-shirt")
       
    }
    else if (picturelink == "./images/shorts.png") {
        node.append("Shorts")
    }
    else if (picturelink == "./images/longsleeve.png") {
        node.append("Longsleeve")
    }
    else if (picturelink == "./images/pants.png") {
        node.append("Pants")
    }
    else if (picturelink == "./images/sweatshirt.png") {
        node.append("Sweatshirt")
    }
    else if (picturelink == "./images/coat.png") {
        node.append("Coat")
    }

    node.append(linebreak)
}

    
