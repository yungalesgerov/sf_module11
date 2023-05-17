const getPercents = require('../../utils/getPercents.js');

describe("test getPercents", () => {
  it('count percent', ()=> {
    let result = getPercents(60,200);
    expect(result).toBe(120);
  }),
  it('count with symbols', () => {
    let result = getPercents("abc", 200);
    expect(result).toBe('Что-то пошло не так');
  }),
  it('try to crash',()=> {
    let result = getPercents(null,200);
    expect(result).toBe('Число не может быть равно null');
  }),
  it('check for null',()=> {
    let result = getPercents(10,null);
    expect(result).toBe('Число не может быть равно null');
  }),
  it(' percent less then zero',()=> {
    let result = getPercents(-19,200);
    expect(result).toBe('Зачем тебе отрицательные проценты???');
  });
  
}); 