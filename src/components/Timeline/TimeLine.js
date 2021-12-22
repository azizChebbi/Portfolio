import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import TimelineElement from "./TimelineElement";
import "../../css/timeline.css";
import arr from "../../data/timeline";

function TimeLine() {
    return (
        <div className='timeline' id='experience'>
            <h1>Experience</h1>
            <VerticalTimeline lineColor='#370617'>
                {arr.map((object) => (
                    <TimelineElement data={object} />
                ))}
                <VerticalTimelineElement
                    iconStyle={{ background: "#ffc200", color: "#fff" }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    );
}

export default TimeLine;
