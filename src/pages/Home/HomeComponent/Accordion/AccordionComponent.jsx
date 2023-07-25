import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",

  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function AccordionComponent() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className="bg-green-400"
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>
            What languages are offered for learning on the platform
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our language learning hub offers a wide variety of languages to
            choose from. Currently, we offer courses for popular languages such
            as English, Spanish, French, German, Chinese, Japanese, Italian,
            Russian, Arabic, and many more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            Are the language courses suitable for beginners or only for advanced
            learners?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our language courses cater to learners of all levels, including
            beginners, intermediate, and advanced. Whether you are starting from
            scratch or aiming to enhance your language skills further, we have
            courses suitable for your proficiency level.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            How are the language lessons structured? Is there a specific
            curriculum to follow?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our language lessons are carefully designed and structured to
            provide a comprehensive learning experience. Each course follows a
            well-organized curriculum that covers essential grammar, vocabulary,
            speaking, listening, reading, and writing skills. The lessons are
            presented in a step-by-step manner to ensure gradual progress.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            Can I track my progress while learning a language? Are there
            assessments or tests available?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can easily track your progress on our platform. We provide
            regular assessments and tests to evaluate your language proficiency
            and measure your improvement over time. This allows you to identify
            areas for improvement and focus on specific aspects of the language.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
            Are the language courses taught by native speakers or experienced
            instructors?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our language courses are taught by a combination of native speakers
            and experienced language instructors. Native speakers bring
            authenticity to the learning experience, while our expert
            instructors provide valuable insights and guidance to learners.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
