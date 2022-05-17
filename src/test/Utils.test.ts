import { userInfo } from 'os';
import {Utils} from '../app/Utils'

describe ('Utils test suite', ()=>{

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
});