const VisualServices = require("../services/VisualServices");
const Reader = require("../utils/Reader");
class VisualControlls{
    static show(){
        const read= Reader.readingjson();
        return read
    }
    static have(){
        const read= Reader.readingjson();
        const SVisual= VisualServices.haveCertification(read);
        return(SVisual)
    }
    static credit(){
        const read= Reader.readingjson();
        const SVisual= VisualServices.credits(read);
        return SVisual;
    }
}
module.exports= VisualControlls;