import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'antd';
import { Flex } from 'src/styles/styles';
import MarkdownIt from 'markdown-it';

const FlexTimeline = styled(Timeline)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  height: 100%;
  padding-top: 15px;
  color: ${(props: any) => props.theme.fontColor};

  ul {
    padding-left: 16px;
    margin-bottom: 0;
    font-size: 0.8rem;
  }
`;

const TimelineItem = styled(FlexTimeline.Item)`
  padding-bottom: 0;
  flex-grow: 1;
  padding-bottom: 20px;

  :last-child {
    flex-grow: 0;
    padding-bottom: 0;
  }
`;

const ProjectName = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const ProjectDate = styled.div`
  font-style: italic;
  font-size: 0.6rem;
`;

const mdParser = new MarkdownIt(/* Markdown-it options */);

export function ProjectHeader({ project }: any) {
  return (
    <>
      <Flex jc="space-between" ai="flex-end" style={{ lineHeight: 'initial' }}>
        <ProjectName>{project.name}</ProjectName>
      </Flex>
      <Flex jc="space-between" ai="flex-end">
        <ProjectDate>{project.date}</ProjectDate>
      </Flex>
    </>
  );
}

export function Project({ projects, styles }: any) {
  return (
    <FlexTimeline style={styles}>
      {projects.map((project: any, index: number) => (
        <TimelineItem key={`${project.name}-${index}`}>
          <ProjectHeader project={project} />
          <div dangerouslySetInnerHTML={{ __html: mdParser.render(project.summary ?? '') }} />
        </TimelineItem>
      ))}
    </FlexTimeline>
  );
}
