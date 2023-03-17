const myTesting = require('./summation')
test.skip("return the num1+num2",()=>{
expect(myTesting(25,15)).toBe(40);

})
/////////////////////
test.skip("return the num1+num2",()=>{

    expect(myTesting(25,1)).toBe(26);
})    
////////////////
test.skip("return the num1+num2+number3",()=>{

expect(myTesting(25,15,20)).toBe(60);

})
