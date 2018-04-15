
class Login{
    constructor(){
        Login();
    };   
};

Login = function(){
    do {
        userNome = prompt("Informe o Usuário ou " + paraVoltarTexto);
        
        if (userNome == "" || userNome == null){
            console.log(userNome);
            alert("Informe o usuário!");
            continue;
        } 
        else if (userNome == "0")
            break;

        userPassword = prompt("Informe a senha: ","*****");

        if (userPassword == "" || userPassword == null){
            alert("Informe a senha do usuário!")
            continue;
        }
        else if (userPassword == "0")
            braak;

        usuarioFound = usuarios.find(function(usuario){
            return usuario.nome == userNome;
        });  

        if (usuarioFound == undefined){
            alert("Usuário não cadastrado!")
            continue;
        }

        senhaFound = usuarios.find(function(usuario){
            return usuario.senha == userPassword;
        });  

        if (senhaFound == undefined){
            alert("Senha incorreta!")
            continue;
        }

        // new Menu();

    } while (userNome != "0" || userPassword != "0");
    if (userNome != "0" || userPassword != "0")
        alert("Operação encerrada!");
    return true;
};

