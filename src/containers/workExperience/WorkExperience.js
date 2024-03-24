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
      const rows = [];
      for (let i = 0; i < workExperiences.experience.length; i += 3) {
        rows.push(
          <div className="experience-row" key={i}>
            {workExperiences.experience.slice(i, i + 3).map((card, index) => (
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
            ))}
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
