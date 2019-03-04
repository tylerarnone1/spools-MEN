var Spool = require('../models/new');



module.exports={
    addPost,
    readSpools,
    delPost,
    

}



/// adds user input to schema [C]RUD
function addPost( req, res, next){
    console.log(req.body);
    var spool = new Spool (req.body)
    spool.save(function(err){
        if (err) return handelError(err);
    })
    console.log(spool);
      res.redirect('/feed');
    //req.user.spools.
};

function readSpools(req, res){
    let spools = Spool.find({});
    spools.then((foundSpools) => {
        console.log(foundSpools, 'flewkhaeouwfglawe')
        res.render('spools/feed', { title: 'Spool', spools: foundSpools });

    })
}
function delPost(req, res, next) {
    Spool.findByIdAndRemove(req.params.id)
    .then((spool) => {
        res.redirect('/feed');
    })
  }
