/* Without using functions, arrays or objects this task can be very tedious to complete, 
*/
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
const testData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let delimeter = ',', newLine = '\n'

let newCSV = csv.split(newLine);
let cell0 = "", cell1 = "", cell2 = "", cell3 = "";
for (let i = 1; i < newCSV.length; i++) {
    let row = newCSV[i].split(delimeter);
    for (let j = 0; j < row.length; j++){
        cell0 = row[0];
        cell1 = row[1];
        cell2 = row[2];
        cell3 = row[3];
    }
    break
}

console.log(cell0, cell1, cell2, cell3);
