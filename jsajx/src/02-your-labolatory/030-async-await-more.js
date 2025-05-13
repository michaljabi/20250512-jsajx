
async function makeAjaxCallAsPromise(url) {
    if (url.startsWith('https://third')) {
        throw new Error('reject')
    }
    return 'resolved';
}

// console.log(JSON.parse('{}718623'))

try {
    const firstData = await makeAjaxCallAsPromise('https://first');
    // throw new Error('error here...!')
    const secondData = await makeAjaxCallAsPromise('https://second' + firstData.url);
    console.log(secondData);
    const thirdData = { url: 'test' };
    console.log(thirdData);
    // throw new Error('error here...!')
    // const fourthData = await makeAjaxCallAsPromise('https://third' + thirdData.url);
    console.log('THIS IS COOLNESS !!!', undefined);
    console.log('THIS IS COOLNESS !!!', undefined);
    const sixthData = 789;
    console.log('THIS IS COOLNESS !!!', sixthData);
    const seventhData = await Promise.resolve('abcdef');
    console.log('THIS IS COOLNESS !!!', seventhData);
} catch (err) {
    console.log('error 😐', err.message);
}

// LEPSZE podjeście jeśli kolejna operacja async nie jest zależna od poprzedniej:
try {
    const response = await Promise.all([makeAjaxCallAsPromise('https://first'), makeAjaxCallAsPromise('https://second')])
    console.log(response);
} catch (e) {
    console.log(e.message);
}

// --- lub ---

Promise.all([makeAjaxCallAsPromise('https://first'), makeAjaxCallAsPromise('https://second')])
    .then((response) => {
        console.log(response)
    })
    .catch((e) => {
        console.log(e.message);
    })

/*

function makeAjaxCallAsPromise(url) {
    // Albo:
    if (url.startsWith('https://third')) {
        return Promise.reject(new Error('reject'))
    }
    return Promise.resolve('resolved');
    // Albo:
    // return Promise.reject(new Error('reject'));
}

makeAjaxCallAsPromise('https://first')
    .then((data) => {
        // throw new Error('error here...!')
        return makeAjaxCallAsPromise('https://second' + data.url);
    })
    .then((data) => {
        console.log(data);
        return { url: 'test' }
    })
    .then((data) => {
        console.log(data)
        // throw new Error('error here...!')
        // return makeAjaxCallAsPromise('https://third' + data.url);
    })
    .then((data) => {
        console.log('THIS IS COOLNESS !!!', data);
    })
    .then((data) => {
        console.log('THIS IS COOLNESS !!!', data);
        return 789
    })
    .then((data) => {
        console.log('THIS IS COOLNESS !!!', data);
        return Promise.resolve('abcdef')
    })
    .then((data) => {
        console.log('THIS IS COOLNESS !!!', data);
    })
    .catch((err) => {
        console.log('error 😐', err.message)
    })
*/
