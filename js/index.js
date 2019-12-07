// load event (alerts: "welcome to fun bus!" upon site arrival)
window.addEventListener('load', (event) => {
    alert('Welcome to Fun Bus!')
});


// mouse enter / mouse leave event (images scale bigger (mouse over) to smaller (mouse out) upon mouse hover)

const mainImgs = document.querySelectorAll('.img-content');

mainImgs.forEach((image) => {
    image.addEventListener('mouseenter', (event) => {
        image.style.transform = 'scale(1.2)';
        image.style.transition = 'transform 0.5s';
    })


image.addEventListener('mouseleave', (event) => {
    image.style.transform = 'scale(1.0)';
    image.style.transition = 'transform 0.5s';
 })

});


// mouse over / mouse out event (add border around header image and then removes it depending on mouse hover)

const imgBorder = document.querySelector('#fun-bus');

imgBorder.addEventListener('mouseover', (event) => {
    imgBorder.style.border = '3px solid #4ab0b0';
})

imgBorder.addEventListener('mouseout', (event) => {
    imgBorder.style.border = 'none';
})


// dbl click event (makes logo bigger upon double click and then times out/ resets itself)

const dblLogo= document.querySelector('.logo-heading');

dblLogo.addEventListener('dblclick', (event) => {
    dblLogo.style.fontSize = '5rem';
    setTimeout(() => {
        dblLogo.style.fontSize = '4rem';
    }, 2000);
})




// wheel event (changes to light blue/teal when user scrolls)

const bodyWheel = document.getElementsByTagName('body');

bodyWheel[0].addEventListener('wheel', (event) => {
    bodyWheel[0].style.backgroundColor = '#f0fffc';
})


// click event (changes button font color to pretty yellow on click)

const btnClick = document.querySelectorAll('.destination .btn');
     btnClick.forEach((btnClick) => {
        btnClick.addEventListener('click', (event) => {
            btnClick.style.color = '#e2f09e';
        })
    })

    
// resize event (console logs after window is resized)

window.addEventListener('resize', (event) => {
console.log('I think we need some space');
});


// context menu event (right click last image to see dashed yellow border)

const lastImg = document.querySelector('#last-img')
lastImg.addEventListener('contextmenu', (event) => {
    event.target.style.border = '3px dashed #f7deb7';
});


// Prevent default 

const stopNav = document.querySelector('nav'); 

stopNav.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('stop trying to make click happen, its not going to happen')
})