document.addEventListener('DOMContentLoaded', function() {
  const jsonFile = 'data.json';

  const jsonDiv = document.getElementById('json');

  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      jsonDiv.innerHTML = data.content;
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

