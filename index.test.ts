import { App } from './src/App';
// 1 2 3
describe('test-add-calculator', () => {
    it('element 1', () => {
        const value = new App();
        const results = value.add(1);
        expect(results).toBe(1);
    })
})