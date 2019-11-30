export default (services: any) => {
  return async (ctx: any, next: any) => {
    ctx.service = {};
    for (let serviceKey in services) {
      ctx.service[serviceKey] = services[serviceKey];
    }
    await next();
  }
};