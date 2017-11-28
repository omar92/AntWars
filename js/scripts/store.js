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
                                
                                //var isAvail = 
                                //if(this.)
                                food--;
                            }
                            else
                                food++;
                            
                            break;
                            
                        case RESOURCES.WOOD:
                            
                            if(getResource)
                                
                                wood--;
                            else
                                wood++;
                            
                            break;
                            
                        case RESOURCES.STONE:
                            if(getResource)
                                stone--;
                            else
                                stone++;
                            break;
                            
                        case RESOURCES.WATER:
                            
                            if(getResource)
                                water--;
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