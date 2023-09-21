const resetBtn=document.getElementById('reset')
const gimeboard = document.querySelector(".gameboard");
const array = new Array(400).fill('');

for (let i = 0; i < 400; i++) {
    // Create a new div element
    const div = document.createElement("div");
  
    // Set the class attribute to "item"
    div.className = "item";
  
    // Set the ID attribute with a value ranging from 0 to 399
    div.id = i;
  
    // Append the div to the container
    gimeboard.appendChild(div);
  }
  const cells=document.querySelectorAll(".item")



player1={
    // symbol: '<i class="fas fa-times"></i>',
    symbol: 'x',
    played: [],
    score: 0
}
player2={
    // symbol: '<i class="far fa-circle"></i>',
    symbol: 'o',
    played:[],
    score: 0
}
let playerturn=true;
let usedCells=[];

// const winCombos=[
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],

//     [0,3,6],
//     [1,4,7],
//     [2,5,8],

//     [0,4,8],
//     [2,4,6]
// ];

for(let i=0;i<400;i++)
{
    cells[i].addEventListener('click',()=>{
        if(isEmpty(i))
        {
            if(playerturn)
            {
                 addSymbol(player1,i)
                 checkWinner(player1,i)
                 console.log( 'p1'+player1.played)
                 playerturn=false  
            }
            else
            {
                addSymbol(player2,i)
                checkWinner2(player2,i)
                console.log( 'p2'+player2.played)
                playerturn=true
            }

        }
        else
        alert('this cell is already choosen !')
  
})
   
}


function addSymbol(player,i)
{
    cells[i].innerHTML=player.symbol
    console.log(i)
    player.played.push(i)
    usedCells.push(i)
    array[i]=player.symbol
}




// function checkWinner(player)
// {
//     winCombos.some(combo=>{
//         if(combo.every(index=>player.played.includes(index)))
//         {  alert('Won')  }
//     })

// }
const lastCaseRow=[];
const firstCaseRow=[];

for(let j=19;j<400;j+=20)
{
    lastCaseRow.push(j)
}
for(let j=0;j<400;j+=20)
{
    firstCaseRow.push(j)
}
console.log(lastCaseRow)
console.log(firstCaseRow)
function checkWinner(player,i)
{
    //let isValueInArray = firstCaseRow.includes(i || i-1 || i-2|| i-3 || i -4);
    let isValueInArray=false;
    let isValueInArray2 = false;
    for (let j = i; j > i - 4; j--) {
        if (firstCaseRow.includes(j)) {
            isValueInArray2 = true;
            break;
        }
    }

    for (let j = i; j < i + 4; j++) {
        if (lastCaseRow.includes(j)) {
            isValueInArray = true;
            break;
        }
    }


        if(i+4<400 && !isValueInArray) 
        {

            console.log('i can enter + ')

            if(cells[i+1].innerHTML==='x' && cells[i+2].innerHTML==='x' && cells[i+3].innerHTML==='x' && cells[i+4].innerHTML==='x') 
            alert(' THE WINNER IS X ')
        }
        if(i-4>=0 && !isValueInArray2)
        {
            console.log('i can enter - ')
            if(cells[i-1].innerHTML==='x' && cells[i-2].innerHTML==='x' && cells[i-3].innerHTML==='x' && cells[i-4].innerHTML==='x' ) 
            alert(' THE WINNER IS X ')
        }
        if(cells[i].innerHTML==='x' && i+21<399 && i+19<399 )
        {
            if(cells[i+1].innerHTML==='x' && cells[i+2].innerHTML==='x' && cells[i-1].innerHTML==='x' && cells[i-2].innerHTML==='x')
            alert(' THE WINNER IS X ')
            if(cells[i+20].innerHTML==='x' && cells[i+40].innerHTML==='x' && cells[i-20].innerHTML==='x' && cells[i-40].innerHTML==='x')
            alert(' THE WINNER IS X ')
            if( cells[i-21].innerHTML==='x' && cells[i-42].innerHTML==='x')
            alert(' THE WINNER IS X mm')
            if(cells[i-19].innerHTML==='x' && cells[i-38].innerHTML==='x')
            alert(' THE WINNER IS X tt ')
        } 
        if(i+80<400)
        {
            if(cells[i+20].innerHTML==='x' && cells[i+40].innerHTML==='x' && cells[i+60].innerHTML==='x' && cells[i+80].innerHTML==='x' )
            alert(' THE WINNER IS X ')
        }
        if(i-80>=0)
        {
            if(cells[i-20].innerHTML==='x' && cells[i-40].innerHTML==='x' && cells[i-60].innerHTML==='x' && cells[i-80].innerHTML==='x')
            alert(' THE WINNER IS X ')
        }
         if(i+84<400)
         {
            if(cells[i+20+1].innerHTML==='x' && cells[i+40+2].innerHTML==='x' && cells[i+60+3].innerHTML==='x' && cells[i+80+4].innerHTML==='x')
            alert(' THE WINNER IS X ')
         }
         if(i-84>=0)
         {
            if(cells[i-21].innerHTML==='x' && cells[i-42].innerHTML==='x' && cells[i-63].innerHTML==='x' && cells[i-84].innerHTML==='x')
            alert(' THE WINNER IS X  -21')
         }
         if(i+76<400)
         {
            if(cells[i+19].innerHTML==='x' && cells[i+38].innerHTML==='x' && cells[i+57].innerHTML==='x' && cells[i+76].innerHTML==='x')
            alert(' THE WINNER IS X ')
         }
         if(i-76>=0)
         {
            if(cells[i-19].innerHTML==='x' && cells[i-38].innerHTML==='x' && cells[i-57].innerHTML==='x' && cells[i-76].innerHTML==='x')
            alert(' THE WINNER IS X -19 ')
         }
   
}


function checkWinner2(player,i)
{
    //let isValueInArray = firstCaseRow.includes(i || i-1 || i-2|| i-3 || i -4);
    let isValueInArray=false;
    let isValueInArray2 = false;
    for (let j = i; j > i - 4; j--) {
        if (firstCaseRow.includes(j)) {
            isValueInArray2 = true;
            break;
        }
    }

    for (let j = i; j < i + 4; j++) {
        if (lastCaseRow.includes(j)) {
            isValueInArray = true;
            break;
        }
    }


        if(i+4<400 && !isValueInArray) 
        {

            console.log('i can enter + ')

            if(cells[i+1].innerHTML==='o' && cells[i+2].innerHTML==='o' && cells[i+3].innerHTML==='o' && cells[i+4].innerHTML==='o') 
            alert(' THE WINNER IS O ')
        }
        if(i-4>=0 && !isValueInArray2)
        {
            console.log('i can enter - ')
            if(cells[i-1].innerHTML==='o' && cells[i-2].innerHTML==='o' && cells[i-3].innerHTML==='o' && cells[i-4].innerHTML==='o' ) 
            alert(' THE WINNER IS O ')
        }
        if(cells[i].innerHTML==='o' && i+21<399 && i+19<399 )
        {
            if(cells[i+1].innerHTML==='o' && cells[i+2].innerHTML==='o' && cells[i-1].innerHTML==='o' && cells[i-2].innerHTML==='o')
            alert(' THE WINNER IS O ')
            if(cells[i+20].innerHTML==='o' && cells[i+40].innerHTML==='o' && cells[i-20].innerHTML==='o' && cells[i-40].innerHTML==='o')
            alert(' THE WINNER IS O ')
            if(cells[i+21].innerHTML==='o' && cells[i+42].innerHTML==='o' && cells[i-21].innerHTML==='o' && cells[i-42].innerHTML==='o')
            alert(' THE WINNER IS O ')
            if(cells[i+19].innerHTML==='o' && cells[i+38].innerHTML==='o' && cells[i-19].innerHTML==='o' && cells[i-38].innerHTML==='o')
            alert(' THE WINNER IS O ')
        } 
        if(i+80<400)
        {
            if(cells[i+20].innerHTML==='o' && cells[i+40].innerHTML==='o' && cells[i+60].innerHTML==='o' && cells[i+80].innerHTML==='o' )
            alert(' THE WINNER IS O ')
        }
        if(i-80>=0)
        {
            if(cells[i-20].innerHTML==='o' && cells[i-40].innerHTML==='o' && cells[i-60].innerHTML==='o' && cells[i-80].innerHTML==='o')
            alert(' THE WINNER IS O ')
        }
         if(i+84<400)
         {
            if(cells[i+20+1].innerHTML==='o' && cells[i+40+2].innerHTML==='o' && cells[i+60+3].innerHTML==='o' && cells[i+80+4].innerHTML==='o')
            alert(' THE WINNER IS O ')
         }
         if(i-84>=0)
         {
            if(cells[i-20-1].innerHTML==='o' && cells[i-40-2].innerHTML==='o' && cells[i-60-3].innerHTML==='o' && cells[i-80-4].innerHTML==='o')
            alert(' THE WINNER IS O ')
         }
         if(i+76<400)
         {
            if(cells[i+19].innerHTML==='o' && cells[i+38].innerHTML==='o' && cells[i+57].innerHTML==='o' && cells[i+76].innerHTML==='o')
            alert(' THE WINNER IS O ')
         }
         if(i-76>=0)
         {
            if(cells[i-19].innerHTML==='o' && cells[i-38].innerHTML==='o' && cells[i-57].innerHTML==='o' && cells[i-76].innerHTML==='o')
            alert(' THE WINNER IS O ')
         }
   
}



function isEmpty(i)
{
    return usedCells.includes(i) ? false : true
}

function clear()
{
    cells.forEach(cell=>{
        cell.innerHTML=''
    })
    usedCells=[];
    player1.played="";
    player2.played="";
}

resetBtn.addEventListener("click",clear)