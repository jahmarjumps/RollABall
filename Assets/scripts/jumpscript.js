#pragma strict

var onGround: boolean;
var playerJump : float;

function OnCollisionEnter (theCollision: Collision)
{

    if (theCollision.transform.tag == "floor")
 {
   onGround = true;
 }

    if(theCollision.transform.tag == "bounce")
 {
  gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,1,0) * playerJump * 2);
 }

}

function OnCollisionExit (theCollision: Collision)
  {
    if(theCollision.transform.tag == "floor")
  {
    onGround = false;

}
}

function Update()
{
  if(Input.GetKey(KeyCode.Space) && onGround == true) //if we hit the spacebar And are on the ground
  {  
       print("jump pressed");
       gameObject.GetComponent(Rigidbody).AddForce(Vector3(0,1,0)* playerJump);
}
}

