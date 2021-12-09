class User{
    constructor(elem, adat){
        this.elem = elem;
        this.adat = adat;
        this.userId = this.elem.children(".userId");
        this.userName = this.elem.children(".userName");
        this.setAdatok();
    }

    setAdatok(ertekek){
        this.userId.html(ertekek.userId);
        this.userName.html(ertekek.userName);
    }
}