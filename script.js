/*Events*/
document.querySelector('body').addEventListener('keydown', (event) =>{
    let key = event.key.toLowerCase();
       
        playSound(key);

});
document.querySelector('.btn-composer').addEventListener('click', playComposer);

document.querySelector('.composition a').addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#input').value = '';
});



/*Functions*/
function playSound(key){
        let sound = document.querySelector(`#s_key${key}`);

        if(sound){
            sound.currentTime = 0;
            sound.play();
            updateKeyOfScreen(key);
        }
}

function updateKeyOfScreen(key){
    let keyButton = document.querySelector(`div[data-key=key${key}]`);

    if(keyButton !== null){
        keyButton.classList.add('active');
        setTimeout( () => {
            keyButton.classList.remove('active');       
        }, 300);
    }
}

function playComposer() {
    let composition = document.querySelector('#input').value.toLowerCase();
    let arrayComposition = composition.split('');
    let time = 0;

    for(let i=0; i  < arrayComposition.length; i++){
        setTimeout( () => {
            playSound(arrayComposition[i]); 
        }, time);

        time += 250;
    }
}