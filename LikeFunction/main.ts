import { Like } from "./Like";

let p = new Like(100,false);

p.onClick();
p.onClick();
p.onClick();
p.onClick();

let a = new Like(p.LikeCount,true);
console.log('a');
a.onClick();