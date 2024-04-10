export const checkValidateData = (email: string, password: string, fullName?: string | null) => {
    const isEmailValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    const isPasswordValid = password.length > 6;

    if(!isEmailValid) return 'Enter a valid email address';
    if(!isPasswordValid) return 'Password is too weak';
    if(fullName !== null && !fullName?.length) return 'Enter your name'

    return null;
}