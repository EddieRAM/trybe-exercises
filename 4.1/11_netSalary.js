let grossSalary = 3000;
let gSminusINSS = 0;
let gSminusIR = 0;
//let net salary = gSminusIR;

//INSS deduction//

if (grossSalary <= 1556.94) {
  gSminusINSS = grossSalary - (grossSalary/100)*8;
  console.log(gSminusINSS)
}
else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
  gSminusINSS = grossSalary - (grossSalary/100)*9;
  console.log(gSminusINSS)
}
else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
  gSminusINSS = grossSalary - (grossSalary/100)*11;
  console.log(gSminusINSS)
}
else if (grossSalary >= 5189.83) {
  gSminusINSS = grossSalary - grossSalary - 570;
  console.log(gSminusINSS);
}

else {
  console.log("Please, insert a valid salary")
}

 

//IR deduction//

if (gSminusINSS <= 1903.98) {
  gSminusIR = gSminusINSS;
  console.log(gSminusIR);
}
else if (gSminusINSS >= 1903.99 && gSminusIR <= 2826.65) {
  gSminusIR = gSminusINSS - (gSminusINSS/100)*7.5 + 142.80;
  console.log(gSminusIR);
}
else if (gSminusINSS >= 2826.66 && gSminusIR <= 3751.05) {
  gSminusIR = gSminusINSS - (gSminusINSS/100)*15 + 354.80;
  console.log(gSminusIR);
}
else if (gSminusINSS >= 3751.06 && gSminusIR <= 4664.68) {
  gSminusIR = gSminusINSS - (gSminusINSS/100)*22.5 + 636.13;
  console.log(gSminusIR);
}
else if (gSminusINSS >= 4664.69) {
  gSminusIR = gSminusINSS - (gSminusINSS/100)*27.5 + 869.36;
  console.log(gSminusIR);
}

