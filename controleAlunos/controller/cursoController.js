class CursoController{
    inserir(curso) {
        cursos.push({curso}); 
        console.log(curso);
        OperacaoSucessoLog();                               
    };

    listar(cursos) {
        cursos.forEach(element => {
            // alert(element.nome);
            //console.log(`Codigo: ${element.codigo}\nNome: ${element.nome}\nmediaAprovacao: ${element.mediaAprovacao}\nAlunos: ${element.alunos}`)
            listaCursos += `Codigo: ${element.codigo}\nNome: ${element.nome}\nmediaAprovacao: ${element.mediaAprovacao}\nAlunos: ${element.alunos}`
        });
    };

    remover(cursos, nomeCurso){
        var cursoFind = cursos.find(function(curso){
            return curso.nome == nomeCurso;
        });
        if (cursoFind){
            cursos.pop(cursoFind.nome);                    
            OperacaoSucessoLog();
        };
    };

};

InserirCurso = function(){
    var promptCurso = 0;
    var curso = new Curso();
    do {
        promptCurso = prompt("Informe o Nome do Curso " + paraVoltarTexto); 
        if (promptCurso == "" || promptCurso == null){
            alert("Informe um curso!");
            continue;
        }
        else if (promptCurso != "0") {
            curso.nome = promptCurso;
            curso.codigo = cursos.length+1;
            new CursoController().inserir(curso);
            continue;
        }
    } while (promptCurso != "0");
    return true;
};