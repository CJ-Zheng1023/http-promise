var obj ={}

var func1 = function(obj, cb){
    console.log('do func1')
    obj.func1 = 'func1'
    cb(obj, func3)
}
var func2 = function(obj, cb){
    console.log('do func2')
    obj.func2 = 'func2'
    cb(obj, func4)
}
var func3 = function(obj, cb){
    console.log('do func3')
    obj.func3 = 'func3'
    cb(obj)
}
var func4 = function(obj){
    console.log('do func4')
    obj.func4 = 'func4'
    console.log(obj)
}
func1(obj, func2)