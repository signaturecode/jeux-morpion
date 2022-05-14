

 const h2=document.querySelector('h2')
 const sonjeu=document.querySelector('.son')
 const nouveujeux=document.querySelector("#recommencer")
 let jeuxInitial=["","","","","","","","",""]
 let etatJeu =true
 let son=false
 let beep= new Audio()
 let music= new Audio()
let joyeurActif="X"

const possibiliteGains=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let egalite =()=>`egalité`
let gagner =()=>`Bravo Le jouyeur ${joyeurActif} a gagné`
let passeMain =()=>`c'est au tour de joyeur : ${joyeurActif}`
h2.style.color="wheat"
h2.innerText=passeMain()
sonjeu.addEventListener('click',function(){
    son=!son
    if(son){

        music.src="music/son-jeux.mp3"
        music.play()
    }else{
        music.pause();
        music.currentTime = 0;
    }
})

document.querySelectorAll(".case").forEach(cell=>
    cell.addEventListener('click',gestionCase))

    nouveujeux.addEventListener('click',function(){
        
        beep.pause();
        beep.currentTime = 0;
        joyeurActif="X"
        etatJeu =true
        h2.style.color="wheat"
        h2.innerText=passeMain()
        
         jeuxInitial=["","","","","","","","",""]
         
document.querySelectorAll(".case").forEach(cell=>
    cell.innerHTML="")
    })
        
  function gestionCase(){
    
    beep.src="music/beep.wav"
    beep.play()
     const indexCase= parseInt(this.dataset.index) 
 if(jeuxInitial[indexCase] !="" || !etatJeu){
    return
 }
 if(jeuxInitial[indexCase] ==""){
 
    jeuxInitial[indexCase] = joyeurActif
 
    this.innerText=joyeurActif
   this.style.color="white"
 }
    verifigagner()

  }
  function verifigagner(){
      let tourgagnant = false
      for(let possibiliteGain of possibiliteGains){
            let val1=jeuxInitial[possibiliteGain[0]]
            let val2=jeuxInitial[possibiliteGain[1]]
            let val3=jeuxInitial[possibiliteGain[2]]
            if(val1 ==='' || val2 ==='' || val3 ===''){
                continue 
            }
            if(val1 == val2  && val2 == val3){
                tourgagnant=true
            }
      }
      if(tourgagnant){
        
        beep.src="music/applaudissement.wav"
        beep.play()
        h2.className="ga"
          h2.style.color="rgb(245, 241, 0)"
       h2.innerHTML=gagner()
       etatJeu=false
       return
    }
    if(!jeuxInitial.includes("")){
        h2.style.transition="3s easy-in"
       h2.innerHTML=egalite()
       etatJeu=false
       return
        
     }
     joyeurActif=joyeurActif==="X"?"O":"X"
     h2.innerHTML=passeMain()
  }
