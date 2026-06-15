
function formattersCop(cop){

let formato = new Intl.NumberFormat("es-CO",{
    style:"currency",
    currency: "COP"
})

return formato.format(cop)

}

export default formattersCop