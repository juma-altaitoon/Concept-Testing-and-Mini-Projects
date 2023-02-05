let buttonElems = document.querySelectorAll('button');
let audioFile = new Audio(); //= document.createElement('audio');

buttonElems.forEach(element => {
    element.addEventListener('click',function(){
        audioFile.src = "sounds/"+ element.id+".wav";
        console.log(audioFile.src);
        audioFile.play();
    })
   
});