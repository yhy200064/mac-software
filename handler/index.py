# coding:utf8
import tornado.web
import torndb
from tornado.escape import json_encode
from datetime import datetime


class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('index.html')


class ApiNewestHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy', user='root', password='88888888')
        softwares = db.query('select * from software order by created_at desc limit 8')
        result = {}
        for software in softwares:
            software['id'] = software.id
            software['title'] = software.title
            software['type'] = software.type
            software['size'] = software.size
            software['img'] = software.img
            software['assess'] = software.assess
            software['edition'] = software.edition
            software['created_at'] = software.created_at.strftime("%m-%d")
            # if software['created_at'] == datetime.now().strftime("%m-%d"):
            #     software['is_today'] = True
            # else:
            #     software['is_today'] = False
            software['is_today'] = True if software['created_at'] == datetime.now().strftime("%m-%d") else False
        db.close()
        result['code'] = '0'
        result['body'] = {'software': softwares}
        result['message'] = '成功'
        self.write(json_encode(result))


class ApiGetCollectionHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy2', user='root', password='88888888')
        collections = db.query('select * from collection order by created_at desc limit 4')
        result = {}
        for collection in collections:
            collection['id'] = collection.id
            collection['name'] = collection.name
            collection['introduce'] = collection.introduce
            collection['img'] = collection.img
            collection['created_at'] = collection.created_at.strftime("%Y-%m-%d %H:%M:%S")
        db.close()
        result['code'] = '0'
        result['body'] = {'collection': collections}
        result['message'] = '成功'
        self.write(json_encode(result))

class ApiMacNewestHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy', user='root', password='88888888')
        softwares = db.query('select * from MacSoftware order by created_at desc limit 8')
        result = {}
        for software in softwares:
            software['id'] = software.id
            software['name'] = software.name
            software['type'] = software.type
            software['size'] = software.size
            software['img'] = software.img
            software['assess'] = software.assess
            software['edition'] = software.edition
            software['created_at'] = software.created_at.strftime("%m-%d")
            software['is_today'] = True if software['created_at'] == datetime.now().strftime("%m-%d") else False
        db.close()
        result['code'] = '0'
        result['body'] = {'software': softwares}
        result['message'] = '成功'
        self.write(json_encode(result))

class NewMobileGamesHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy', user='root', password='88888888')
        softwares = db.query('select * from MobileGames order by created_at desc limit 6')
        result = {}
        for software in softwares:
            software['id'] = software.id
            software['name'] = software.name
            software['type'] = software.type
            software['size'] = software.size
            software['img'] = software.img
            software['assess'] = software.assess
            software['edition'] = software.edition
            software['created_at'] = software.created_at.strftime("%m-%d")
            software['is_today'] = True if software['created_at'] == datetime.now().strftime("%m-%d") else False
        db.close()
        result['code'] = '0'
        result['body'] = {'software': softwares}
        result['message'] = '成功'
        self.write(json_encode(result))

class NewMacMobileGamesHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy', user='root', password='88888888')
        softwares = db.query('select * from MacMobileGames order by created_at desc limit 6')
        result = {}
        for software in softwares:
            software['id'] = software.id
            software['name'] = software.name
            software['type'] = software.type
            software['size'] = software.size
            software['img'] = software.img
            software['assess'] = software.assess
            software['edition'] = software.edition
            software['created_at'] = software.created_at.strftime("%m-%d")
            software['is_today'] = True if software['created_at'] == datetime.now().strftime("%m-%d") else False
        db.close()
        result['code'] = '0'
        result['body'] = {'software': softwares}
        result['message'] = '成功'
        self.write(json_encode(result))

