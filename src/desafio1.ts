
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
interface employee{
    code: number,
    name: string
}

const funcionario = {} as employee;
funcionario.code = 10;
funcionario.name = "John";