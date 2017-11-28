var Store = function(){
                var wood = 1000;
                var food = 1000;
                var water = 1000;
                var stone = 1000;
                
                this.imHere = function(ant, getResource){ //getResource is boolean
                    currentResource = ant.resource;
                    
                    
                    switch(currentResource){
                            
                        case RESOURCES.FOOD: 
                            
                            if(getResource){
    
                                if(isResAvailable(currentResource))
                                    food--;
                                else
                                   alert("Food is not Available"); //Food is not Available
                            }
                            else
                                food++;
                            
                            break;
                            
                        case RESOURCES.WOOD:
                            
                            if(getResource){
                                if(isResAvailable(currentResource))
                                    wood--;
                                else
                                   alert("Wood is not Available"); //Wood is not Available
                            }
                            else
                                wood++;
                            
                            break;
                            
                        case RESOURCES.STONE:
                            if(getResource){
                                if(isResAvailable(currentResource))
                                    stone--;
                                else
                                   alert("Stone is not Available"); //Stone is not Available
                            }
                            else
                                stone++;
                            break;
                            
                        case RESOURCES.WATER:
                            
                            if(getResource){
                                if(isResAvailable(currentResource))
                                    water--;
                                else
                                   alert("Water is not Available"); //Water is not Available
                            }
                
                            else
                                water++;
                            
                            break;
                            
                                          }
                    
                }
                
                
                var isResAvailable = function(resource){
                    
                    switch(resource){
                            
                        case RESOURCES.FOOD: 
                            
                            if(food != 0)
                                return true;                          
                            return false;
    
                            break;
                            
                        case RESOURCES.WOOD:
                            
                            if(wood != 0)
                                return true;        
                            return false;
                            
                            break;
                            
                        case RESOURCES.STONE:
                            
                            if(stone != 0)
                                return true;
                            
                            return false;
                            
                            break;
                            
                        case RESOURCES.WATER:
                            
                            if(water != 0)
                                return true;
                            return false;
                            
                            break;
                            
                        default: return false;
                            
                            
                            
                                   }
                }
                
}