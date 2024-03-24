import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  if (workExperiences.display) {
    const renderExperienceRows = () => {
      const cards = workExperiences.experience.map((card, index) => (
        <ExperienceCard
          key={index}
          isDark={isDark}
          cardInfo={{
            company: card.company,
            desc: card.desc,
            date: card.date,
            companylogo: card.companylogo,
            role: card.role,
            descBullets: card.descBullets
          }}
        />
      ));

      const columns = [[], [], []];
      for (let i = 0; i < cards.length; i++) {
        const columnIdx = i % 3;
        columns[columnIdx].push(cards[i]);
      }

      return columns.map((column, index) => (
        <div className="experience-column" key={index}>
          {column}
        </div>
      ));
    };

    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="10px">
          <div className="experience-container" id="workExperience">
            <h1 className="experience-heading" style={{ marginBottom: '10px'}}>Experiences</h1> {/* Heading */}
          </div>
        </Fade>
        <div className="experience-container" id="workExperience">
          {renderExperienceRows()} {/* Rows of experience cards */}
        </div>
      </div>
    );
  }
  return null;
}
