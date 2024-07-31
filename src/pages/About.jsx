import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences, skills, testimonials } from "../constants";
import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { CTA, Testimonial } from "../components";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Sri Krishna Chaitanya Reddy Bhimavarapu
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I'm a skilled software developer based out of India with experience
          with over 4.5 years of experienc in HTML, CSS, JavaScript, React.js,
          Node.js, andPostgreSQL with a strong focus on UX design.
        </p>
      </div>
      <div className="py-10 flex flex-wrap">
        <h3 className="subhead-text">Skills</h3>
        <div className="mt-5 flex flex-wrap gap-10">
          {skills.map((skill, index) => (
            <div
              className="block-container w-20 h-20"
              key={`${skill.name}_${index}`}
            >
              <div className="btn-back rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Worked with many companies and picked up many skills along the way
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`${experience.company_name}_${index}`}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={index}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <section id="testimonials" className="py-20">
        <h3 className="subhead-text">FYI</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Kind words from
            <span className="text-blue-500"> satisfied clients</span>
          </p>
        </div>
        <div className="flex mt-4 gap-2 justify-start flex-row flex-wrap items-center max-lg:mt-10">
            {testimonials.map((testimonial,index)=>(
              <>
                <Testimonial key={index} testimonial= {testimonial.testimonial} name={testimonial.name} company_name={testimonial.company} designation={testimonial.designation} />
                </>
            ))}
        </div>
      </section>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
