import React from 'react';
import Section from 'grommet/components/Section';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import TextInput from 'grommet/components/TextInput';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';

export default class FileUploadSection extends React.Component {
  render () {
    return (
        <Section pad='large'
          justify='center'
          align='center'
          full='vertical'
          colorIndex='light-2'>
          <Form>
            <Headline margin='none'>
              Step 1
            </Headline>
            <Heading>Upload your File</Heading>
            <input type="file" name="pic" accept="image/*"/>
          </Form>
        </Section>
    )
  }
}
