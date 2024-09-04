const parentDiv=document.querySelector(".container");

//Function to create the first grid

for (let i=0 ; i < 16; i++){
    const row=document.createElement("div");
    row.style.display="flex";
    row.classList.add("row");
    
    for (let j=0 ; j<16; j++){
        const newDiv=document.createElement("div");
        newDiv.style.backgroundColor='#fefae0';
        newDiv.style.width="36.25px";
        newDiv.style.height="36.25px";
        newDiv.style.border="0.2px solid #4F4E28"
        newDiv.style.boxSizing="border-box";

        newDiv.addEventListener('mouseover', function (event){
            newDiv.style.backgroundColor="#4F4E28";
        });

        row.appendChild(newDiv);
    }
    parentDiv.appendChild(row);
    
}

//function to create the grid using user's input

function newGrid(event){
    let input=prompt("Enter the new size(max:100): ");

    numInput=Number(input);

    if (numInput>100 || numInput<0){
        return alert("Invalid");
    }

    parentDiv.innerHTML = "";

    for (let i=0 ; i < numInput; i++){

        const row=document.createElement("div");
        row.style.display="flex";
        row.classList.add("row");
        
        for (let j=0 ; j < numInput; j++){

            const newDiv=document.createElement("div");
            newDiv.style.backgroundColor = '#fefae0';
            newDiv.style.width=`${580 / numInput}px`;
            newDiv.style.height=`${580 / numInput}px`
            newDiv.style.border="0.2px solid #4F4E28"
            newDiv.style.boxSizing="border-box";
    
            newDiv.addEventListener('mouseover', function (event){
                newDiv.style.backgroundColor = generateRgb();
            });
    
            row.appendChild(newDiv);
        }
        parentDiv.appendChild(row);
        
    }

}

//function to create random rgb colors in newGrid function

function generateRgb() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

document.querySelector(".adjust").addEventListener("click",newGrid);

//function to clear the grid

function clearGrid() {
    const cells = document.querySelectorAll('.container > .row > div');
    
    cells.forEach(cell => {
        cell.style.backgroundColor = '#fefae0';
    });
}

document.querySelector(".clear").addEventListener("click", clearGrid);




