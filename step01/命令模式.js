var Tv = {
    open(){
        console.log('打开电视机')
    },
    close(){
        console.log('关闭电视机')
    }
}

var creatCommand = function(receiver){
    var excute = function(){
        return receiver.open()
    }
    var undo = function(){
        return receiver.close()
    }

    return {
        excute, undo
    }
}

var showInfo = function(command){
    console.log(command.excute())
    console.log(command.undo())
}

showInfo(creatCommand(Tv))