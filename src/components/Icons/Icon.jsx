import {FaTimes , FaPen , FaRegCircle} from 'react-icons/fa';
import { memo } from 'react';

function Icon({ name }){
        if(name == "cross"){
           return <FaTimes/> 
        } 
        else if(name == "circle"){
          return <FaRegCircle/>
        }
        else{
           return <FaPen/>
        }
}

export default memo(Icon);