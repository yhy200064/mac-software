# coding:utf8
import tornado.web
import torndb
from tornado.escape import json_encode


class AdminCollectionHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('admin/collection.html')


class AdminApiCollectionHandler(tornado.web.RequestHandler):
    def post(self):
        name = self.get_argument('name')
        introduce = self.get_argument('introduce')
        img = self.get_argument('img')
        db = torndb.Connection(host='localhost', database='yhy2', user='root', password='88888888')
        if name == '':
            self.write({'code': 0})
            return

        if introduce == '':
            self.write({'code': 0})
            return

        if img == '':
            self.write({'code': 0})
            return

        data = db.insert('insert into collection value(%s, %s, %s, %s, %s)', None, name, introduce, img, None)
        db.close()
        self.write({'code': 1})


class AdminApiGetCollectionHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy2', user='root', password='88888888')
        collections = db.query('select name, introduce, img from collection order by created_at DESC')
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


class CollectionHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('collection.html')
