define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/blogs/all",
    "title": "Get all blogs",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token of authentication.( passed as a query parameter)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\": false,\n        \"message\": \"All Blog Details Found\",\n        \"status\": 200,\n        \"data\": [\n         {\n            title: \"string\",\n            description: \"string\",\n            bodyHtml: \"string\",\n            views: number,\n            isPublished: boolean,\n            category: \"string\",\n            author: \"string\",\n            tags: object(type = array),\n            blogId: \"string\",\n            created: \"date\",\n            lastModified: \"date\"\n          }\n\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\":true,\n  \"message\": \"Error Occured\",\n   \"status\": 500,\n   \"data\": null   \n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/blog.js",
    "groupTitle": "read",
    "name": "GetApiV1BlogsAll"
  }
] });
