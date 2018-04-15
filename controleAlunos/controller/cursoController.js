class CursoController{
    cursos = [];
    
    inserir(curso) {
        cursos.push(curso);
        console.log(cursos);
        return true;
    }
}
