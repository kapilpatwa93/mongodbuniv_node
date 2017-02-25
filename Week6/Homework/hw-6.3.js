db.companies.aggregate([
    {$project : {founded_year : 1,funding_rounds : 1,permalink : 1}},
    {$match : {"founded_year" : 2004,}},
    {$unwind:"$funding_rounds"},
    {$group : {
        _id: "$permalink",
        count : {$sum :1},
        avg : {$avg :"$funding_rounds.raised_amount"}
    }},
    {$match : { "count" : {$gte:5}}},
    {$sort : {"avg" : 1}}
]).
pretty()