import { delay } from 'redux-saga';

export function* taskSaga() {
    while (true) {
        yield delay(1000);
        console.log("User saga loop");
    }
}