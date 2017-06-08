import React from 'react';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Pulse from 'grommet/components/icons/Pulse';
import LinkDown from 'grommet/components/icons/base/LinkDown';


export default class TeaserSection extends React.Component {
  render () {
    return (
          <Section pad='large'
            justify='center'
            align='center'
            full='vertical'>
            <Headline margin='medium'>
              Welcome to Trace Importer
            </Headline>
            <Box pad='large'
              separator='top'>
              <Button href='#1'>
                <Pulse icon={<LinkDown colorIndex="light-1" />} />
              </Button>
            </Box>
          </Section>
    )
  }
}
