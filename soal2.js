const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function soal2(){
    let input = []
    readline.prompt();
    readline.on('line', function (cmd) {
        input.push(cmd)
        if (input.length >= 4) {
            readline.close();
        } else {
            readline.prompt();
        }
    });
    readline.on('close', function() {
        let firstGrades = input[1].split(" ")
        let filteredGrades = []
        let ranks = []
        firstGrades.forEach(element => {
            if(!filteredGrades.includes(element)){
                filteredGrades.push(element);
            }
        });
        let secondGrades = input[3].split(" ")
        secondGrades.forEach(element => {
            for(i = 0; i < filteredGrades.length; i++){
                if(parseInt(element)<parseInt(filteredGrades[filteredGrades.length-1])){
                    ranks.push(filteredGrades.length+1)
                    break;
                }
                if(parseInt(element)>parseInt(filteredGrades[i])){
                    ranks.push(i+1)
                    break;
                }
            }
        })
        console.log(ranks.join(" "));
    });
}
soal2()