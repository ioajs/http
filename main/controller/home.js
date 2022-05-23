import api from '@ioa/api';

class Controller {
  init(ctx) {
    ctx.body = { data: 'hello ioa' };
  }
}

class Home extends Controller {
  index(ctx) {
    ctx.body = { data: 'hello ioa' };
    // ctx.body = 'hello ioa';
  }
  sms(ctx) {
    ctx.body = ctx.params;
  }
  login(ctx) {
    const body = ctx.request.body;
    ctx.body = {
      type: 'login',
      body
    };
  }
};

const home = new Home();

api.get('/', home.index);

api.get('/sms/:name/:sub', home.sms);

api.post('/login', home.login);
