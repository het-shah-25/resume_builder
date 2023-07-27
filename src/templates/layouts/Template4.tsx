import React from 'react';
import styled from 'styled-components';
import shallow from 'zustand/shallow';
import Image from 'next/image';

import {
  useIntro,
  useWork,
  useSkills,
  useActivities,
  useEducation,
  useLabels,
  useProject,
  useVolunteer,
} from 'src/stores/data.store';

import {
  Intro,
  TechnicalExpertise,
  UnratedCapsules,
  Education,
  Social,
} from 'src/templates/components/template4';
import { Section } from 'src/templates/components/template3/shared';

/* Common comps */
import { Exp } from 'src/templates/components/exp/Exp';
import { Description } from 'src/templates/components/description/Description';
import { Project } from 'src/templates/components/project/project';
import { Volunteering } from 'src/templates/components/volunteering/volunteering';
const ResumeContainer = styled.div`
  height: 100%;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};

  .body {
    display: flex;
    margin-top: 10px;
    &__section {
      border: 1px solid rgba(0, 0, 0, 0);
      border-radius: 4px;
      min-height: 30vh;
      &--left {
        margin: 0 5px 0 10px;
        flex: 0 0 40%;
      }
      &--right {
        flex: 1;
        margin: 0 10px 0 5px;
      }
    }
  }

  @media print {
    border: none;
  }
`;

export default function Template4() {
  // Uncomment below lines to access data

  const intro = useIntro((state: any) => state.intro);
  const education = useEducation((state: any) => state.education);
  const experience = useWork((state: any) => state);
  const projects = useProject((state: any) => state);
  const organization = useVolunteer((state: any) => state);
  const [involvements, achievements] = useActivities(
    (state: any) => [state.involvements, state.achievements],
    shallow
  );
  const [languages, frameworks, libraries, databases, technologies, practices, tools] = useSkills(
    (state: any) => [
      state.languages,
      state.frameworks,
      state.libraries,
      state.databases,
      state.technologies,
      state.practices,
      state.tools,
    ],
    shallow
  );
  const labels = useLabels((state: any) => state.labels);

  return (
    <ResumeContainer>
      <img
        src="DaiictLogo.jpg"
        style={{ height: '75px', marginLeft: '10px', marginTop: '10px' }}
      ></img>
      <Intro name="Varchasvi" intro={intro} />
      <div className="body">
        <div className="body__section body__section--left">
          <Section title="EDUCATION">
            <Education data={education} />
          </Section>
          {/* <Section icon="expert" title={labels[5]}>
            <UnratedCapsules data={[...languages, ...frameworks]} />
          </Section> */}

          <Section title="SKILLS">
            <UnratedCapsules data={[...technologies, ...libraries, ...databases]} />
          </Section>
          {/* 
          <Section icon="branch" title="METHODOLOGY / APPROACH">
            <UnratedCapsules data={practices} />
          </Section>

          <Section icon="tool" title="TOOLS">
            <UnratedCapsules data={tools} />
          </Section> */}
          <Section title="POSITIONS OF RESPONSIBILITY">
            <Volunteering volunteers={organization.volunteer} />
          </Section>
          <Section title="INTERESTS">
            <Description description={involvements} />
          </Section>
        </div>

        <div className="body__section body__section--right">
          <Section title="EXPERIENCE">
            <Exp companies={experience.companies} />
          </Section>
          <Section title="PROJECTS">
            <Project projects={projects.projects} />
          </Section>
          <Section title="ACHIEVEMENTS">
            <Description description={achievements} />
          </Section>
        </div>
      </div>
    </ResumeContainer>
  );
}
