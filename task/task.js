const fs = require('fs');

function fibonacci(x)
{
    if(x == 0 || x == 1)
    {
        return x;
    }
    else
    {
        return (fibonacci(x-2)+fibonacci(x-1));
    }
}

fs.readFile("numero.txt", 'utf8', (err, data) => {
    if(err)
    {
        console.error(err);
        return;
    }
    let x = data;
    console.log("Ingresa un numero: %d", x);
    console.log("F(%d): ", x, + fibonacci(x));
});
// PARA CAMBIAR EL NUMERO TIENES QUE MODIFICAR EL NUMERO EN EL .TXT