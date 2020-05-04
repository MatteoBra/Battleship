const array1 = ["A", "B", "C","D", "E", "F", "G", "H", "I","J"]
const array2 = ["1", "2", "3","4", "5", "6", "7", "8", "9","10"]

export const squareArray = []

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        squareArray.push(array1[i]+array2[j])
        
    }
    
}
