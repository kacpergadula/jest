import { App } from './src/App';
// 1 2 3
describe('test-add-calculator', () => {
    it('element 1', () => {
        const value = new App();
        const results = value.add(1);
        expect(results).toBe(1);
    })
    it('element 2', () => {
        const valuea = new App();
        const valueb = new App();
        let results = valuea.add(1);
        results = results + valueb.add(3);
        expect(results).toBe(4);
    })
})