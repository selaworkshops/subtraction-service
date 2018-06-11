var appRouter = function (app) {
var substraction = require('./../substraction.js');

app.get("/", function(req, res) {
	res.status(404).send("Error 404, To use the substraction service browse to: {server}:{port}/substraction/{number1}/{number2}");
})
  
app.get("/substraction/:number1/:number2", function(req,res) {
    var number1 = req.params.number1;
    var number2 = req.params.number2;
    var total = substraction.substraction(number1,number2);
    res.send(JSON.stringify(total));
  });
}

module.exports = appRouter;
