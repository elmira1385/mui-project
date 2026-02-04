import Button from '@mui/material/Button';
import { useTheme } from '../store/useTheme';

export default function ButtonUsage() {
  const{theme,setTheme}=useTheme()
  return <Button onClick={()=>{
   if(theme==="light"){
    setTheme("dark")
   }else{
    setTheme("light")
   }
  }} variant="contained">Hello world</Button>;
}
