// estas funciones son de ejemplo

//Creo que seria buena idea encapsular toda la llamada de fetch

//obtenemos la ruta del archivo JSON
//const rutaArchivoJSON = "../data/pokemon/pokemon.json";
//console.log(rutaArchivoJSON);

/*function filtrarDatos() {
  var propiedadFiltro = document.getElementById("select-sort").value;

  // Filtrar los datos
  var datosFiltrados = datos.filter(function(item) {
    return item[select-sort].toLowerCase();
  });

  // Mostrar los datos filtrados en la consola (puedes mostrarlos en otro lugar si lo prefieres)
  console.log(datosFiltrados);
}

/*fetch(rutaArchivoJSON)
  .then((response) => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON.");
    }
    return response.json();
  })
  .then((data) => {
    // Haz algo con los datos JSON, por ejemplo, console.log(data)
    console.log(data);
    console.log(data.pokemon[0].size.height);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return [];
};

export const filterData = (data, filterBy, value) => {
  //trabajar funcionalidad de esto
  //retornar data filtrada
  
  data;
  filterBy;
  value;
  alert("filterData nomas");//prueba para ver si entra

  

}; */

export const filterData = (data, type) => {
  if (type === "all" || type ==="default") {
    return data;
  }
  return data.filter((pokemon) => pokemon.type.includes(type));
};

export const ordenBy = (data, ordenBy) => {
  if (ordenBy === "asc") {
    data.sort(function (a, b) {
      return parseInt(a.num) - parseInt(b.num); // Orden ascendente
    });
  }
  if (ordenBy === "desc") {
    data.sort(function (a, b) {
      return parseInt(b.num) - parseInt(a.num); // Orden descendente
    });
  }
  if (ordenBy === "A-Z") {
    data.sort(function (a, b) {
      return a.name.localeCompare(b.name); // Orden ascendente
    });
  }
  if (ordenBy === "Z-A") {
    data.sort(function (a, b) {
      return b.name.localeCompare(a.name); // Orden descendente
    });
  }
};

export const computeStats = (pokemones) => {
  return pokemones.reduce((cont) => {
    return cont + 1;
  }, 0);
};
