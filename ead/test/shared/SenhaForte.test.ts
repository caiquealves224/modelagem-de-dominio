import Erros from "@/constants/Erros"
import SenhaForte from "@/shared/SenhaForte"

test('Deve lançar erro com senha vazia', () => {
    expect(() => new SenhaForte()).toThrowError(Erros.SENHA_FRACA)
    expect(() => new SenhaForte('')).toThrowError(Erros.SENHA_FRACA)
})

test('Deve lançar erro com senha apenas com números', () => {
    expect(() => new SenhaForte('1234567890')).toThrowError(Erros.SENHA_FRACA)
})

test('Deve lançar erro com senha apenas com letras', () => {
    expect(() => new SenhaForte('AbCdEfGhIj')).toThrowError(Erros.SENHA_FRACA)
})

test('Deve lançar erro com senha apenas com caracteres especiais', () => {
    expect(() => new SenhaForte('!@#$%¨&*()_+')).toThrowError(Erros.SENHA_FRACA)
})

test('Deve lançar erro com senha com menos de 8 caracteres', () => {
    expect(() => new SenhaForte('%S3nh4%')).toThrowError(Erros.SENHA_FRACA)
})

test('Deve criar senha forte', () => {
    const senha = 'S3nh4F0rt3%'
    expect(new SenhaForte(senha).valor).toBe(senha)
})