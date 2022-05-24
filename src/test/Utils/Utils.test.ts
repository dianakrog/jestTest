import { Utils } from "../../app/Utils/Utils";
import { IncomingMessage } from 'http';

describe.only ('Utils test suite', () => {

    test('getRequestPath valid request', () => {
        const  request = {
            url: 'http://localhost:8080/login'
        } as IncomingMessage;

        const resultPath = Utils.getRequestBasePath(request);
        expect(resultPath).toBe('login');
    })

    test('getRequestPath with no path name ', () => {
        const  request = {
            url: 'http://localhost:8080/'
        } as IncomingMessage;

        const resultPath = Utils.getRequestBasePath(request);
        expect(resultPath).toBeFalsy();
    })
})

describe ('Utils test suite 2', ()=>{

    beforeEach(()=>{
        console.log('before each message');
    })

    test('first test', ()=>{
        const result = Utils.toUpperCase('abc');
        expect(result).toBe('ABC');
    });

    test('Parse simple URL', () => {
        const url = 'http://localhost:8080/login'
        const parseUrl = Utils.parseUrl(url);
        expect(parseUrl.href).toBe(url);
        expect(parseUrl.port).toBe('8080');
        expect(parseUrl.protocol).toBe('http:');
        expect(parseUrl.query).toEqual({});
    });

    test('Parse URL with query', () => {
        const url = 'http://localhost:8080/login?user=user&password=pass'
        const parseUrl = Utils.parseUrl(url);
        const expectedQuery = {
            user: 'user',
            password: 'pass'
        }

        expect(parseUrl.query).toEqual(expectedQuery);
        expect(expectedQuery).toBe(expectedQuery);
    });
    
    test.skip('Parse simple URL validationUser', () => {
        const url = 'http://localhost:8080/validationUser'
        const parseUrl = Utils.parseUrl(url);
        expect(parseUrl.href).toBe(url);
        expect(parseUrl.port).toBe('8080');
        expect(parseUrl.protocol).toBe('http:');
        expect(parseUrl.query).toEqual({});
    });

    test('Test Invalida URL', ()=> {
        function expectError() {
            Utils.parseUrl('')
        }
        expect(expectError).toThrowError();
    });

    test('Test Invalida URL with error function', ()=> {
        expect(() => {
            Utils.parseUrl('')
        }).toThrowError();
    });

    test.only('Test Invalida URL with try catch', ()=> {
        try {
            Utils.parseUrl('');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Empty url!')
        }
    });
});

describe ('Utils test suite 3', ()=>{

    beforeAll(()=>{
        console.log('before all message');
    })

    test('first test 2', ()=>{
        const result = Utils.toUpperCase('abc');
        expect(result).toBe('ABC');
    });   
});