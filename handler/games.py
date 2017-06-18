#coding:utf8
import tornado.web

class GamesHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('games.html')
