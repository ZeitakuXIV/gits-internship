const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function soal1(){
    let result = []
    readline.question('', num => {
        for(let i = 0; i < num; i++){
            x = i*(i+1)/2 + 1
            result.push(x)
        }
        console.log(result.join("-"))
        readline.close();
    });
}
soal1()