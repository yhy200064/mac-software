#coding:utf8
import tornado.web
import torndb
from tornado.escape import json_encode
class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('index.html')

class ApiNewestHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host = 'localhost', database = 'yhy', user = 'root', password = '88888888')
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
        db.close()
        result['code'] = '0'
        result['body'] = {'software': softwares}
        result['message'] = '成功'
        self.write(json_encode(result))


class ApiGetCollectionHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host = 'localhost', database = 'yhy2', user = 'root', password = '88888888')
        collections = db.query('select name, introduce, img from collection ordery by created_at desc limit 3')
        result = {}
        for collection in collections:
            collection['name'] = collection.name
            collection['introduce'] = collection.introduce
            collection['img'] = collection.img
        db.close()
        result['code'] = '0'
        result['body'] = {'collection': collections}
        result['message'] = '成功'
        self.write(json_encode(result))
