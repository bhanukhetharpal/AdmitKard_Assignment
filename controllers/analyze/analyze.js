import fs from "fs";
import util from "util";

const readFileAsync = util.promisify(fs.readFile);

async function analyzeText(filePath) {
    try{
        const text = await readFileAsync(filePath, 'utf-8');
        //all things required
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

module.exports = {analyzeText};