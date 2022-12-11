document.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('h1 .typewriter-text');
    const cursor = document.querySelector('h1 .typewriter-cursor');
    if (element) {
        // The element exists, so you can apply the typewriter effect here.
        const text = element.innerText;
        element.innerText = null;
        const textArray = text.split('');

        let i = 0;

        // Add a delay before showing the cursor.
        setTimeout(() => {
            cursor.classList.add('typewriter-cursor');
        }, 300);

        const typingInterval = setInterval(() => {
            if (i < textArray.length) {
                // Append the next letter to the element.
                element.innerText += textArray[i];
                i++;
            } else {
                // Remove the cursor when the text has been typed.
                cursor.classList.remove('typewriter-cursor');
                clearInterval(typingInterval);
            }
        }, 150);
    }
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
const hiddenElementsRight = document.querySelectorAll('.hidden-right');
const observer = new IntersectionObserver((entries)=>{
    //for each element that has class "hidden"
    entries.forEach((entry)=>{
        //if the observer intersecatres with the elements then add class, else remove
        if(entry.isIntersecting)
            entry.target.classList.add("show");
        else
            entry.target.classList.remove("show");
    })
})

hiddenElementsLeft.forEach((el)=>observer.observe(el));
hiddenElementsRight.forEach((el)=>observer.observe(el));
