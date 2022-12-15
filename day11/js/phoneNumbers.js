const pattern = /(\+\d)?(\(?\d{3}\)?)(\-?\d{3})(\-?\s?\d{4})/;



const phoneNumber1 = '(555)555-1231';
const phoneNumber2 = '555-555-1232';
const phoneNumber3 = '5555551233';
const phoneNumber4 = '+1(555)555 1234';



function testString(str){
    // test method
    // console.log(pattern.test(str));
    // // exec method
    // console.log(pattern.exec(str));
    // // match method
    // console.log(str.match(pattern));
    // search method
    // console.log(str.search(pattern));
    return str.match(pattern);
}

// testString(phoneNumber1);
// testString(phoneNumber2);
// testString(phoneNumber3);
// console.log(typeof testString(phoneNumber1));


export function reformatPhoneNumber(str) {
    const phoneObject = str.match(pattern);
    const countryCode = phoneObject[1];
    const areaCode = phoneObject[2];
    const firstThree = phoneObject[3];
    const lastFour = phoneObject[4];
    return `${countryCode ? countryCode.replace(/\D/g, '', '') : ''}(${areaCode.replace(/\D/g, '')})${firstThree.replace(/\D/g, '')}-${lastFour.replace(/\D/g, '')}`;
}

// console.log(reformatPhoneNumber(testString(phoneNumber4)));
