function randomText(){
    var text = ("01");
    var letters = text[Math.floor(Math.random()*text.length)];
    return letters;
}

function rain(){
    let cloud = document.querySelector('.cloud');
    if (!cloud) {
        console.error('Cloud element not found');
        return;
    }

    let e = document.createElement('div');
    e.classList.add('drop');
    cloud.appendChild(e);

    let left  =Math.floor(Math.random()*300)
    let size = Math.random()*1.5;
    let duration = Math.random()*1;

    e.innerText = randomText();
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size +'em';
    e.style.animationDuration = 1+duration+'s';

    setTimeout(function(){
        cloud.removeChild(e)
    },2000)
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(function(){
        rain()
    },200)
});

// the cloud effect completes here