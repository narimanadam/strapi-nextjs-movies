export const redirectUser = (ctx, location) => {
  ctx.res.writeHead(302, {
    Location: location,
    "Content-Type": "text/html; charset=utf-8",
  });
  ctx.res.end();
};
