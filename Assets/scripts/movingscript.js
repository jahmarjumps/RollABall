#pragma strict




function Start () 
{ 
 
}

function Update () 
{ 
   if(Input.GetKey(KeyCode.UpArrow)){
       print("pressing up key");
       gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,0,1)* 5);
       }  

if(Input.GetKey(KeyCode.DownArrow))
      {
       print("down pressed");
       gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,0,-1)* 5);
}

if(Input.GetKey(KeyCode.RightArrow)){
       print("right pressed");
       gameObject.GetComponent(Rigidbody).AddForce(Vector3(1,0,0)* 5);
       } 
 if(Input.GetKey(KeyCode.LeftArrow)){
      print("lefty pressed");
       gameObject.GetComponent(Rigidbody).AddForce(Vector3(-1,0,0)* 5);      
}

}
            
//if i press a button
//move the ball in that direction
//else
//dont move the ball at all

//when i press a jump button
//add force to jump once
// dont add any more force until i hit the ground
