import React from 'react';
import Section from 'grommet/components/Section';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import TextInput from 'grommet/components/TextInput';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Pulse from 'grommet/components/icons/Pulse';
import LinkDown from 'grommet/components/icons/base/LinkDown';

export default class XMLViewSection extends React.Component {
  render () {
    return (

        <Section pad='large'
          justify='start'
          align='center'
          full='vertical'
          colorIndex='light-2'>
          <Headline margin='medium'>
            Step 3
          </Headline>
          <Tabs>
            <Tab title='Request'>
              <textarea rows="10" cols="50">
              </textarea>
            </Tab>
            <Tab title='Response'>
              <textarea rows="10" cols="50">
              </textarea>
            </Tab>
          </Tabs>
          <Box pad='large'>
            <Anchor onClick={this.props.onClick}>
              <Pulse icon={<LinkDown colorIndex="light-1" />} />
            </Anchor>
          </Box>
        </Section>

    )
  }
}
