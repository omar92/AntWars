var RESOURCES = {
  STONE: 0,
  WATER: 1,
  WOOD: 2,
  FOOD: 3
};
var LOCATIONS = {
  QUEEN: 0,
  LAKE: 1,
  WOOD: 2,
  FOOD: 3,
  STONE: 4,
  STORE: 5,
  SOLDIERS_BUILDING_1: 6,
  SOLDIERS_BUILDING_1: 7,
  SOLDIERS_BUILDING_1: 8
};

var LOCATION_TYPE = {
  ELSE: 0,
  RESOURCE: 2,
  BUILDING: 2
};

var getLocationType = function(location) {
  switch (location) {
    case QUEEN:
      return LOCATION_TYPE.ELSE;
      break;
    case LAKE:
    case WOOD:
    case FOOD:
    case STONE:
      return LOCATION_TYPE.RESOURCE;
      break;
    case STORE:
    case SOLDIERS_BUILDING_1:
    case SOLDIERS_BUILDING_1:
    case SOLDIERS_BUILDING_1:
      return LOCATION_TYPE.BUILDING;
      break;
    default:
      break;
  }
};
