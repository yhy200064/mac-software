#coding:utf8
import tornado.web
import torndb
from tornado.escape import json_encode

class ApiPuzzleHandler(tornado.web.RequestHandler):
    def get(self):
        db = torndb.Connection(host='localhost', database='yhy', user='root', password='88888888')
        softwares = db.query('select * from software where type = %s order by created_at desc limit 20', "益智")
        result = {}
        for software in softwares:
            software['id'] = software.id
            software['title'] = software.title
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