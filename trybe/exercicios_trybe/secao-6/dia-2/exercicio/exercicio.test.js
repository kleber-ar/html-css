
const { default: expect } = require('expect');
const removeItem = require('./exercicio');

const myFizzBuzz = require('./exercicio');

describe('testa a função removeItem', () => {
    it('retorna array removendo o item correto', () => {
      expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
      expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
      expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
        
    });
});

describe('testa a função fizzBuzz', () => {
  it('Retorna valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe('1');
    expect(myFizzBuzz("15")).toBeFalsy();
  })
})