import { Box } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import Order from "./page/Order"

function App() {

  return (
    <>
      <Box>
        <Box className="navbar" bgColor={"#006839"} color={"white"} position={"fixed"} w={"100%"} zIndex={2}>
         <Navbar/>
        </Box>
        <br />
        <br />
        <Box className="order">
         <Order/>
        </Box>
      </Box>
    </>
  )
}

export default App
