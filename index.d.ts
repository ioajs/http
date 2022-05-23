// interface Ctx {
//   /** 请求路由参数 */
//   params: object,
//   request: {
//     /** 请求主体数据 */
//     body: any
//   }
//   /** 响应主体数据 */
//   body: any
// }

//   /**
//    * 中间件函数
//    */
// interface Middleware {
//   (ctx?: Ctx): any
// }

// /** 路由 */
// export interface Router {
//   /**
//    * 注册get请求路由
//    */
//   global(middleware: Middleware),
//   /**
//    * 注册get请求路由
//    */
//   before(middleware: Middleware),
//   /**
//    * 注册get请求路由
//    */
//   get(name: string, ...middlewares: [string | Middleware]),
//   /**
//    * 注册post请求路由
//    */
//   post(name: string, ...middlewares: [string | Middleware]),
//   /**
//    * 注册put请求路由
//    */
//   put(name: string, ...middlewares: [string | Middleware]),
//   /**
//    * 注册delete请求路由
//    */
//   delete(name: string, ...middlewares: [string | Middleware]),
//   /**
//    * 注册rest请求路由
//    */
//   resources(name: string, ...middlewares: [string | Middleware])
// }

// declare module 'ioa' {
//   /** 主应用 */
//   export const main: App

// }