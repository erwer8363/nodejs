
function Promise(excutor){
    let self = this

    self.status = 'pending'
    self.fn1Callback = []
    self.fn2Callback = []

    function resolve(value){
        if(value instanceof Promise){
            return value.then(resolve, reject)
        }

        setTimeout(()=>{
            if(self.status === 'pending'){
                self.status = 'resolved'
                self.data = value
                for(let i=0;i<self.fn1Callback.length;i++){
                    self.fn1Callback[i](value)
                }
            }
        })
    }

    function reject(reason){
        setTimeout(()=>{
            if(self.status === 'pending'){
                self.status = 'rejected'
                self.data = reason
                for(let i=0;i<self.fn2Callback.length;i++){
                    self.fn2Callback[i](reason)
                }
            }
        })
    }

    try{
        excutor(resolve, reject)
    }catch(e){
        reject(e)
    }
}

Promise.prototype.then = function(fn1,fn2){
    let self = this
    let promise2
    fn1 = typeof fn1 === 'function' ? fn1 : function(v){return v}
    fn2 = typeof fn2 === 'function' ? fn2 : function(r){return r}

    if(self.status === 'resolved'){
        return promise2 = new Promise(((resolve, reject)=>{
            setTimeout(()=>{
                try{
                    let x = fn1(self.data)
                    resolvePromise(promise2, x, resolve, reject)
                }catch(rease){
                    reject(rease)
                }
            })
        }))
    }

    if(self.status === 'pending'){
        return promise2 = new Promise(((resolve, reject)=>{
            self.onResolvedCallback.push((value)=>{
                try{
                    let x = fn1(value)
                    resolvePromise(promise2, x, resolve, reject)
                }catch(r){
                    reject(r)
                }
            })
        }))
    }

}

function resolvePromise(promise2, x, resolve, reject){
    if(promise2 === x){
        return reject(new TypeError('Chaining cycle detected for promise'))
    }

    if(x instanceof Promise){
        x.then(function(data){
            resolve(data)
        },function(e){
            reject(e)
        })
        return
    }

    if((x !== null) && ((typeof x === 'object')||(typeof x === 'function'))){
        try{
            var then = x.then
            var called
            if(typeof then === 'function'){
                then.call(x, (y)=>{
                    if(called)return
                    called = true
                    return resolvePromise(promise2, y, resolve, reject)
                },(r)=>{
                    if(called)return
                    called = true
                    return reject(r)
                })
            }else{
                resolve(x)
            }
        }catch(e){
            if(called)return
            return reject(e)
        }
    }else{
        resolve(x)
    }

}