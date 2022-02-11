const tileContainer = document.querySelector("#tile-container");
const keyboardContainer = document.querySelector("#keyboard-container");

for(let i=0; i<6; i++){
    let tileRow = document.createElement("div");
    tileRow.classList.add("tile-row");
    tileContainer.appendChild(tileRow);
    for(let j=0; j<5; j++){
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tileRow.appendChild(tile);
    }
}

// for(let i=0; i<3; i++){
//     let keyRow = document.createElement("div");
//     keyRow.classList.add("key-row");
//     keyboardContainer.appendChild(keyRow);
//     let numKeys = 9;
//     if(i == 0){
//         numKeys = 10;
//     }
//     for(let j=0; j<numKeys; j++){
//         let key = document.createElement("div");
//         key.classList.add("key");
//         keyRow.appendChild(key);
//     }
// }