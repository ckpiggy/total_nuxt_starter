exports.install = function () {
  const reg = /^(?!\/api)[/A-Za-z0-9_.]*$/
  F.route((url)=>{ return reg.test(url)}, nuxt, ['#nuxt'])
  F.file((url)=>{return reg.test(url.uri.path)}, nuxt, ['#nuxt'])
}

function nuxt () {
  //this should not be execute
  throw new Error('nuxt middle ware not working')
}