for(i = 0; i < 100; i++) {
    // Elements
    const gridEl = document.querySelector("#grid");
    const cellEl = document.createElement("article");
    const cellNumberEl = document.createElement("span");

    // Adding Elements
    gridEl.appendChild(cellEl)
    cellEl.appendChild(cellNumberEl)
    cellNumberEl.append(i)    
}