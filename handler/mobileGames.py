#coding:utf8
import tornado.web
import torndb
from tornado.escape import json_encode

class AdminApiMacMobilegamesSoftware(tornado.web.RequestHandler):
    def post(self):
        name = self.get_argument('name')
        type = self.get_argument('type')
        size = self.get_argument('size')
        img = self.get_argument('img')
        assess = self.get_argument('assess')
        edition = self.get_argument('edition')
        db = torndb.Connection(host='localhost', database='yhy', user='root', password='88888888')
        if name == '':
            self.write({'code': 0})
            return
        if type == '':
            self.write({'code': 0})
            return
        if size == '':
            self.write({'code': 0})
            return
        if img == '':
            self.write({'code': 0})
            return
        if assess == '':
            self.write({'code': 0})
            return
        data = db.insert('insert into MacMobileGames value(%s, %s, %s, %s, %s, %s, %s, %s)', None, name, type, size, img, assess, edition, None)
        db.close()
        self.write({'code': 1})

class AdminApiGetMacMobilegamesSoftware(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy', user='root', password='88888888')
        softwares = db.query('select * from MacMobileGames order by created_at DESC')
        result = {}
        for software in softwares:
            software['id'] = software.id
            software['name'] = software.name
            software['type'] = software.type
            software['size'] = software.size
            software['img'] = software.img
            software['assess'] = software.assess
            software['edition'] = software.edition
            software['created_at'] = software.created_at.strftime("%Y-%m-%d")
        db.close()
        result['code'] = '0'
        result['body'] = {'software': softwares}
        result['message'] = '成功'
        self.write(json_encode(result))