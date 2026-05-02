import Erros from "@/constants/Erros"
import AulaBuilder from "../data/AulaBuilder"

test('Deve lançar erro com duração zerada', () => {
    expect(() => AulaBuilder.criar().comDuracao(0).agora()).toThrowError(
        Erros.AULA_DURACAO_ZERADA,
    )
})

test('Deve possuir ordem padrão como 1', () => {
    const aula = AulaBuilder.criar().semOrdem().agora()
    expect(aula.ordem.valor).toBe(1)
})

test('Deve lançar erro ao tentar criar aula com ordem negativa ou zero', () => {
    expect(() => AulaBuilder.criar().comOrdem(0).agora()).toThrowError(Erros.ORDEM_INVALIDA)
    expect(() => AulaBuilder.criar().comOrdem(-10).agora()).toThrowError(Erros.ORDEM_INVALIDA)
})

test('Deve lançar erro ao tentar criar aula com nome pequeno', () => {
    expect(() => AulaBuilder.criar().comNome('X').agora()).toThrowError(Erros.NOME_PEQUENO)
})