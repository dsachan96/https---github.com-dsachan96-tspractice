

export class PageLike{
    constructor(private likeCount,private button){
    }
    onClick(){
        if(this.button){
            this.likeCount--;
            this.button = false;
        }
        else{
            this.likeCount++;
            this.button = true;
        }
        console.log(this.likeCount+" "+this.button);
    }
}