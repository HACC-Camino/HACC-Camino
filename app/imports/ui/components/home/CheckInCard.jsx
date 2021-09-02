import React from 'react';
import { Button, Card, Grid, Header, Label, List } from 'semantic-ui-react';

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
          <Button content={'Complete Daily Check-in'}/>
        </Grid.Column>
      </Card.Content>
    </Card>
);

export default CheckInCard;
