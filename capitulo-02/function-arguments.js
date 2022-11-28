function umaFuncaoAleatoria()
{

    if (arguments.length === 0)
    {
        console.log('Esta função não recebeu parâmetros!!');
        return;
    }

    console.log('esta funcao possui os seguintes argumentos:');
    Object.values(arguments).forEach(arg => console.log(arg));

}

umaFuncaoAleatoria('arg1', 'arg2', 'arg3');
console.log('---')

umaFuncaoAleatoria('arg4', 'arg5', 'arg6', 'arg7', 'arg666');
console.log('---');

umaFuncaoAleatoria();
