// Dernièere div
let lastdiv = document.getElementsByTagName('div')[document.getElementsByTagName('div').length-1]


// ### 1. Récupère et affiche le premier enfant de la dernière div
let first_child_lastdiv = lastdiv.firstElementChild
console.log(first_child_lastdiv)


// ### 2. Récupère et affiche le dernier enfant de la dernière div
let last_child_lastdiv = lastdiv.lastElementChild
console.log(last_child_lastdiv)


// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le
console.log(last_child_lastdiv.previousElementSibling.firstElementChild)


// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le
console.log(last_child_lastdiv.firstElementChild)


// ### 5. Affiche l'élément parent de l'élément i
console.log(last_child_lastdiv.previousElementSibling.firstElementChild.parentElement)

// ### 6. affiche l'élément parent de l'élément b
console.log(last_child_lastdiv.firstElementChild.parentElement)


// ### 7. affiche l'élément suivant le premier enfant de la dernière div
console.log(first_child_lastdiv.nextElementSibling) 