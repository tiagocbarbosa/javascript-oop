export class AuthenticationSystem {
    
    // *** Methods ***

    static login(authenticable, password) {
        if(AuthenticationSystem.isAuthenticable(authenticable)) {
            return authenticable.authenticate(password)
        }
        return false
    }

    static isAuthenticable(authenticable) {
        /* Checking if authenticable has 'authenticate' property
        and if it's a Function */
        return 'authenticate' in authenticable
        && authenticable.authenticate instanceof Function
    }
}
