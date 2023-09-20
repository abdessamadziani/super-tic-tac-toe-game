const cells=document.querySelectorAll(".item")
const resetBtn=document.getElementById('reset')

player1={
    symbol: '<i class="fas fa-times"></i>',
    played: [],
    score: 0
}
player2={
    symbol: '<i class="far fa-circle"></i>',
    played:[],
    score: 0
}
let playerturn=true;
let usedCells=[];
const winCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];

for(let i=0;i<9;i++)
{
    cells[i].addEventListener('click',()=>{
        if(isEmpty(i))
        {
            if(playerturn)
            {
                 addSymbol(player1,i)
                 checkWinner(player1)
                 console.log( 'p1'+player1.played)
                 playerturn=false  
            }
            else
            {
                addSymbol(player2,i)
                checkWinner(player2)
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
    player.played.push(i)
    usedCells.push(i)
}
function checkWinner(player)
{
    winCombos.some(combo=>{
        if(combo.every(index=>player.played.includes(index)))
        {  alert('Won')  }
    })

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