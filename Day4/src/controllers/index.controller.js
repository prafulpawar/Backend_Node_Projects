module.exports.indexController = (req,res)=>{
    res.send(
       {
         msg:'Hello How Are You!'
       }
    );
}


module.exports.aboutController = (req,res)=>{
    res.send('Hello How Are You This Is About!')
}