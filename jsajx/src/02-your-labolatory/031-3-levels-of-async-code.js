// 1. callbacks
setTimeout(() => {});

// 2. Promise
async function ajaxCall() {
    return 'data'
}

// 3. Observables / streams
import { Subject } from 'rxjs'
const stream = new Subject();

stream.subscribe((value) => {
    console.log(value)
})
