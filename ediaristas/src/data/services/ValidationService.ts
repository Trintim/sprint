export const ValidationService = {
    cep(cep = ''): boolean{
        //expressão regular
        return cep.replace(/\D/g, '').length === 8;
    }
}