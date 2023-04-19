const validateEmail = (email: string): boolean => {

    let exclude = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let check = /@[w-]+./;
    let checkend = /.[a-zA-Z]{2,3}$/;

    if (exclude.test(email)) { return false }
    else { return true };

};

export { validateEmail };