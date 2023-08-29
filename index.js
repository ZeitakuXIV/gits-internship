const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function soal1(){
    let result = []
    console.log("soal 1")
    readline.question('', num => {
        for(let i = 0; i < num; i++){
            x = i*(i+1)/2 + 1
            result.push(x)
        }
        console.log(result.join("-"))
        console.log("soal 1 selesai")
        readline.removeAllListeners('line');
        readline.removeAllListeners('close');
        soal2();
    });
}

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
        console.log(ranks.join(" "))
        console.log("soal 2 selesai")
        readline.removeAllListeners('line');
        readline.removeAllListeners('close');
        soal3();
    });
}
function soal3(){
    console.log("soal 3")
    readline.question('', input => {
            let stack = []
            o:
            for(let char of input){
                if(char == "(" || char == "{" || char == "["){
                    stack.push(char)
                    continue;
                }
                let check;
                switch (char){
                case ')':
                    check = stack.pop();
                    if (check == '{' || check == '[')
                        break o;
                    break
        
                case '}':
                    check = stack.pop();
                    if (check == '(' || check == '[')
                        break o;
                    break
        
                case ']':
                    check = stack.pop();
                    if (check == '(' || check == '{')
                        break o;
                    break
            }
        }
        if(stack.length == 0){
            console.log("YES")
        } else {
            console.log("NO")
        }
        console.log("soal 3 selesai")
        readline.close();
        process.exit(0);
    });
}

soal1();