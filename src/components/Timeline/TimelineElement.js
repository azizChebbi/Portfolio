import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

function TimelineElement({ data }) {
    return (
        <>
            <VerticalTimelineElement
                className='vertical-timeline-element--work'
                contentStyle={{ background: "#f4f5f8" }}
                contentArrowStyle={{ borderRight: "7px solid  #f4f5f8" }}
                date={data.date}
                iconStyle={{ background: "#370617", color: "#fff" }}
                icon={data.icon}
            >
                <h3 className='vertical-timeline-element-title'>{data.title}</h3>
                <h4 className='vertical-timeline-element-subtitle'>{data.subtitle}</h4>
                <p>{data.description}</p>
            </VerticalTimelineElement>
        </>
    );
}

export default TimelineElement;
