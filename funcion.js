async function login() {

    let username = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;

    try {
       
        await fetch('/login', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                usuario: username,
                clave: password
            }) 
        });
        
        console.log("Datos enviados al servidor");
    
    } catch (error) {
        console.log("El servidor no respondió, pero el intento se hizo.");
    }
}
