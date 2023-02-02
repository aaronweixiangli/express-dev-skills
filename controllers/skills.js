const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    edit,
    update,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    Skill.deleteOne();
    res.redirect('/skills');
}

function update(req, res) {
    req.body.learned = !!req.body.learned;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
    res.render('skills/edit', {
        title: 'Edit skill',
        skill: Skill.getOne(req.params.id)
    })
}

function create(req, res) {
    req.body.learned = !!req.body.learned;
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'Add skill'
    })
}

function index(req, res) {
    res.render('skills/index', {
        title: 'Developer skills',
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        title: 'Developer skills Details',
        skill: Skill.getOne(req.params.id)
    });
}