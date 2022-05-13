```

```

# Mongodb

![](image/MongoDB/1652430801907.png)

เปรียบเทียบโครงสร้างพื้นฐาน MongoDB กับ MySQL

|     **MongoDB**     | **MySQL** |
| :------------------------: | :-------------: |
|         Collection         |      Title      |
|          Document          |       Row       |
|           Field           |     Column     |
| Embedded document, linking |      Joins      |

**Show database**

```
> Show dbs
```


**User database**

```
> User databaseName
```


**CreateCollection**

```
> db.createCollection(“CollectionName”)
Or
> db.CollectionName.insert({JsonData})

```


**InsertData**

```
db.CollectionName.insert({JsonData})
```


**Insert MultipleData**

```
db.CollectionName.insertMany([
	{“name”:”admin”},
	{“name”:”user”}
])
```


**FindData**

    Find all

```
> db.CollectionName.find()
```

    Find were

```
> db.CollectionName.find({ "tags": "green" })

> db.CollectionName.find({“DocumentName”:”FeildData”})
```

    More than and between

```
// between
> db.CollectionName.find({ u1 : { $gt : 30, $lt : 60}});

// more than
> db.CollectionName.find({ "qty" : { $gt : 50}})

// find in json
> db.CollectionName.find({“tags”:["red", "blank"]})
> db.CollectionName.find({“tags:”{$all:["red","blank"]}})

// OrderBy
> db.CollectionName.find().sort({qty: -1})

//limit
db.CollectionName.find().limit(1).sort({qty: -1})
db.CollectionName.find().limit(3).sort({qty: -1})
```

    Pretty

```
> db.CollectionName.find().pretty()
Or
> db.CollectionName.find({“DocumentName”:”FeildData”}).pretty()
```


**SortData**

ASC

```
> db.CollectionName.find().sort({“name”:1}).pretty()
```

    DESC

```
> db.CollectionName.find().sort({“name”:-1}).pretty()
```


**UpdateData**

```
> db.CollectionName.update({"view":"127"},{$set:{"view":"128",”writer”:”admin”}}
> db.inventory.update({"item":"notebook"},{$set:{"qty":"30"}})
> db.inventory.update({"status":"C"},{$set:{"status":"F"}})
```


**DeleteData**

```
> db.CollectionName.remove({"view":"127"}) 
```






---
