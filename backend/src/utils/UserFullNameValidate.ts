const UserFullNameValidate = (fullName: string): boolean => {

    const [ Name, Surname ] = fullName.toLocaleLowerCase().split(' ');

    if (!Name || !Surname) return false
    else if (Name.length < 3 || Surname.length < 3) return false;
    else return true;

};

export { UserFullNameValidate };