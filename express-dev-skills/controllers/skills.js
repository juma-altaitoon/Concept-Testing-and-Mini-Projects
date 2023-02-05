
let skills= ["HTML", "CSS", "javascript","jQuery", "Object Oriented", "Express", "C++", "python"];


exports.index = function (req, res){
    res.render('../app/views/skills.ejs', {data: skills}) 
};

exports.show = function(req,res){
    res.send(skills[req.params.id])
}

exports.create_skill_get= function(req, res){
    res.render('../app/views/createSkill.ejs');
}

//  POST - Create
exports.create_skill_post = function(req, res) {
    skills.push(req.body.skill)
    res.render('../app/views/skills.ejs', {data: skills});
} 

//  GET - Edit
exports.create_skill_edit = function(req, res){
    res.render('../app/views/updateSkill.ejs', {data: skills[req.query.id]})
}

// POST - Update
exports.update_skill_post = function(req,res) {
    console.log(req.query.id);
    skills.splice(req.query.id,1, req.body.data)
    res.render('../app/views/skills.ejs', {data: skills});
}

// GET - DELETE
exports.delete_skill_get = function(req, res) {
    skills.splice(req.query.id, 1);
    res.render('../app/views/skills.ejs', {data: skills});
}

