import Erros from '@/core/constants/Erros'
import Pessoa from '@/core/pessoa/Pessoa'
import Id from '@/core/shared/Id'
import PessoaBuilder from '@/test/data/PessoaBuilder'

test('Deve lançar erro ao tentar criar uma pessoa com nome vazio', () => {
    expect(() => new Pessoa({ nome: '', cpf: '' })).toThrowError(Erros.NOME_VAZIO)
    expect(() => PessoaBuilder.criar().semNome().agora()).toThrowError(Erros.NOME_VAZIO)
})

test('Deve lançar erro ao tentar criar uma pessoa sem cpf', () => {
    expect(() => PessoaBuilder.criar().semCpf().agora()).toThrowError(Erros.CPF_INVALIDO)
})

test('Deve criar uma pessoa válida', () => {
    const nome = 'Pedro Augusto Soares'
    const pessoa = PessoaBuilder.criar().comNome(nome).semId().agora()
    expect(pessoa.nome.primeiroNome).toBe('Pedro')
    expect(pessoa.id.novo).toBeTruthy()
})

test('Deve clonar objeto com nome alterado', () => {
    const pessoa = PessoaBuilder.criar().agora()
    const novaPessoa = pessoa.clone({ nome: 'Pedro Augusto Pereira' })
    expect(novaPessoa.id.valor).toBe(pessoa.id.valor)
    expect(novaPessoa.cpf.valor).toBe(pessoa.cpf.valor)
    expect(novaPessoa.nome.completo).toBe('Pedro Augusto Pereira')
})

test('Deve clonar objeto com id alterado', () => {
    const pessoa = PessoaBuilder.criar().agora()
    const novaPessoa = pessoa.clone({ id: Id.novo.valor })
    expect(novaPessoa.id.valor !== pessoa.id.valor).toBe(true)
    expect(novaPessoa.nome.completo).toBe(pessoa.nome.completo)
    expect(novaPessoa.cpf.valor).toBe(pessoa.cpf.valor)
})
