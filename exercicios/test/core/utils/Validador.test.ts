import Validador from '@/core/utils/Validador'

test('Deve retornar null com texto não nulo', () => {
    const erro = Validador.naoNulo('Bom dia', 'Texto inválido')
    expect(erro).toBeNull()
})

test('Deve retornar erro com texto nulo', () => {
    const msgErro = 'Texto inválido'
    const erro = Validador.naoNulo(null, msgErro)
    expect(erro).toBe(msgErro)
})

test('Deve retornar null com texto não vazio', () => {
    const erro = Validador.naoVazio('ABC', 'Texto vazio')
    expect(erro).toBeNull()
})

test('Deve retornar erro com texto vazio', () => {
    const msgErro = 'Texto inválido'
    const e1 = Validador.naoVazio('       ', msgErro)
    expect(e1).toBe(msgErro)
})

test('Deve retornar erro com texto null', () => {
    const msgErro = 'Texto inválido'
    const e1 = Validador.naoVazio(null, msgErro)
    expect(e1).toBe(msgErro)
})

test('Deve retornar erro com texto undefined', () => {
    const msgErro = 'Texto inválido'
    const e1 = Validador.naoVazio(undefined, msgErro)
    expect(e1).toBe(msgErro)
})

test('Deve retornar null com texto menor que o tamanho máximo', () => {
    const erro = Validador.tamanhoMenorQue('teste', 6, 'erro')
    expect(erro).toBeNull()
})

test('Deve retornar null com texto menor que o tamanho máximo', () => {
    const erro = Validador.tamanhoMenorQue('Bom dia', 6, 'erro')
    expect(erro).toBe('erro')
})

test('Deve combinar os erros', () => {
    const erros = Validador.combinar(
        Validador.naoVazio('', 'erro1'),
        Validador.naoVazio('', 'erro2'),
        Validador.naoVazio('', 'erro3'),
        Validador.naoVazio('Teste', 'nao erro 4'),
        Validador.naoVazio('', 'erro5'),
    )

    expect(erros?.join(', ')).toBe('erro1, erro2, erro3, erro5')
})


test('Deve combinar sem erros', () => {
    const erros = Validador.combinar(
        Validador.naoVazio('Bom dia', 'erro1'),
        Validador.naoVazio('Boa tarde', 'erro2'),
        Validador.naoVazio('Boa noite', 'erro3'),
    )

    expect(erros).toBeNull()
})