import Pokemon1G1 from '../assets/generations/generation1/001.png';
import Pokemon2G1 from '../assets/generations/generation1/004.png';
import Pokemon3G1 from '../assets/generations/generation1/007.png';
import Pokemon1G2 from '../assets/generations/generation2/152.png';
import Pokemon2G2 from '../assets/generations/generation2/155.png';
import Pokemon3G2 from '../assets/generations/generation2/158.png';
import Pokemon1G3 from '../assets/generations/generation3/252.png';
import Pokemon2G3 from '../assets/generations/generation3/255.png';
import Pokemon3G3 from '../assets/generations/generation3/258.png';
import Pokemon1G4 from '../assets/generations/generation4/387.png';
import Pokemon2G4 from '../assets/generations/generation4/390.png';
import Pokemon3G4 from '../assets/generations/generation4/393.png';
import Pokemon1G5 from '../assets/generations/generation5/495.png';
import Pokemon2G5 from '../assets/generations/generation5/498.png';
import Pokemon3G5 from '../assets/generations/generation5/501.png';
import Pokemon1G6 from '../assets/generations/generation6/650.png';
import Pokemon2G6 from '../assets/generations/generation6/653.png';
import Pokemon3G6 from '../assets/generations/generation6/656.png';
import Pokemon1G7 from '../assets/generations/generation7/722.png';
import Pokemon2G7 from '../assets/generations/generation7/725.png';
import Pokemon3G7 from '../assets/generations/generation7/728.png';
import Pokemon1G8 from '../assets/generations/generation8/810.png';
import Pokemon2G8 from '../assets/generations/generation8/813.png';
import Pokemon3G8 from '../assets/generations/generation8/816.png';

export const Generations = [
  {id:1, name: "Generation I"},
  {id:2, name: "Generation II"},
  {id:3, name: "Generation III"},
  {id:4, name: "Generation IV"},
  {id:5, name: "Generation V"},
  {id:6, name: "Generation VI"},
  {id:7, name: "Generation VII"},
  {id:8, name: "Generation VIII"}
]

export function GetGeneration(generation){
  switch(generation){
    case 'Generation I':
      return [Pokemon1G1, Pokemon2G1, Pokemon3G1];
    case 'Generation II':
      return [Pokemon1G2, Pokemon2G2, Pokemon3G2];
    case 'Generation III':
      return [Pokemon1G3, Pokemon2G3, Pokemon3G3];
    case 'Generation IV':
      return [Pokemon1G4, Pokemon2G4, Pokemon3G4];
    case 'Generation V':
      return [Pokemon1G5, Pokemon2G5, Pokemon3G5];
    case 'Generation VI':
      return [Pokemon1G6, Pokemon2G6, Pokemon3G6];
    case 'Generation VII':
      return [Pokemon1G7, Pokemon2G7, Pokemon3G7];
    case 'Generation VIII':
      return [Pokemon1G8, Pokemon2G8, Pokemon3G8];
  }
}