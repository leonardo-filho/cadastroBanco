const banco = require('./index')

describe('tentativas com sucesso', () =>{
    it('deposito com saldo zerado',()=>{
        expect(banco.depositar(10)).toBe(banco.saldo)
    })
    it('deposito com saldo existente',()=>{
        banco.saldo =+ 10
        expect(banco.depositar(10)).toBe(banco.saldo)
    })
    it('saque com saldo de 10',()=>{
        banco.saldo =+ 10
        
        expect(banco.sacar(10)).toBe(0)
    })
})