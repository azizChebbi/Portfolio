import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@mui/icons-material/Star";
import TimelineElement from "./TimelineElement";
import "../../css/timeline.css";
import arr from "../../data/timeline";

function TimeLine() {
  return (
    <div className="timeline" id="experience">
      <h1>Experience</h1>
      <VerticalTimeline lineColor="#e34972">
        {arr.reverse().map((object) => (
          <TimelineElement data={object} />
        ))}
        <VerticalTimelineElement iconStyle={{ background: "#212428", color: "#fff" }} icon={<StarIcon />} />
      </VerticalTimeline>
    </div>
  );
}

export default TimeLine;
