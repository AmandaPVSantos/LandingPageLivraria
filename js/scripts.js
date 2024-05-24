document.addEventListener("DOMContentLoaded", function() {
    navigate('home'); // carrega a pagina inicial por padrão
});

function navigate(page) {
    fetch(page + '.html')
        .then(response => {
            if (!response.ok) {
                throw new error('Network response was not ok' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.log('There has been a problem with your fetch operation:', error);
        });
}