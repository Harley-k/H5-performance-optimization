global.gc()
// 返回当前 nodejs 使用情况  
console.log(process.memoryUsage());


let map = new WeakMap();
let key = new Array(5*1024*1024);
map.set(key,1);
key = null
global.gc()

console.log(process.memoryUsage());

//  {
//   rss: 20025344,
//   heapTotal: 4907008,
//   heapUsed: 1766512,
//   external: 761096,
//   arrayBuffers: 9382
// }
// {
//   rss: 20750336,
//   heapTotal: 7270400,
//   heapUsed: 2277608,
//   external: 918630,
//   arrayBuffers: 9382
// }

// 此时想gc,把 key清空 不能立马 GC;  
// 把 map 改成 WeakMap(弱引用)可以解决