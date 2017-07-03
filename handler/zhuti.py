#coding: utf8
import tornado.web

class ZhutiHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('zhuti.html')