export class User {

    constructor(
        public email: string,
        public phone: string,
        public name?: string,
        public uid?: string,
        public type?: string,
        public status?: string,
    ) {}

    toPlainObject() {
        return {
            email: this.email,
            phone: this.phone,
            name: this.name,
            uid: this.uid,
            type: this.type,
            status: this.status
        };
    }

}