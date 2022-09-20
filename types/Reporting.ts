import mongoose from "mongoose";

type Reporting = {
    userId: mongoose.Types.ObjectId;
    firstname: string;
    lastname: string;
    email: string;
};

export { Reporting };
