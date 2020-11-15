

class VendingMashineFactory {
    create (type) {
        if(type == 'tea') {
            return new Tea()
        }
        else if(type == 'coffe') {
            return new Coffee()
        }
    }
}


class Tea {
    constructor (){
        this.name = 'tea'
    }
}

class Coffee {
    constructor (){
        this.name = 'coffee'
    }
}

var FACTORY  = new VendingMashineFactory();
var TEA = FACTORY.create('tea');
document.write(JSON.stringify(TEA) +'<br />')

