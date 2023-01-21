//LECTURA DE JSON
let url = "https://raw.githubusercontent.com/saninfa2/APIs/main/gatitos.json";
let datos = [];
  fetch(url)
      .then(response => response.json())
      .then(data => {  // data contiene el JSON
          datos = data;
  
  
          let cad = `<table class="">
          <tr class="tr">
            <th>ID</th>
            <th>HEIGHT</th>
            <th>WIDTH</th>
            <th>COLOR</th>
            <th>NAME</th>
            <th>URL</th>
            <th>ACCION</th>
          </tr>`;
  
          for (data of datos) {
            cad += `
            <tr class="tr">
              <td>${data.id}</td>
        <td>${data.height}</td>
        <td>${data.width}</td>
        <td>${data.color}</td>
        <td>${data.name}</td>
        <td class="td--img" ><img class="tr--cat" src="${data.url}" alt="${data.name}"></td>
        <td class="td--but">
          <button class="butt"><a class="butt--a" href="../Vista/modified.html" class="but--acc">🔧</a></button>
          <button class="butt"><a class="butt--a" href="../Vista/create.html" class="but--acc">+</a></button>
          <button class="butt"><a class="butt--a" href="../Vista/delete.html" class="but--acc">🗑</a></button>
        </td>
      </tr>  
        `
            }
    
    
    
            document.getElementById("ArtCat").innerHTML = cad;
    
    
        }
        );