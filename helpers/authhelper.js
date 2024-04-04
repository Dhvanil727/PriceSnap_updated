import bcrypt from "bcrypt"


//encrypt hte password
export const hashPassword=async (password)=>{
    try {
        const saltRounds=10;
        const hashedPassword=await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
};

//this function will compare the user entered password with the stored password in database

export const comparepassword=async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
};