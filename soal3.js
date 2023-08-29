const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function soal3(){
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
        readline.close();
    });
}
soal3();