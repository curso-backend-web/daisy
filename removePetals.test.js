import { jest } from '@jest/globals';

import DaisyGame from './removePetals.js';


describe('sample',()=>{
    test('1+1 = 2',()=>{
        expect(1+1).toBe(2);
    })
})

describe('testing Daisy',()=>{
    let daisy;
    beforeEach(()=>{
        daisy = new DaisyGame();
    })
    describe('testing object',()=>{
        test('daisy is an instance of Daisy',()=>{
            // const daisy = new DaisyGame();
            expect(daisy).toBeInstanceOf(DaisyGame);
        })
    })
    describe('testing play method',()=>{
        test('play() should call deshojarMargarita()',async ()=>{
            // const daisy = new DaisyGame();
            const spyDeshojarMargarita = jest.spyOn(daisy,'deshojarMargarita')
                                                    .mockImplementation(()=>Promise.resolve('me quiere'));
            await daisy.play();
            expect(spyDeshojarMargarita).toHaveBeenCalledTimes(1);
        })
        test('play() should call printBlue()',async ()=>{
            const spyDeshojarMargarita = jest.spyOn(daisy,'deshojarMargarita')
                                                .mockImplementation(()=>Promise.resolve('me quiere'));
            const spyPrintBlue = jest.spyOn(daisy, 'printBlue');
            await daisy.play();
            expect(spyPrintBlue).toHaveBeenCalledTimes(1);
        })
        test('play() should not call printBlue()',async ()=>{
            const spyDeshojarMargarita = jest.spyOn(daisy,'deshojarMargarita')
                                                .mockImplementation(()=>Promise.reject('no me quiere'));
            const spyPrintBlue = jest.spyOn(daisy, 'printBlue');
            await daisy.play();
            expect(spyPrintBlue).not.toHaveBeenCalled();
        })
        test('play() should call printRed()',async ()=>{
            const spyDeshojarMargarita = jest.spyOn(daisy,'deshojarMargarita')
                                                .mockImplementation(()=>Promise.reject('no me quiere'));
            const spyPrintRed = jest.spyOn(daisy, 'printRed');
            await daisy.play();
            expect(spyPrintRed).toHaveBeenCalledTimes(1);
        })
    })


})

