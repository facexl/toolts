
interface Storage {
    setItem:()=>{},
    getItem:()=>{}
}
function generate (obj:any) {
  return {
    set (key:string, value:Storage) {
      if (Object.prototype.toString.call(value) === '[object String]') obj.setItem(key, value)
      if (typeof value === 'object') obj.setItem(key, JSON.stringify(value))
    },
    get (key:string) {
      let value = obj.getItem(key)
      try {
        value = JSON.parse(value as any)
      } catch (e) {
        console.log('解析错误:', e)
      }
      return value
    },
    remove (key:string) {
      obj.removeItem(key)
    },
    clear () {
      obj.clear()
    }
  }
}

export const local = generate(window.localStorage)
export const session = generate(window.sessionStorage)
