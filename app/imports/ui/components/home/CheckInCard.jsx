import React from 'react';
import { Card, Grid, Header, Label, List } from 'semantic-ui-react';
import DailyCheckInModal from '../health/DailyCheckInModal';

const CheckInCard = () => (
    <Card fluid>
      <Card.Content>
        <Header
            as={'h3'}
            content={'Daily health check-in'}
            subheader={'Help keep our campus safe by completing your daily health check-in!'}
        />

        <List>
          <List.Item>
            <Label circular content={'1'}/>
            {'\tCheck your symptoms.'}
          </List.Item>
          <List.Item>
            <Label circular content={'2'}/>
            {'\tKeep track of your symptoms every day.'}
          </List.Item>
        </List>

        <Grid.Column textAlign={'center'}>
          <DailyCheckInModal/>
        </Grid.Column>
      </Card.Content>
    </Card>
);

export default CheckInCard;
