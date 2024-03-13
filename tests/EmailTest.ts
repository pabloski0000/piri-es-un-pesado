import { MY_EMAIL } from "src/constants";

export function isMyEmailCorrect() {
    if (MY_EMAIL !== 'plajommj000@gmail.com') {
        throw Error('Incorrect email')
    }
}