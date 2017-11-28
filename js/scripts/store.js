var Store = function(){
                var wood = 1000;
                var food = 1000;
                var water = 1000;
                var stone = 1000;
                //var resources =[];
                this.imHere = function(ant){ //getResource is boolean
                    currentResource = ant.resource;
                   
 /*                   
                    if(resources[currentResource])
                        resources[currentResource]++;
                    else
                        resources[currentResource]=1;
    
              */      
                    
                    switch(currentResource){
                            
                        case RESOURCES.FOOD: 
                            
                            if(ant.getResource){
    
                                if(isResAvailable(currentResource)){
                                    food--;
                                    ant.resource= RESOURCES.FOOD;
                                    ant.path.pop();
                                }
                                else{
                                   alert("Food is not Available"); //Food is not Available
                                    ant.path = [];
                                    ant.resource = null;
                                    
                                }
                            }
                            else
                                food++;
                            
                            break;
                            
                        case RESOURCES.WOOD:
                            
                            if(ant.getResource){
                                if(isResAvailable(currentResource)){
                                    wood--;
                                    ant.resource= RESOURCES.WOOD;
                                    ant.path.pop();
                                }
                                else{
                                   alert("Wood is not Available"); //Wood is not Available
                                    ant.path = [];
                                    ant.resource = null;
                                   
                                }
                            }
                            else
                                wood++;
                            
                            break;
                            
                        case RESOURCES.STONE:
                            if(ant.getResource){
                                if(isResAvailable(currentResource)){
                                    stone--;
                                    ant.resource= RESOURCES.STONE;
                                    ant.path.pop();
                                }
                                
                                else{
                                   alert("Stone is not Available"); //Stone is not Available
                                    ant.path = [];
                                    ant.resource = null;
                                    
                                }
                            }
                            else
                                stone++;
                            break;
                            
                        case RESOURCES.WATER:
                            
                            if(ant.getResource){
                                if(isResAvailable(currentResource)){
                                    water--;
                                    ant.resource= RESOURCES.WATER;
                                    ant.path.pop();
                                }
                                else{
                                    alert("Water is not Available"); //Water is not Available
                                    ant.path = [];
                                    ant.resource = null;
                                }
                                 
                            }
                
                            else
                                water++;
                            
                            break;
                            
                                          }
                    
                    ant.moveNext();
                    
                }
                
                
                var isResAvailable = function(resource){
                    
      
                    switch(resource){
                            
                        case RESOURCES.FOOD: 
                            
                            if(food != 0)
                                return true;                          
               
                            break;
                            
                        case RESOURCES.WOOD:
                            
                            if(wood != 0)
                                return true;        

                            break;
                            
                        case RESOURCES.STONE:
                            
                            if(stone != 0)
                                return true;

                            
                            break;
                            
                        case RESOURCES.WATER:
                            
                            if(water != 0)
                                return true;
                            
                            break;
                            
                        default: return false;
                                               
                            
                                   }
                    return false;
                }
                
                //lsa 3ayza 2afady el ant;
}