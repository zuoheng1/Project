//call
Function.prototype.MyCall = function (context, ...args) {
  let cxt = context || window
  let func = Symbol()
  cxt[func] = this
  args = args ? args : []
  const res = args.length > 0 ? cxt[func](...args) : cxt[func]()
  delete cxt[func]
  return res
}

//apply
Function.prototype.MyApply = function (context, args = []) {
  let cxt = context || window
  let func = Symbol()
  cxt[func] = this
  const res = args.length > 0 ? cxt[func](...args) : cxt[func]()
  delete cxt[func]
  return res
}

//bind
Function.prototype.Mybind = function (context, ...args) {
  const fs = this
  args = args ? args : []
  return function newFn(...newFnArgs) {
    if (this instanceof newFn) {
      return new fn(...args, ...newFnArgs)
    }
    return fn.apply(context, [...args, ...newFnArgs])
  }
}

//转为驼峰命名

var f = function (s) {
  return s.replace(/-\w/g, function (x) {
    return x.slice(1).toUpperCase()
  })
}

var s1 = 'get-element-by-id'
f(s1)
