import inquirer from 'inquirer';

function wordcounter(text:string){
    let freeWhiteSpace =text.replace(/\s/g,"");
    ;
    return freeWhiteSpace.length;

}

async function paragraph(word : (text:string)=>number) {
do{
    let res =await inquirer.prompt({
        type:"input",
        message:"Write paragraph here...",
        name:"paragraph"
    });
    console.log(`The paragraph's word count is ${wordcounter(res.paragraph)}`);
}
while(true)
   
};
paragraph(wordcounter);



