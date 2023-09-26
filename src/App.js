import Navbar from "./Components/Navbar";
import {Stack,Button,Card,Typography,CardContent} from '@mui/material/';
import PostArea from "./Components/PostArea";
function App() {
  const styles = {
    container:{
      display:"grid",
      gridTemplateColumns: "3fr 6fr 3fr",
    }
  }
   return (
    <div className="App">
      <Navbar/>  
      <Stack>
      <div style={styles.container}>
        <Stack sx={{p:"30px",justifyContent:"center"}}>
          <Card>
            <CardContent>
            <Typography sx={{color:"#242424",fontSize:"20px",pb:"3px"}} variant="h2" component="h2">
              DEV Community is a community of 1,149,902 amazing developers
            </Typography>
            <Typography sx={{color:"##a3a3a3",fontSize:"15px"}} variant="h2" component="h2">
            We're a place where coders share, stay up-to-date and grow their careers.
            </Typography>
            </CardContent>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <div>
            <Button variant="outlined">Create account</Button>
            </div>
            <div>
            <Button sx={{color:"black"}} size="small" variant="text">Log in</Button>
            </div>
            </div>
          </Card>
        </Stack>
        <div style={{padding:30}}>
          <PostArea/>
        </div>
        <div>3</div>
      </div> 
      </Stack>
    </div>
  );
}

export default App;
