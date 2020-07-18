export class Point{
    private _x:number;
    private _y:number;
  constructor(x:number,y:number){
      this._x = x;
      this._y = y;
  }
  public set x(value){
      this._x = value;
  }

  public get x(){
      return this._x;
  }
  public set y(value){
      this._y = value;
  }

  public get y(){
      return this._y;
  }
}

