export class Like{
    constructor(private likeCount:number,private button:boolean){
    }
    onClick(){
        if(!this.button){
            this.likeCount++;
            this.button = true;
        }
        else{
            this.button = false;
            this.likeCount--;
        }
        console.log('TotalLikes :'+this.likeCount);
    }
    get LikeCount(){
        return this.likeCount;
    }
}       