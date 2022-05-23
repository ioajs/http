import api from '@ioa/api';

api.use(async function (ctx, next) {

   console.log("global middleware 1");

   await next();

});

api.use(async function (ctx, next) {

   console.log("global middleware 2");

   await next();
   
});
