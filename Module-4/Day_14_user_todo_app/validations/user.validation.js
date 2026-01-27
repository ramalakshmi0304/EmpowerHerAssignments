export const validateSignup=({name,email,password})=>{
    if (!name||!email||!password){
        return "Name, email and password are required";
    }

    return null;
}