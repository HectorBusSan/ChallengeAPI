class VisualServices{
    static haveCertification(visual){
        const have= visual.filter(res=>res.haveCertification===true);
        const check= have.map(res=>res.email);
        return check;
    }
    static credits(visual){
        const credit= visual.filter(res=>res.credits>500);
        return credit;
    }
}
module.exports= VisualServices;