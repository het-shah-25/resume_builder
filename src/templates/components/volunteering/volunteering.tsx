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

const OrganizationName = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const Expdate = styled.div`
  font-style: italic;
  font-size: 0.6rem;
`;

const mdParser = new MarkdownIt(/* Markdown-it options */);

export function VolunteeringHeader({ volunteer }: any) {
  return (
    <>
      <Flex jc="space-between" ai="flex-end" style={{ lineHeight: 'initial' }}>
        <OrganizationName>{volunteer.organization}</OrganizationName>
        <Expdate>
          {volunteer.startDate} - {volunteer.endDate}
        </Expdate>
      </Flex>
    </>
  );
}
export function Volunteering({ volunteers, styles }: any) {
  return (
    <FlexTimeline style={styles}>
      {volunteers.map((volunteer: any, index: number) => (
        <TimelineItem key={`${volunteer.organization}-${index}`}>
          <VolunteeringHeader volunteer={volunteer} />
          <div dangerouslySetInnerHTML={{ __html: mdParser.render(volunteer.summary ?? '') }} />
        </TimelineItem>
      ))}
    </FlexTimeline>
  );
}
