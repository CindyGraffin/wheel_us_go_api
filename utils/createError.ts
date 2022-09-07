export const createError = (status: number, message: string): Error => {
    const error = new Error();
    error.status = status;
    error.message = message;
    return error;
}