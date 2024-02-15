let TicTacToeButtonHover = document.querySelector('.tic-tac-toeButton')
let hoverGames = document.querySelector(".hover_games");
let tl = gsap.timeline({paused: true, reversed: true});

tl.to('.icons8',{y:75,x:55,duration:0.5})
tl.to('.icons8',{y:35,duration:0.5},2)
tl.to('.icons8',{y:110,duration:0.5},4)

    

TicTacToeButtonHover.addEventListener('mouseover',demonstrationTicktack)

function demonstrationTicktack(){
    let hovertable = document.createElement('table');
    hoverGames.appendChild(hovertable);
    //создание демонстрция крестиков 
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');
        
        for (let i = 0; i < 3; i++) {
            td = document.createElement('td');
            let hoverbutton = document.createElement('button')
            hoverbutton.classList.add('tictakbutn')
            td.appendChild(hoverbutton)
            td.classList.add('field_td')
           
            tr.appendChild(td);
        }
        
        hovertable.appendChild(tr);
    }

    let styletd = document.querySelectorAll(".tictakbutn")
    // типа игра
    for(let i = 0;styletd.length > i; i++ ){
        if(i == 1){

            setTimeout(function() {
                styletd[i].textContent = 'x'
            }, 3000)
            
        }

        if(i == 4){

            setTimeout(function() {
                styletd[i].textContent = 'x'
            }, 1000)
            
        }

        if(i == 7){

            setTimeout(function() {
                styletd[i].textContent = 'x'
            }, 5000)
            
        }
    }

  
    
    tl.play()
    
    TicTacToeButtonHover.removeEventListener('mouseover',demonstrationTicktack)
}

