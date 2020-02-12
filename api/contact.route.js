const express = require('express');
const contactRoutes = express.Router();

let Contact = require('./contact.model');

contactRoutes.route('/add').post(function(req, res) {
    let contact = new Contact(req.body);
    contact.save()
    .then(contact => {
        res.status(200).json({'contact': 'Contato Salvo com Sucesso!'});
    })
    .catch(err => {
        res.status(400).send("Falha ao Salvar Contato!");
    });
});

contactRoutes.route('/').get(function (req, res) {
    Contact.find(function (err, contact) {
        if(err){
            console.log(err);
        }else {res.json(contact);}
    });
});

contactRoutes.route('/update/:id').post(function (req, res) {
    Contact.findById(req.params.id, function(err, contact){
        if(!contact){
            res.status(404).send("Contato não existe");
        }else{
            contact.name = req.body.name;
            contact.email = req.body.email;
            contact.tel = req.body.tel;

            contact.save().then(contact => {
                res.json('Contato Atualizado com Sucesso!');
            })
            .catch(err => {
                res.status(404).send("Falha ao Atualizar!");
            });
        }
    });
});

contactRoutes.route('/delete/:id').get(function(req, res) {
    Contact.findOneAndDelete({_id: req.params.id}, function(err, contato){
        if(err) res.json(err);
        else res.json('Contato Removido com Sucesso!');
    });
});

module.exports = contactRoutes;