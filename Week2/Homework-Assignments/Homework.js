//1)
db.movieDetails.find({"year" : 2013,"rated" : "PG-13", "awards.wins" : 0} ).pretty();
/*ANSWER : "A Decade of Decadence, Pt. 2: Legacy of Dreams*/

//2)

db.movieDetails.find({"year" : 1964},{"title" : 1 ,"_id" : 0}).pretty()
db.movieDetails.find({},{"title" : 1 , "id" : 0}).pretty()

//3
db.movieDetails.find({"countries.1" : "Sweden"}).count()
// answer : 6

//4
db.movieDetails.find({"genres" : ["Comedy","Crime"]}).count()
// answer : 20

//5)
db.movieDetails.find({"genres" : {$all : ["Comedy","Crime"]}}).count()
//answer : 56

