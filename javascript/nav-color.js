console.log('hey')

const header = document.querySelector('.navbar');

window.onscroll = function(){
    var top = window.scrollY;

    console.log(top);

    if (top >= 100 ){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}

