const {removeItem, myFizzBuzz, encode, decode} = require('./exercicio');

describe('Exercicio-1 testa a função removeItem', () => {
  it('retorna array removendo o item correto', () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    
  });
});

describe('Exercicio-2 testa a função fizzBuzz', () => {
  it('retorna valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz("a")).toBeFalsy();

  });
});

describe ('Exercicio-3 Testa as funçoes encode e decode', () => {
  it('teste se encode e decode são funçoes', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('teste se encode converte vogais: a,e,i,o,u para 1,2,3,4,5', () => {
    expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
  });
  it('teste se decode converte numeros para vogais', () => {
    expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
  });
  it('teste se retorna a quatidade de caracteres do parametro', () => {
    expect(encode('ana').length).toEqual(3);
  });

});


