
/* METHODO QUE SE RECICLA MUCHO PARA DARLE SCROLL A LA VENTANA A LA SECCION DE OBTENER APPS */
export function scrollToId() {
    console.log("click")
    const element = document.getElementById('sotreApps')
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}