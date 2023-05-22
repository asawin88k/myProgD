var func_a = function(req, res, next) {
    req.myobj = 'A'
    next();
}
var func_b = function(req, res, next) {
    req.myobj += ' B'
    next();
}
var func_c = function(req, res) {
    req.myobj += ' C'
    res.send(req.myobj);
}
app.get('/example/a', [func_a,func_b,func_c])