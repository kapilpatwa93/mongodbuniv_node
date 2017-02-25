db.companies.aggregate([
    {$match :{"relationships.person" : {$ne : null}} },
    {$project : { relationships :1 , _id : 0 , permalink : 1}},
    {$unwind : "$relationships"},
    {$group : {_id : "$relationships.person",
        companies : {$addToSet : "$permalink"}
    }},
    {$project : {
        relation : "$_id.relationship",
        count : {$size : "$companies"}
    }}, {$sort : {count : -1}}
]).pretty()


//it will give as  15