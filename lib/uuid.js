/**
 *
 * @param count 长度
 * @param prefix 加盐
 */
export default function (count, prefix) {
    if (count === void 0) { count = 6; }
    if (prefix === void 0) { prefix = ''; }
    return prefix + Math.random().toString(16).substr(2).slice(-(count - 2)) + (new Date()).getTime().toString(16).slice(9);
}
