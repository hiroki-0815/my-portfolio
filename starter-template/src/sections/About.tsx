import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import React from "react";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import AtomixHabitImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";

const About = () => {
  const toolboxItems = [
    {
      title: "Javascript",
      iconType: JavascriptIcon,
    },
    {
      title: "HTML",
      iconType: HTMLIcon,
    },
    {
      title: "CSS3",
      iconType: CSSIcon,
    },
    {
      title: "React",
      iconType: ReactIcon,
    },
    {
      title: "Chrome",
      iconType: ChromeIcon,
    },
    {
      title: "Github",
      iconType: GithubIcon,
    },
  ];
  return (
    <div>
      <SectionHeader
        eyebrow="about me"
        title="a glimpse into my world"
        description="Learn more about who I am. what I do, and what inspires me"
      />
      <Card>
        <div className="">
          <div className="inline-flex">
            <StarIcon />
            <h3>My Reads</h3>
          </div>
          <p>Explore the books shaping my perspectives</p>
          <Image src={AtomixHabitImage} alt="atomic habit cover pic" />
        </div>
      </Card>
      <Card>
        <div className="">
          <div className="inline-flex">
            <StarIcon />
            <h3>My Toolbox</h3>
          </div>
          <p>
            Explore the technologies and tools I use to craft digital
            experiences
          </p>
          {toolboxItems.map((item) => (
            <div key={item.title} className="">
              <TechIcon component={item.iconType} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default About;
