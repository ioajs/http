import type { CTX, Next } from '@ioa/api/dist/types.js';

export default async (ctx: CTX, next: Next) => {

  console.log(`\n\x1b[32m${ctx.method} ${ctx.url} » » » » » » » » » » » » » » » » » » » » » » » » » » » » »\n`);

  console.log(" »", ctx.request.body);

  await next();

  console.log(" «", ctx.body);

  console.log(`\n\x1b[32m${ctx.method} ${ctx.url} « « « « « « « « « « « « « « « « « « « « « « « « « « « « « \x1b[30m`);

};
