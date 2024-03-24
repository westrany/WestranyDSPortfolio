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

      const rows = [];
      for (let i = 0; i < cards.length; i += 3) {
        rows.push(
          <div className="experience-row" key={i}>
            {cards.slice(i, i + 3)}
          </div>
        );
      }
      return rows;
    };

    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <h1 className="experience-heading">Experiences</h1> {/* Heading */}
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
