const VisualServices = require("../../lib/services/VisualServices");
const Reader = require("../../lib/utils/Reader");
describe('Test para VisualServices',()=>{
    test('Requerimiento 1: Mostrar a todos los estudiantes',()=>{
        const read= Reader.readingjson();
        expect(read.length).toBe(51);
    });

});