let arrayLista = []

let resultado = document.getElementById("resultado");
let valores = document.getElementById("valor1");
let valores2 = document.getElementById("valor2");
let posicao1 = -1;
let posicao2 = -1;


function verificador(){
    if (valores.value == "" ){ // || valores2.value == ""
        alert("Prencha os campos")

    } else{

        //apagar da lista
        let buscarPor = "" //buscar qual item do array esta ""
        let indice = arrayLista.indexOf(buscarPor);
        while(indice >= 0){
            arrayLista.splice(indice, 1);
            indice = arrayLista.indexOf(buscarPor); //remover
        }

        arrayLista.push( { //adicionar no array
            name: valores.value,
            // quantidade: parseInt(valores2.value), segundo input
        })

        posicao1 = -1; //Reiniciar ao clicar enviar
        posicao2 = -1;
        resultado.innerHTML = "" //limpar a lista no dom
        arrayLista.forEach(element => {
            
            resultado.innerHTML += 
            `${
                "<li id=a"+ (posicao2 = posicao2 + 1) +" class='titulo'>" 
                    +"<p>"+ element.name +"</p>"
                    // +"<span class='editar'>"+"</span>"
                    +"<span class='excluir'" +"id= "+(posicao1 = posicao1 + 1) +">"+"</span>"+ 
                "</li>"
            }`   
        });
    }
    valores.value = ""
    

    let excluir = document.querySelectorAll(".excluir"); //o x do dom
    
    function clicar(event){
        let excluirLista = document.getElementById("a"+event.target.id); //pegando o id de cada <li>
        excluirLista.parentNode.removeChild(excluirLista); //removendo do dom
    
        arrayLista[event.target.id] = ""; //
    }
    
    excluir.forEach((square) => {
        square.addEventListener("click", clicar); //adicionando click em cada elemento
    });
}


