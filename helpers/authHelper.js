import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hassedPassword = await bcrypt.hash(password, saltRounds);
        return hassedPassword;
    } catch (error) {
        console.log(error);
    }
};

export const comparePassword = async (password, hassedPassword) => {
    return bcrypt.compare(password, hassedPassword);
};
