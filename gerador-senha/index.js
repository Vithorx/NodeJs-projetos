function gerarSenha(tamnanho, incluirNumeros, incluirSimbolos){
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let caracteres = letras;

    if(incluirNumeros) caracteres += numeros;
    if(incluirSimbolos) caracteres += simbolos;

    let senha = "";
    for(let i = 0; i < tamnanho; i++){
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indiceAleatorio];
    }
    return senha;
}
const senha = gerarSenha(12, true, true);
console.log("Senha gerada:", senha);