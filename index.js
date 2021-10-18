const USBigMac = 5.66;
const UKBigMac = 3.19;
const IPP = USBigMac/UKBigMac;
const exchangeRate = 1.37;
const index = ((exchangeRate - IPP)/IPP);
console.log(index);

const IrishBigMac = 4.79;
const IrishIPP = USBigMac/IrishBigMac;
const euroToDollar = 1.16;
const euroIndex = ((euroToDollar - IrishIPP)/IrishIPP);
console.log(euroIndex);

const IsraelBigMac = 54;
const IsraelIPP = USBigMac/IsraelBigMac;
const ShekelToDollar = 0.31;
const israelIndex = ((ShekelToDollar - IsraelIPP)/IsraelIPP);
console.log(israelIndex);

const southAfricaBigMac = 33.5;
const SAIPP = USBigMac/southAfricaBigMac;
const SARandToDollar = 0.068;
const SAIndex = ((SARandToDollar - SAIPP)/SAIPP);
console.log(SAIndex);

const denmarkBigMac = 30;
const denmarkIPP = USBigMac/denmarkBigMac;
const danishKroneToDollar = 0.16;
const danishIndex = ((danishKroneToDollar - denmarkIPP)/denmarkIPP);
console.log(danishIndex);


console.log(denmarkIPP);

console.log(index > euroIndex);
console.log(index > israelIndex);
console.log(index > SAIndex);
console.log(index > danishIndex);


