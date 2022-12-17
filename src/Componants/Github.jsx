import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
// import ReactTooltip from "react-tooltip"
import {Box, Text} from "@chakra-ui/react"
function Github() {
  return (
    <Row style={{marginLeft:"15%", justifyContent: "center", paddingBottom: "10px" }}>
      <Text
            textTransform={"uppercase"}
            color={"red.600"}
            fontWeight={700}
            fontSize={"3xl"}
            // marginLeft={"20%"}
            p={3}
            // alignSelf={"flex-start"}
            rounded={"md"}
          >
            My Github Calender
          </Text>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      
      <Box  display={{ md:"flex", sm: "none" ,xs:"none" }} >
      <GitHubCalendar
        username="yadav123yo"
        blockSize={15}
        // blockMargin={5}
        color="red"
        fontSize={16}
      >
        {/* <ReactTooltip delayShow={20} html/> */}
    </GitHubCalendar>
    
    </Box>
    <Box  gap={20} display={{ md:"flex", sm: "none" ,xs:"none" }}  >
    
      <div style={{display:"wrap", alignContent:"center", marginLeft:"8%" }}>
      <Text
            textTransform={"uppercase"}
            color={"red.600"}
            fontWeight={700}
            fontSize={"3xl"}
            // marginLeft={"20%"}
            p={3}
            // alignSelf={"flex-start"}
            rounded={"md"}
          >
            My Github Stats
          </Text>
      <img   src="https://github-readme-streak-stats.herokuapp.com/?user=yadav123yo" alt="yadav123yo" />
      <br />
      

      <img  src="https://github-readme-stats.vercel.app/api/top-langs?username=yadav123yo&show_icons=true&locale=en&layout=compact" alt="yadav123yo" />
      </div>
      </Box>
    </Row>
  );
}

export default Github;