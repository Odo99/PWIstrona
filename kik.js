var table;
var board;
var moveCount;

window.addEventListener("load", function(){
    document.getElementById("przycisk").addEventListener("click", function(){
        document.getElementById("komunikat").setAttribute("hidden", "");
        newGame("x");
    });

    board = document.getElementById("board");
    board.addEventListener("click", function(event){
        if(event.target.nodeName != "TH" || event.target.hasAttribute("pole"))
            return false;

        event.target.setAttribute("pole", board.getAttribute("move"));
        var move = 1;
        if(board.getAttribute("move") == "x")
        {
            move = -1;
            board.setAttribute("move", "o");
        }
        else
            board.setAttribute("move", "x");
        moveCount++;

        table[parseInt(event.target.getAttribute("x"))][parseInt(event.target.getAttribute("y"))] = move;
        switch(czy_koniec())
        {
            case false: break;
            case -1:
                wyswietl_komunikat("Wygrał krzyzyk");
                break;
            case 1:
                wyswietl_komunikat("Wygrało kólko");
                break;
            case -2:
                wyswietl_komunikat("Remis");
                break;
        }
    });
    newGame("x");
});

function wyswietl_komunikat(tresc)
{
    document.getElementById("tresc").innerHTML = tresc;
    board.removeAttribute("move");
    document.getElementById("komunikat").removeAttribute("hidden");
};

function newGame(start)
{
    moveCount = 0;
    table = new Array(3);
    for(var i = 0; i < table.length;i++)
    {
        table[i] = new Array(table.length);
        for(var x = 0; x < table.length; x++)
        table[i][x] = 0;
    }
    var zapelnione_pola = board.querySelectorAll("th[pole]");
    for(var i = 0; i < zapelnione_pola.length; i++)
        zapelnione_pola[i].removeAttribute("pole");
    board.setAttribute("move", start);
};
function czy_koniec()
{
    for(var i = 0; i < 3; i++)
    {
        //Sprawdzenie poziome
        if(Math.abs(table[0][i] + table[1][i] + table[2][i]) == 3)
            return table[0][i];
        //Sprawdzenie w pionie
        if(Math.abs(table[i][0] + table[i][1] + table[i][2]) == 3)
            return table[i][0];
    }
    //Sprawdzenie w skosach
    if(Math.abs(table[0][0] + table[1][1] + table[2][2]) == 3)
        return table[0][0];
    if(Math.abs(table[0][2] + table[1][1] + table[2][0]) == 3)
        return table[0][2];
    if(moveCount >= 9)
        return -2;
   return false;
}
