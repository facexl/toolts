function generate(obj) {
    return {
        set: function (key, value) {
            if (Object.prototype.toString.call(value) === '[object String]')
                obj.setItem(key, value);
            if (typeof value === 'object')
                obj.setItem(key, JSON.stringify(value));
        },
        get: function (key) {
            var value = obj.getItem(key);
            try {
                value = JSON.parse(value);
            }
            catch (e) {
                console.log('解析错误:', e);
            }
            return value;
        },
        remove: function (key) {
            obj.removeItem(key);
        },
        clear: function () {
            obj.clear();
        }
    };
}
export var local = generate(window.localStorage);
export var session = generate(window.sessionStorage);
