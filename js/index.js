const centerDiv = document.getElementById("center-div");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=50")
    .then(res => res.json())
    .then(data => {
        data.forEach((val) => {
            key = val.id;
            let img = document.createElement("img");
            img.src = `https://picsum.photos/200/300?random=${val.id}`;
            centerDiv.appendChild(img);
        })
    })