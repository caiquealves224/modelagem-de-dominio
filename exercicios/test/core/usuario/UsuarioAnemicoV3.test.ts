import Erros from '@/core/constants/Erros'
import Usuario from '@/core/usuario/UsuarioAnemicoV3'

const usuarioValido = () => new Usuario(123, 'Fulano', 'fulano@zmail.com', '123456')

test('Deve permitir usuario com nome undefined', () => {
    const usuario: Usuario = usuarioValido()
    usuario.setNome(undefined as any)
    expect(usuario.getNome()).toBeUndefined()
})

test('Deve permitir usuario sem nome', () => {
    const usuario: Usuario = usuarioValido()
    usuario.setNome('')
    expect(usuario.getNome()).toBe('')
})

test('Deve permitir usuario com id negativo', () => {
    const usuario: Usuario = usuarioValido()
    usuario.setId(-300)
    expect(usuario.getId()).toBe(-300)
})

test('Deve permitir usuario com email inválido', () => {
    const usuario: Usuario = usuarioValido()
    usuario.setEmail('!@#$')
    expect(usuario.getEmail()).toBe(usuario.getEmail())
})

test('Deve lançar erro ao tentar alterar senha com tamanha menor que 6 caracteres', () => {
    const usuario: Usuario = usuarioValido()
    expect(() => usuario.setSenha('65432')).toThrowError(Erros.SENHA_INVALIDA)
})

test('Deve alterar senha com senha maior ou igual a 6 caracteres', () => {
    const novaSenhaValida = '563412'
    const usuario: Usuario = usuarioValido()
    usuario.setSenha(novaSenhaValida)
    expect(usuario.getSenha()).toBe(novaSenhaValida)
})
