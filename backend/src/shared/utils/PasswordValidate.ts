const PasswordValidate = (password: string): boolean => {

    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbole = /[!@#%&]/.test(password);
    
    const conditions = [hasUpperCase, hasNumber, hasSymbole];

    let validConditions = 0;
    const numberOfMustBeValidConditions = 3;
    
    conditions.forEach((condition) => condition ? validConditions++ : null );

    if (validConditions === numberOfMustBeValidConditions) return true;
    else return false;

};

export { PasswordValidate };