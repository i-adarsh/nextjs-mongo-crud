## POST

curl -X POST -H "Content-Type: application/json" -d '{"title":"html", "description":"hyper text rkup language"}' http://localhost:3000/api/topics

curl -X POST -H "Content-Type: application/json" -d '{"title":"css", "description":"cascading style sheet"}' http://localhost:3000/api/topics

curl -X POST -H "Content-Type: application/json" -d '{"title":"React", "description":"Javascript framework"}' http://localhost:3000/api/topics

## DELETE

curl -X DELETE -H "Content-Type: application/json" http://localhost:3000/api/topics?id=683c6a55520ed533eb631834

## GET

curl -X GET -H "Content-Type: application/json" http://localhost:3000/api/topics

## PUT

curl -X PUT -H "Content-Type: application/json" -d '{"newTitle":"html", "newDescription":"hyper text markup language"}' http://localhost:3000/api/topics/683c6b25520ed533eb631836