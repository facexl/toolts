/**
 * 生成随机字符串
 * @param count 长度 (>=6)
 * @param prefix 加盐
 */
export function uuid (count:number = 6, prefix:string = ''):string {
  const len = count > 6 ? count : 6
  return prefix + Math.random().toString(16).substr(2).slice(-(len - 2)) + (new Date()).getTime().toString(16).slice(9)
}
/**
 * 反复执行异步代码 fn
 * @param fn
 * @param time
 * @param max
 * @param waitRes
 */
export function loopTriggerAsync (fn:()=>{}, time:number, max:number, waitRes:Boolean) {
  let count = 0
  let timer:number|undefined
  async function trigger () {
    clearTimeout(timer)
    if (max && count >= max) {
      return
    }
    count++
    if (waitRes) {
      if (!(await fn())) {
        timer = setTimeout(() => {
          trigger()
        }, time)
      }
    } else {
      fn()
      timer = setTimeout(() => {
        trigger()
      }, time)
    }
  }
  trigger()
  return () => {
    clearTimeout(timer)
  }
}
/**
 * 反复执行同步代码 fn
 * @param fn
 * @param time
 * @param max
 */
export function loopTriggerSync (fn:()=>{}, time:number, max:number) {
  let count = 0
  let timer:number|undefined
  function trigger () {
    clearTimeout(timer)
    if (max && count >= max) {
      return
    }
    count++
    if (!fn()) {
      timer = setTimeout(() => {
        trigger()
      }, time)
    }
  }
  trigger()
}
