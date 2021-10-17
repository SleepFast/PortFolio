// const navProjectElement = document.querySelector(".nav__project")
// const projectElement = document.querySelector(".project")
// const profilElement = document.querySelector(".profil")

// navProjectElement.addEventListener("click",function(event){
//     projectElement.classList.remove("project__hidden");
//     profilElement.classList.add("profil__hidden");

    
// })

const navElements = document.querySelectorAll('.nav__element')
const mainSectionElements = document.querySelectorAll('.main__section')

navElements.forEach((element) => {
    element.addEventListener('click', (event) => {
       const textElement = event.target.textContent.toLowerCase()
       navElements.forEach((element) => {
           if (element.textContent.toLowerCase() === textElement) {
               event.target.classList.add('underline')
           } else {
               element.classList.remove('underline')
           }
       })
       mainSectionElements.forEach((mainSection => {
           if (mainSection.classList.contains(textElement)) {
               mainSection.classList.remove(`hidden`)
           } else {
               mainSection.classList.add("hidden")
           }
       }))
       
    })
})

// const array = [1, 2, 3, 4]

// array.forEach(function(element) {
//     console.log(element);
// })

// array.forEach((element) => {
//     console.log(element);
// })