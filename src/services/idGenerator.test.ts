import IdGenerator from './idGenerator';

describe('Id Generator', () => {
  it('creates generator that returns different values', () => {
    const generator = new IdGenerator();
    expect(generator.next).toBeLessThan(generator.next);
  });

  it('creates two independent generators', () => {
    const generator1 = new IdGenerator();
    const generator2 = new IdGenerator();

    expect(generator1.next).toBe(generator2.next);
  });
});
