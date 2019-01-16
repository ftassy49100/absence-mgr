let f: (...args: any) => any;

f = param => param + 1;
f = function (param) {
    return param + 1;
}

// -----

f = (param1, param2) => param1 + param2;
f = function (param1, param2) {
    return param1 + param2;
}

f = param => {
    return param + 1;
}

const Observable = {
    subscribe: (callback: ((value: any) => void)) => {
        // receives new value
        let newValue = null;
        callback(newValue);
    }
}
