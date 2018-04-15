
class Menu{

    MenuNavegacao = function(){
        var opcoesMenu = "1 - Curso\n" +
                         "2 - Aluno\n" +  
                         "0 - Sair"; 
        do {
            promptMenu = prompt(opcoesMenu);
            switch (promptMenu) {
                case 0:
                    break;
                case 1:
                    CursoMenu();
                    break;
                case 2:
                    AlunoMenu();
                    break;
                default:
                    alert("Opção inválida!");
                    continue;
            };

            
        } while (promptMenu != "0");
    };

};