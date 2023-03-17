const myDataCheck = require("./data");

test("to check if the length of my array is 7 ", () => {

expect(myDataCheck.length).toBe(7);

});
test("to check if the length of my array is 7 ", () => {

expect(myDataCheck).toHaveLength(7);

});
test("to check if my array contains the name ofahmad", () => {

expect(myDataCheck).toContain("ahmad");

});
test("to check if my array dose not contains the name abed", () => {

expect(myDataCheck).not.toContain("abed");

});
test(" same as pervious one to check if my array dose not contains the name abed", () => {
for (let i = 0; i < myDataCheck.length; i++) {
expect(myDataCheck).not.toContain("abed");

}
});
test(" tocheck if my array dosent have any number inside it", () => {

for (let i = 0; i < myDataCheck.length; i++) {
expect(isNaN(myDataCheck[i])).toBe(true)

}
});
test(" same as pervious one to check if my array dose not contains the name abed", () => {

for (let i = 0; i < myDataCheck.length; i++) {
expect(isNaN(myDataCheck[i])).toBeTruthy()

}
});
test.skip(" same as pervious one to check if my array dose not contains the name abed", () => {

for (let i = 0; i < myDataCheck.length; i++) {
expect(isNaN(myDataCheck[i])).toBeFalsy()

}
});
/////////////////////////////////////////////////////////////////////
test(" check if my array first element is larger than 1", () => {

for (let i = 0; i < myDataCheck.length; i++) {
expect(myDataCheck[0]).toBeGreaterThan(1)

}
});
test(" check if my array first element is larger than 1", () => {

for (let i = 0; i < myDataCheck.length; i++) {

expect(myDataCheck[0]).toBeLessThanOrEqual(1)

}
});
test(" check if my String have substring inside it", () => {

let fullName = "ahmad Mohammad ali"

expect(fullName).toMatch(/ahmad/)

});

test("check if my info have the property age"

, () => {

let myInfo = {name: "abedalraheem",age: 29,nationallity: "jordanian",};

expect(myInfo).toHaveProperty("name");

});
test("check if my info have the property age"

, () => {

let myInfo2 = {

name: "abedalraheem",
age: 29,
nationallity: "jordanian",};

expect(myInfo2).toHaveProperty("age",29);});