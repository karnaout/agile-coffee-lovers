function isEligible(age, income, internet)
{
    let ageIsValid, incomeIsValid, internetIsValid = false;
    // Check age
    if ( ! Number.isInteger(age) ){
        return false;
    } else if( age >= 18 ) {
        return false;
    } else {
        ageIsValid = true;
    }

    // Check income
    if ( ! Number.isInteger(income) ){
        return false;
    } else if( income > 30 ) {
        return false;
    } else {
        incomeIsValid = true;
    }

    // Check internet
    if ( ! Number.isInteger(internet) ){
        return false;
    } else if( internet < 3 ) {
        return false;
    } else {
        internetIsValid = true;
    }

    return ageIsValid && incomeIsValid && internetIsValid;
};

module.exports = {
    isEligible,
};
