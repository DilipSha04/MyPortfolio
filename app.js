
//for left to right animatoin
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            // entry.target.classList.remove('show')
        }
    });
});

const hiddenElementLeft = document.querySelectorAll('.NotVisible')
hiddenElementLeft.forEach((el) => observer.observe(el))

// For right to left animation 

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            // entry.target.classList.remove('show')
        }
    });
});

const hiddenElementRight = document.querySelectorAll('.NotVisibleRight')
hiddenElementRight.forEach((el) => observer.observe(el))
