class Curso {
    constructor(nome){
        this.codigo = 0;
        this.nome = nome;
        this.mediaAprovacao = 0;
        this.alunos = 0;
    };

};
CursoMenu = function(){
    var voltar = false;
    var opcaoUser = 0;
    var opcoesCurso = "1 - Cadastrar Curso\n" +
                      "2 - Excluir Curso\n" +  
                      "3 - Listar Cursos\n" +
                      "0 - Voltar\n"; 
    do{
        voltar = false;
        opcaoUser = parseInt(prompt(`O que deseja fazer? \n${opcoesCurso}`));
        switch (opcaoUser) {
            case 0:
                voltar = true;
                break;
            case 1:                        
                InserirCurso()                        
                break;
            case 2:
                nomeCurso = porompt("Informe o nome do curso que deseja remover!");
                new CursoController().remover(cursos, nomeCurso);
                break;
            case 3:
                new CursoController().listar(cursos);
                break;
            default:
                alert("Opção inválida!");
                continue;
        };

    } while (opcaoUser != 0);
    return voltar;
};

