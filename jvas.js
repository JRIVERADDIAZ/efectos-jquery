const cost = $(".costo");
const btn = $("button.btn");
const año = $(".año");
const interes = $(".interes");
const cambio = $("costos");
aCotizar = []


class Clente {
  constructor(cost, año, interes) {
    this.cost = cost;
    this.año = año;
    this.interes = interes;
    //  console.log(cost,año,interes)
  }
}



pintar = () => {
aCotizar.forEach(client => {
  
  $('#costos').text(
  `
    ${client.cost}
    ${client.año}
    ${client.interes}
     `

).fadeIn("slow", function(){
  $("#costos").css("background-color", "yellow");
});
}
)
};


btn.click(() => {
  aCotizar.push(new Clente(parseInt(cost.val()),parseInt(año.val()), parseInt(interes.val())));
  pintar() 

}

);


console.log(aCotizar);
