const topObj = document.querySelectorAll(".top-obj");

topObj.forEach((e) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add('point');
    e.appendChild(newDiv);
});