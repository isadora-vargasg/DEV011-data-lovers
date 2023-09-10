// estas funciones son de ejemplo

//obtenemos la ruta del archivo JSON
const rutaArchivoJSON = "../data/pokemon/pokemon.json";

//utilizar fetch para cargar archivo JSON
// Utiliza fetch para cargar el archivo JSON
fetch(rutaArchivoJSON)
  .then((response) => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON.");
    }
    return response.json();
  })
  .then((data) => {
    // Haz algo con los datos JSON, por ejemplo, console.log(data)
    console.log(data);
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
  data;
  filterBy;
  value;
  alert("filterData nomas");
};
