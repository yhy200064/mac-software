import tornado.ioloop
import tornado.web
import os
from handler.index import IndexHandler, SoftwareHandler
def make_app():
    basedir = os.path.dirname(__file__)
    settings = {
        'debug': True,
        'template_path': os.path.join(basedir, 'front'),
        'static_path': os.path.join(basedir, 'static')
    }
    return tornado.web.Application([
        (r'/', IndexHandler),
        (r'/software', SoftwareHandler)
        ], **settings)

if __name__ == '__main__':
    app = make_app()
    app.listen(5003)
    tornado.ioloop.IOLoop.current().start()