import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Wrapper = styled(Typography)`
  padding: 20px;
`;

const SmallWrapper = styled.p`
  margin: 40px;
`;

class AboutContainer extends React.Component {
  render() {
    return (
      <Paper className="About">
        <br />
        <Wrapper>
          <Typography component="h2" variant="h2">
            Welcome to the Worksheet Generator
          </Typography>
          <SmallWrapper>
            <Typography component="p" variant="p">
              This app was built for the time-strapped teacher. This is for the
              teacher that wants to challenge their students. The type of
              teacher who wants to do more than asked but is confined by time.
              Who has time to write tons of worksheets everyday? With our
              Worksheet Generator, you can produce thousands of worksheets with
              a few clicks!
            </Typography>
            <br />
            <Typography component="p" variant="p">
              Choose the math level, number of questions and other variables.
              Worksheets are numbered and answers are a click away! Make 10 of
              the same worksheet or make 100 different ones. You can provide
              unique worksheets to your classes daily. What took hours now takes
              seconds!
            </Typography>
          </SmallWrapper>
        </Wrapper>
        <br />
      </Paper>
    );
  }
}

export default AboutContainer;
