class WinFactory {
    createButton(){
        return new WinButton()
    }
}

class MacFactory {
    createButton(){
        return new MacButton()
    }
}

class WinButton {
    render (){
        return `<button>Windows Button</button></br></br>`
    }
}
class MacButton {
    render (){
        return `<button>Mac Button</button></br></br>`
    }
}

//Abstract factory
class Application {
    constructor (os) {
        if (os == "windows")
            this.factory = new WinFactory()
        else if (os == "mac")
            this.factory = new MacFactory()
    }
    createUi (){
        var button  = this.factory.createButton();
        debugger

        return button.render();
    }
}


var MAC_APP = new Application('mac');
document.write(MAC_APP.createUi())

var WIN_APP = new Application('windows');
document.write(WIN_APP.createUi())


