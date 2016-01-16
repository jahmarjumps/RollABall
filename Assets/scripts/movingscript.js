#pragma strict
var LoseScreen: GameObject; //gameobject variable
var speed : int;
function Update () 
{ 
   if(Input.GetKey(KeyCode.UpArrow)){
       print("pressing up key");
       gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,0,1)* speed);
       }  

if(Input.GetKey(KeyCode.DownArrow))
      {
       print("down pressed");
       gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,0,-1)* speed);
}

if(Input.GetKey(KeyCode.RightArrow)){
       print("right pressed");
       gameObject.GetComponent(Rigidbody).AddForce(Vector3(1,0,0)* speed);
       } 
 if(Input.GetKey(KeyCode.LeftArrow)){
      print("lefty pressed");
       gameObject.GetComponent(Rigidbody).AddForce(Vector3(-1,0,0)* speed);      
}

}

function OnTriggerEnter (theTrigger: Collider)
{
   if(theTrigger.gameObject.tag == "death")//if we touch a gameobject that is a Trigger and has the tag death
   {
      Destroy(this.gameObject);//destroy player
      LoseScreen.SetActive(true);//turn on this gameobject
   }
}      
            
//if i press a button
//move the ball in that direction
//else
//dont move the ball at all

//when i press a jump button
//add force to jump once
// dont add any more force until i hit the ground
