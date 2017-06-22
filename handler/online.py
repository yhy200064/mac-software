#coding: utf8
import tornado.web
import torndb

class OnlineHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('online.html')
