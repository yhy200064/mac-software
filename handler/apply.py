#coding: utf8
import tornado.web
import torndb

class ApplyHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('apply.html')