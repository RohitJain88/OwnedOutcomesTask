export class Post {
    id: number;
    title: string;
    author: string

    constructor(values: Object={}){
        Object.assign(this,values);
    }
}
