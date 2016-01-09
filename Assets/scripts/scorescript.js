#pragma strict
import UnityEngine.UI;

var winScreen: GameObject;
var collectibleText: Text;
var playerScore : int;

function Update(){
  //transform.Rotate(Vector3(0,1,0) * 2);
   collectibleText.text = playerScore.ToString("0");
  }
  

function OnTriggerEnter(other : Collider){

if(other.tag == "win")
 {
   winScreen.SetActive(true);
  } 
  
  if(other.tag =="collectible"){
      playerScore++;
      //playerScore = playerScore + 1;
     Destroy(other.gameObject);
  }
  }  
  
 function OnCollisionEnter(theCollision: Collision)
 {
     if(theCollision.transform.tag == "win")
     {
        print("WINNER");
        winScreen.SetActive(true);
     }
 }      
        
 
   
   
   
    





  
    
    
  
  
