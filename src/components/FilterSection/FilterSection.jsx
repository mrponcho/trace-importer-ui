import React from 'react';
import Section from 'grommet/components/Section';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import TextInput from 'grommet/components/TextInput';


export default class FilterSection extends React.Component {
  render () {
    return (
        <Section pad='large'
          justify='start'
          align='center'
          full='vertical'
          colorIndex='light-2'>
          <Form>
            <Headline margin='small'>
              Step 2
            </Headline>
            <Heading margin='small'>Chose your Filter</Heading>
            <Box margin='none' >
              <Box margin="small">
                <Label align='start' margin='none'>CRS Type</Label>
                <Select placeHolder='CRS Type'
                  multiple={false}
                  options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                  value={[]}
                  />
              </Box>
              <Box margin='small'>
                <Label align='start' margin='none'>Request Type</Label>
                <Select placeHolder='Request Type'
                  multiple={false}
                  options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                  value={[]}
                   />
              </Box>
            </Box>
            <Box margin="small">
              <Label align='start' margin='none'>Invocation ID</Label>
              <textarea rows="4" cols="50">
              </textarea>
            </Box>
          </Form>
        </Section>
    )
  }
}
