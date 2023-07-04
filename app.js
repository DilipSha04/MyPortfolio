
//for left to right animatoin
const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            // entry.target.classList.remove('show')
        }
    });
});

const hiddenElementLeft = document.querySelectorAll('.NotVisible')
hiddenElementLeft.forEach((el) => observerLeft.observe(el))

// For right to left animation 

const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            // entry.target.classList.remove('show')
        }
    });
});

const hiddenElementRight = document.querySelectorAll('.NotVisibleRight')
hiddenElementRight.forEach((el) => observerRight.observe(el))
