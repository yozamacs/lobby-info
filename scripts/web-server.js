function main(argv) {
  new HttpServer({
    'GET': createServlet(StaticServlet),
    'HEAD': createServlet(StaticServlet)
  }).start(process.env.PORT || 3000);
}
