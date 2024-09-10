const https = require('https');

const options = {
    hostname: 'reqres.in',
    path: '/api/users',
    method: 'GET'
    
};

const req = https.request(options, (res) => {
    let data = '';

    // Recibir los fragmentos de datos
    res.on('data', (chunk) => {
        data += chunk;
    });

    //Una vez que todos los datos han sido recibidos
    res.on('end', () =>{
        console.log(JSON.parse(data));
    });
});

req.on('error', (error) => {
    console.error(`Error en la solicitud: ${error.message}`);
});

req.end();