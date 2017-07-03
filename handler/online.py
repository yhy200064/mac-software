# coding: utf8
import tornado.web
import torndb
from tornado.escape import json_encode


class OnlineHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('online.html')


class ApiOnlineWeekHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy', user='root', password='88888888')
        softwares = db.query('select name, size, img from MobileGames where week(created_at) limit 6')
        result = {}
        for software in softwares:
            software['name'] = software.name
            software['size'] = software.size
            software['img'] = software.img
        db.close()
        result['code'] = '0'
        result['body'] = {'software': softwares}
        result['message'] = '成功'
        self.write(json_encode(result))


class ApiOnlineRechargeHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy', user='root', password='88888888')
        softwares = db.query(
            'select name, type, img from MobileGames where type = %s order by created_at desc limit 20', "角色扮演")
        result = {}
        for software in softwares:
            software['name'] = software.name
            software['type'] = software.type
            software['img'] = software.img
        db.close()
        result['code'] = '0'
        result['body'] = {'software': softwares}
        result['message'] = '成功'
        self.write(json_encode(result))


class ApiOnlineAppleHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy', user='root', password='88888888')
        softwares = db.query(
            'select name, type, img, assess from MacMobileGames where type = %s order by created_at desc limit 16',
            "IOS手游")
        result = {}
        for software in softwares:
            software['name'] = software.name
            software['type'] = software.type
            software['img'] = software.img
            software['assess'] = software.assess
        db.close()
        result['code'] = '0'
        result['body'] = {'software': softwares}
        result['message'] = '成功'
        self.write(json_encode(result))
