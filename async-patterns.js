import { readFile, writeFile } from "fs/promises";
// import util from "util";
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start = async()=>{
    try{
        const first = await readFile('./content/first.txt', "utf-8");
        const second = await readFile('./content/second.txt', "utf-8");
        await writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`,{flag : 'a'});
        console.log(first);
        console.log(second);
        console.log('Files written successfully.');
    } catch (err) {
        console.error(err);
    }
    
}
start();
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText("./content/first.txt")
// .then(result => console.log(result))
// .catch(err => console.error(err));