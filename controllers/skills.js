const Skill = require('../models/skill');

module.exports = {
    index,
    show
};

function index(req, res) {
    res.render('skills/index', {
        title: 'Developer skills',
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        title: 'Developer skills',
        skill: Skill.getOne(req.params.id)
    });
}