const fs= require('fs')
class Reader{
    static readingjson(){
        // const rawdata= fs.readFileSync("https://gist.githubusercontent.com/carlogilmar/1f5164637fb77aecef3b9e6b9e2a9b63/raw/238b06758891bad5d1e6f2dc53ed6d5247934741/visualpartners.json");
        const rawdata= fs.readFileSync("visualpartners.json");
        return JSON.parse(rawdata);
    }
}
module.exports= Reader;