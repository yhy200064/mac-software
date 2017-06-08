#coding:utf8
import tornado.web
class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('index.html')


class SoftwareHandler(tornado.web.RequestHandler):
    def get(self):
        self.write('我要做软件')