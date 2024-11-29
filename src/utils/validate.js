export const checkValidData = (email, password, fullName) => {
    const isEmailValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    const isPasswordValid = password?.trim().length;
    if(!isEmailValid) return 'Email is not valid';
    if(!isPasswordValid) return 'Password is not valid';
    if(fullName !== null && !fullName) return 'Fullname is not valid';
    return null;
}