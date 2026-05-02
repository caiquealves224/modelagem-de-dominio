import Validador from "@/utils/Validador"

test('Deve retornar null com texto não nulo', () => {
    const erro = Validador.naoNulo('Bom dia', 'Texto inválido')
    expect(erro).toBeNull()
})

test('Deve retornar erro com texto nulo', () => {
    const msgErro = 'Texto inválido'
    const erro = Validador.naoNulo(null, msgErro)
    expect(erro?.codigo).toBe(msgErro)
})

test('Deve retornar null com texto não vazio', () => {
    const erro = Validador.naoVazio('ABC', 'Texto vazio')
    expect(erro).toBeNull()
})

test('Deve retornar erro com texto vazio', () => {
    const msgErro = 'Texto inválido'
    const e1 = Validador.naoVazio('       ', msgErro)
    expect(e1?.codigo).toBe(msgErro)
})

test('Deve retornar erro com texto null', () => {
    const msgErro = 'Texto inválido'
    const e1 = Validador.naoVazio(null, msgErro)
    expect(e1?.codigo).toBe(msgErro)
})

test('Deve retornar erro com texto undefined', () => {
    const msgErro = 'Texto inválido'
    const e1 = Validador.naoVazio(undefined, msgErro)
    expect(e1?.codigo).toBe(msgErro)
})

test('Deve retornar null com texto menor que o tamanho máximo', () => {
    const erro = Validador.tamanhoMenorQue('teste', 6, 'erro')
    expect(erro).toBeNull()
})

test('Deve retornar erro com texto maior ou igual que o tamanho máximo', () => {
    const erro = Validador.tamanhoMenorQue('Bom dia', 7, 'erro')
    expect(erro?.codigo).toBe('erro')
})

test('Deve retornar null com texto menor ou igual que o tamanho máximo', () => {
    const erro = Validador.tamanhoMenorQueOuIgual('teste', 5, 'erro')
    expect(erro).toBeNull()
})

test('Deve retornar erro com texto maior que o tamanho máximo', () => {
    const erro = Validador.tamanhoMenorQueOuIgual('Bom dia', 6, 'erro')
    expect(erro?.codigo).toBe('erro')
})

test('Deve retornar null com texto maior que o tamanho mínimo', () => {
    const erro = Validador.tamanhoMaiorQue('teste', 4, 'erro')
    expect(erro).toBeNull()
})

test('Deve retornar erro com texto menor ou igual que o tamanho mínimo', () => {
    const erro = Validador.tamanhoMaiorQue('Bom dia', 7, 'erro')
    expect(erro?.codigo).toBe('erro')
})

test('Deve retornar null com texto maior ou igual que o tamanho mínimo', () => {
    const erro = Validador.tamanhoMaiorQueOuIgual('teste', 5, 'erro')
    expect(erro).toBeNull()
})

test('Deve retornar erro com texto menor que o tamanho mínimo', () => {
    const erro = Validador.tamanhoMaiorQueOuIgual('Bom dia', 10, 'erro')
    expect(erro?.codigo).toBe('erro')
})

test('Deve validar via regex que só tem números ', () => {
    const erro = Validador.regex('12345678900', /\d{11}/, 'erro')
    expect(erro).toBeNull()
})

test('Deve retornar erro via validação de números ', () => {
    const erro = Validador.regex('123A5678900', /\d{11}/, 'erro')
    expect(erro?.codigo).toBe('erro')
})

test('Deve combinar os erros', () => {
    const erros = Validador.combinar(
        Validador.naoVazio('', 'erro1'),
        Validador.naoVazio('', 'erro2'),
        Validador.naoVazio('', 'erro3'),
        Validador.naoVazio('Teste', 'nao erro 4'),
        Validador.naoVazio('', 'erro5'),
    )

    expect(erros?.map(e => e.codigo)?.join(', ')).toBe('erro1, erro2, erro3, erro5')
})

test('Deve combinar sem erros', () => {
    const erros = Validador.combinar(
        Validador.naoVazio('Bom dia', 'erro1'),
        Validador.naoVazio('Boa tarde', 'erro2'),
        Validador.naoVazio('Boa noite', 'erro3'),
    )

    expect(erros).toBeNull()
})