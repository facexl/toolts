/**
 * 生成随机字符串
 * @param count 长度 (>=6)
 * @param prefix 加盐
 */
export function uuid(count, prefix) {
    if (count === void 0) { count = 6; }
    if (prefix === void 0) { prefix = ''; }
    var len = count > 6 ? count : 6;
    return prefix + Math.random().toString(16).substr(2).slice(-(len - 2)) + (new Date()).getTime().toString(16).slice(9);
}
