define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Aluno = /** @class */ (function () {
        function Aluno() {
        }
        return Aluno;
    }());
    exports.Aluno = Aluno;
});

AlunoMenu = function(){
    var voltar = false;
    var opcaoUser = 0;
    var opcoesAluno = "1 - Cadastrar Aluno\n" +
                      "2 - Excluir Aluno\n" +  
                      "3 - Listar alunos\n" +
                      "0 - Voltar\n"; 
    do{
        voltar = false;
        opcoesAluno = parseInt(prompt(`O que deseja fazer? \n${opcoesAluno}`));
        switch (opcoesAluno) {
            case 0:
                voltar = true;
                break;
            case 1:
                AlunoController.inserir();
                break;
            case 2:
                AlunoController.remover();
                break;
            case 3:
                ListarCurso();
                break;
            default:
                alert("Opção inválida!");
                continue;
        };

    } while (opcoesAluno != 0);
    return voltar;
};
