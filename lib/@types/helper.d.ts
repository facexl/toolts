/**
 * 生成随机字符串
 * @param count 长度 (>=6)
 * @param prefix 加盐
 */
export declare function uuid(count?: number, prefix?: string): string;
export declare function loopTriggerAsync(fn: () => {}, time: number, max: number, waitRes: Boolean): () => void;
/**
 * 反复执行同步代码 fn
 * @param fn
 * @param time
 * @param max
 */
export declare function loopTriggerSync(fn: () => {}, time: number, max: number): void;
