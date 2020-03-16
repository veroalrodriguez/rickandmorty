    //Funcionalidad de Menú
    $(".menu").on("click", function(){
      $(".pages").toggleClass("open");
    });
    const menuOne = document.querySelector(".menu1");
    const menuTwo = document.querySelector(".menu2");
    const menuThree = document.querySelector(".menu3");

    menuOne.addEventListener("click", function(){
    document.getElementById("portal").style.display="block";
    document.getElementById("information").style.display="none";
    document.getElementById("characteres").style.display="none";
    });

    menuTwo.addEventListener("click", function(){
    document.getElementById("information").style.display="block";
    document.getElementById("characteres").style.display="none";
    document.getElementById("portal").style.display="none";
    });

    menuThree.addEventListener("click", function(){
    document.getElementById("characteres").style.display="block";
    document.getElementById("portal").style.display="none";
    document.getElementById("information").style.display="none";
    });

    //Funcionalidad de link
    const linkTo = document.querySelector(".link");

    linkTo.addEventListener("click", function(){
      document.getElementById("characteres").style.display="block";
      document.getElementById("portal").style.display="none";
    });


    //Función que trae todos los datos a la pantalla y callback para cards
    import data from './data/rickandmorty/rickandmorty.js';
    let rickandmorty = data.results;
    //console.log(rickandmorty);
    //rickandmorty.map(list=>console.log(list.name));

    const showList = (rickandmorty) => {
      const listChar = document.getElementById("container");
      let infoChar = "";
      for (let i = 0; i < rickandmorty.length; i += 1){
        infoChar += `<div class = "box">
                        <div class = "container-style">
                            <img class="image" id="img" src='${rickandmorty[i].image}'>
                            <p class="name">${rickandmorty[i].name}</p>
                            <div class="front">
                            <div class="back">
                                  <p>ID: ${rickandmorty[i].id}</p>
                                  <p>STATUS: ${rickandmorty[i].status}</p>
                                  <p>SPECIES: ${rickandmorty[i].species}</p>
                                  <p>ORIGIN: ${rickandmorty[i].origin.name}</p>
                            </div>
                            </div>
                    </div>
                        </div>`;
      }
      listChar.innerHTML = infoChar;
    };
    showList(rickandmorty);

    //Función para buscador



    //Ordenando a-z z-a
    import {
      asc,
      des,
      filterSpecies,
      filterStatus,
    } from "./data.js"

    const showOrder = () => {
      document.getElementById("sort").addEventListener("change", () => {
        const idOrder = document.getElementById("sort").value;
        let arrayOrder = [];
        switch (idOrder){
          case "asc":
            arrayOrder = asc(rickandmorty);
            showList(arrayOrder);
            break;
          case "des":
            arrayOrder = des(rickandmorty);
            showList(arrayOrder)
            break;
            default:
              break;
        }
      });
    };
    showOrder();

    //Monstrando por especie
    const showSpecies = () => {
      document.getElementById("species").addEventListener("change", () => {
        const idSpecies = document.getElementById("species").value;
        let arraySpecies = [];
        switch (idSpecies) {
          case "Human":
            arraySpecies = filterSpecies(rickandmorty, "Human");
            showList(arraySpecies);
            break;
          case "Animal":
            arraySpecies = filterSpecies(rickandmorty, "Animal");
            showList(arraySpecies);
            break;
          case "Alien":
            arraySpecies = filterSpecies(rickandmorty, "Alien");
            showList(arraySpecies);
            break;
          case "Humanoid":
            arraySpecies = filterSpecies(rickandmorty, "Humanoid");
            showList(arraySpecies);
            break;
          case "Cronenberg":
            arraySpecies = filterSpecies(rickandmorty, "Cronenberg");
            showList(arraySpecies);
            break;
          case "Mytholog":
            arraySpecies = filterSpecies(rickandmorty, "Mytholog");
            showList(arraySpecies);
            break;
          case "Robot":
            arraySpecies = filterSpecies(rickandmorty, "Robot");
            showList(arraySpecies);
            break;
          default:
              break;
        }
      });
    };

    showSpecies();

    //Monstrando por Status
    const showStatus = () => {
      document.getElementById("status").addEventListener("change", () => {
        const idStatus = document.getElementById("status").value;
        let arrayStatus = [];
        switch (idStatus) {
          case "Alive":
            arrayStatus = filterStatus(rickandmorty, "Alive");
            showList(arrayStatus);
            break;
          case "Dead":
            arrayStatus = filterStatus(rickandmorty, "Dead");
            showList(arrayStatus);
            break;
          case "unknown":
            arrayStatus = filterStatus(rickandmorty, "unknown");
            showList(arrayStatus);
            break;
          default:
            break;
        }
      });
    };
    showStatus();

    /*function clean(){
      document.getElementById("container").innerHTML = ""
    };*/


    //splashscreen
    /*document.addEventListener("DOMContentLoaded", (e)=>{
      setTimeout(()=>{
        document.getElementById("splash").classList.add("display-none");
      }, 2000);
    })*/
