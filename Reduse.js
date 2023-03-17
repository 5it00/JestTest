//if we dont know the total numbers

function thesum(...numbers) {

return numbers.reduce((pv,cv)=>pv+cv) ;

}
module.exports=thesum;

//reduce take two parameter

//cv: current value

//pv : previous value
function thesumm(...numbers) {

    return numbers.reduce((pv,cv)=>pv+cv,0) ;
    
    }
    
    //the 0 here is the initial value  this means that if no previous 
    //and nocurrent value this will bring 0 for me
    
