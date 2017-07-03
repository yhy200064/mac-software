# coding:utf8
import tornado.web
import torndb
from tornado.escape import json_encode


class WuxingHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy', user='root', password='88888888')
        softwares = db.query(
            "select name, type, img, assess from MobileGames where assess = %s order by created_at desc limit 12",
            'http://www.5577.com/skin/library/images/star5.png')
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


class ApiPojieHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy', user='root', password='88888888')
        softwares = db.query(
            "select name, type, img, type from MobileGames where type = %s order by created_at desc limit 12",
            '破解修改')
        result = {}
        for software in softwares:
            software['name'] = software.name
            software['type'] = software.type
            software['img'] = software.img
            software['type'] = software.type
        db.close()
        result['code'] = '0'
        result['body'] = {'software': softwares}
        result['message'] = '成功'
        self.write(json_encode(result))
