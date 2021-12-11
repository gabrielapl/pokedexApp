import theme from "../theme/theme"

export function GetBackgroundByType(type) {
  switch (type) {
  case 'bug':
    return theme.colors.background_type.bg_type_bug;
  case 'dark':
    return theme.colors.background_type.bg_type_dark
  case 'dragon':
    return theme.colors.background_type.bg_type_dragon
  case 'electric':
    return theme.colors.background_type.bg_type_electric
  case 'fairy':
   return theme.colors.background_type.bg_type_fairy 
  case 'fighting':
   return theme.colors.background_type.bg_type_fighting 
  case 'fire':
   return theme.colors.background_type.bg_type_fire 
  case 'flying':
   return theme.colors.background_type.bg_type_flying 
  case 'ghost':
   return theme.colors.background_type.bg_type_ghost 
  case 'grass':
   return theme.colors.background_type.bg_type_grass
  case 'ground':
   return theme.colors.background_type.bg_type_ground 
  case 'ice':
   return theme.colors.background_type.bg_type_ice 
  case 'normal':
   return theme.colors.background_type.bg_type_normal 
  case 'poison':
   return theme.colors.background_type.bg_type_poison 
  case 'psychic':
   return theme.colors.background_type.bg_type_psychic 
  case 'rock':
   return theme.colors.background_type.bg_type_rock 
  case 'steel':
   return theme.colors.background_type.bg_type_steel 
  case 'water':
   return theme.colors.background_type.bg_type_water
  default: 
    return '#FFF'
}
      
      
}

export function GetColorByType(type) {
  switch (type) {
  case 'bug':
    return theme.colors.type.type_bug;
  case 'dark':
    return theme.colors.type.type_dark
  case 'dragon':
    return theme.colors.type.type_dragon
  case 'electric':
    return theme.colors.type.type_electric
  case 'fairy':
   return theme.colors.type.type_fairy 
  case 'fighting':
   return theme.colors.type.type_fighting 
  case 'fire':
   return theme.colors.type.type_fire 
  case 'flying':
   return theme.colors.type.type_flying 
  case 'ghost':
   return theme.colors.type.type_ghost 
  case 'grass':
   return theme.colors.type.type_grass
  case 'ground':
   return theme.colors.type.type_ground 
  case 'ice':
   return theme.colors.type.type_ice 
  case 'normal':
   return theme.colors.type.type_normal 
  case 'poison':
   return theme.colors.type.type_poison 
  case 'psychic':
   return theme.colors.type.type_psychic 
  case 'rock':
   return theme.colors.type.type_rock 
  case 'steel':
   return theme.colors.type.type_steel 
  case 'water':
   return theme.colors.type.type_water
  default: 
   return '#FFF'
}
      
      
}