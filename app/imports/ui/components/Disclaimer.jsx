import React from 'react';
import { Header, List, Segment } from 'semantic-ui-react';

/* eslint-disable max-len */
const Disclaimer = () => (
    <Segment>
      <Header
          as={'h3'}
          content={'Disclaimer & Other Directions'}
      />
      Individuals should consult with their health care providers as needed for further evaluation and assessment.
      <List bulleted>
        <List.Item>
          Information and resources for the UH community regarding COVID-19 is available <a href={'https://www.hawaii.edu/emergency/important-health-information-novel-coronavirus/'}>here</a>. Links to each of our campus COVID-19 resource web sites is located <a href={'https://www.hawaii.edu/emergency/important-health-information-novel-coronavirus/covid-19-info-by-campuses/'}>here</a>, including campus specific contact information for health resources.
        </List.Item>
      </List>
      Many people are experiencing stress from the COVID-19 pandemic, and resources are available to help.
      <List bulleted>
        <List.Item>
          Stress can include: Fear and worry about your own health and the health of your loved ones, your financial situation or job, or loss of support services you rely on. Feeling anxious, overwhelmed or sad. Changes in sleep or eating patterns. Difficulty sleeping or concentrating. Feeling isolated and lonely. Feeling of loss (grief) that persists or worsens over time. Worsening of chronic health problems. Worsening of mental health conditions. Increased use of tobacco, and/or alcohol or other substances.
        </List.Item>
        <List.Item>
          If any of these issues apply to you or those you know, please see mental health resource <a href={'https://www.hawaii.edu/its/covid-19-resources/mental-health-resources/'}>here</a> for further mental/behavioral health resources. You are not alone and we are here to help.
        </List.Item>
      </List>
      Guidance from the U.S. Centers for Disease Control and Prevention may be found <a href={'https://www.cdc.gov/coronavirus/2019-ncov/index.html'}>here</a>.
    </Segment>
);

export default Disclaimer;
