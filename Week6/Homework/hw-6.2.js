db.grades.aggregate([
    {$unwind : "$scores"},
    {$match : {"scores.type": {$ne : "quiz"} } },

    {$group : {
        _id : {student_id : "$student_id",class_id :"$class_id"},

        total : {$avg : "$scores.score"},
    }},
    {$project : {
        _id : 0,
        class_id : "$_id.class_id",
        student_id : "$_id.student_id",
        total : "$total"
    }},
    {$group : {_id : "$class_id",
        avg : {$avg : "$total"}
    }},
    {$sort : {"avg" : -1}}
]).pretty()