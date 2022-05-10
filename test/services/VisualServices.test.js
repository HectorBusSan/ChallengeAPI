const VisualServices = require("../../lib/services/VisualServices");
const Reader = require("../../lib/utils/Reader");
describe('Test para VisualServices',()=>{
    test('Requerimiento 1: Mostrar a todos los estudiantes',()=>{
        const read= Reader.readingjson();
        expect(read.length).toBe(51);
    });
    test('Requerimiento 2: Encontrar a los Estudiantes con el correo confirmado',()=>{
        const read= Reader.readingjson();
        const SVisual= VisualServices.haveCertification(read);
        expect(SVisual.length).toBe(29);
    });
    test('Requerimiento 3: Encontrar a los estudiantes con creditos por arriba de los 500',()=>{

    });
});