module.exports = {
    transform: {
        '^.+\\.ts?$' : 'ts-jest'
    },
    roots : ['<rootDir>'],
    testRegex : '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts','tsx','jsx','json','node']
}