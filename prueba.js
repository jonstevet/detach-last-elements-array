/**Detach the last element of the array and return it whit new element
*  @param studiants = (array of srting) ["Nath", "Luisa", "Noru"]
*  @param deathCount = (decimal number) 2
*  @param newStudiant = (string) "Camilo"
**/
function solution(studiants, deathCount, newStudiant) {
    // Tu código aquí 👈
    if(deathCount==0){
        studiants.push(newStudiant);
        return studiants;
    } else if(deathCount>0) {
        while(deathCount>0){
            studiants.pop();
            deathCount--
        }
        studiants.push(newStudiant)
        return studiants;
    }
    
}

module.exports = solution;


console.log(solution(["Nath", "Luisa", "Noru"], 2, "Camilo"));