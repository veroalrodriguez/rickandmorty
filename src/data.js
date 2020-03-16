
  //Buscador por nombre

  //Ordenando
  export const asc = (rickandmorty) => {
    const array = rickandmorty.sort((object1, object2) => ((object1.name > object2.name) ? 1 : -1));
    return array;
  };

  export const des = (rickandmorty) => {
    const array = rickandmorty.sort((object1, object2) => ((object1.name > object2.name) ? -1 : 1));
    return array;
  };

  //Filtrado por especie
  export const filterSpecies = (rickandmorty, value) => {
    const array = [];

    rickandmorty.forEach((object) => {
      object.species.forEach((species) => {
        if (species === value) {
          array.push(object);
        }
      });
    });
    return array;
  };

  //Filtrado por estado
  export const filterStatus = (rickandmorty, value) => {
    const array = [];

    rickandmorty.forEach((object) => {
      object.status.forEach((status) => {
        if (status === value){
          array.push
        }
      });
    });
    return array;
  };
