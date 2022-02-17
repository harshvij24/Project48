class Bone extends BaseClass {
  constructor(x,y){
    super(x,y);
    this.image = loadImage("Bone.png");
  }

  display() {
    
    super.display();
  }

  score(){
      score+=1;
  }
}