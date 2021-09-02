import React from 'react';
import { Accordion, Card, Menu } from 'semantic-ui-react';

const ResourcesCard = () => {
  const panels = [
    {
      key: 'testing',
      title: 'Get COVID-19 Testing',
      content: {
        content: (
            <Menu.Menu>
              <Menu.Item
                  as={'a'}
                  href='https://www.clinicallabs.com/appt/uhtest/'
                  content={'UH Provided COVID Testing'}
              />
              <Menu.Item
                  as={'a'}
                  href='https://hawaiicovid19.com/testing-isolation-quarantine/'
                  content={'Hawai\'i Testing Programs'}
              />
            </Menu.Menu>
        ),
      },
    },
    {
      key: 'guidance',
      title: 'COVID Guidance',
      content: {
        content: (
            <Menu.Menu>
              <Menu.Item
                  as={'a'}
                  href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'
                  content={'CDC Guidance'}
              />
              <Menu.Item
                  as={'a'}
                  href='https://health.hawaii.gov/coronavirusdisease2019/'
                  content={'Hawai\'i Guidance'}
              />
            </Menu.Menu>
        ),
      },
    },
  ];

  return (
      <Card
          fluid
          header={'Resources'}
          description={
            <Accordion
              as={Menu}
              panels={panels}
              vertical
              secondary
              fluid
            />
          }
      />
  );
};

export default ResourcesCard;
