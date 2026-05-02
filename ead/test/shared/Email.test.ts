import Erros from "@/constants/Erros"
import Email from "@/shared/Email"

test('Deve criar um email válido', () => {
    const email = new Email('fulano@zmail.com')
    expect(email.valor).toBe('fulano@zmail.com')
})

test('Deve retornar o nome do usuário', () => {
    const email = new Email('fulano@zmail.com')
    expect(email.usuario).toBe('fulano')
})

test('Deve retornar o domínio', () => {
    const email = new Email('fulano@zmail.com')
    expect(email.dominio).toBe('zmail.com')
})

test('Deve lançar erro ao criar um email inválido', () => {
    expect(() => new Email()).toThrowError(Erros.EMAIL_INVALIDO)
    expect(() => new Email('')).toThrowError(Erros.EMAIL_INVALIDO)
    expect(() => new Email('fulano')).toThrowError(Erros.EMAIL_INVALIDO)
    expect(() => new Email('fulano@zmail')).toThrowError(Erros.EMAIL_INVALIDO)
})