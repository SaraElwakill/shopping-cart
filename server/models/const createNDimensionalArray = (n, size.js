const createNDimensionalArray = (n, size ) => {
   let str = `level ${n}`
   let root = Array(size).fill(str)

   let inner= Array(size).fill(root)
   console.log(inner);
   let result = Array(size).fill(inner)
    
    return result
    
}
console.log(createNDimensionalArray(2,2));
//[[['level 3', 'level 3'], ['level 3', 'level 3']], [['level 3', 'level 3'], ['level 3', 'level 3']]]

//   describe("Static tests", () => {
//     it("createNDimensionalArray(1, 2)", () => {
//       assert.deepEqual(createNDimensionalArray(1,2), ['level 1', 'level 1']);
//     });
//     it("createNDimensionalArray(1, 3)", () => {
//       assert.deepEqual(createNDimensionalArray(1,3), ['level 1', 'level 1', 'level 1']);
//     });
//     it("createNDimensionalArray(2, 2)", () => {
//       assert.deepEqual(createNDimensionalArray(2,2), [['level 2', 'level 2'], ['level 2', 'level 2'],]);
//     });
//     it("createNDimensionalArray(2, 3)", () => {
//       assert.deepEqual(createNDimensionalArray(2,3), [['level 2', 'level 2', 'level 2'], ['level 2', 'level 2', 'level 2'], ['level 2', 'level 2', 'level 2']]);
//     });
//     it("createNDimensionalArray(3, 1)", () => {
//       assert.deepEqual(createNDimensionalArray(3,1), [[['level 3']]]);
//     });
//     it("createNDimensionalArray(3, 2)", () => {
//       assert.deepEqual(createNDimensionalArray(3,2), [[['level 3', 'level 3'], ['level 3', 'level 3']], [['level 3', 'level 3'], ['level 3', 'level 3']]]);
//     });  
//   });