import {greet} from './greet';

describe('greet', () =>{
    it('should include the name in the mssage', () =>{
        expect(greet('mosh')).toContain('mosh');
    })
})