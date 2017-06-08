import React from 'react';
import ReactDOM from 'react-dom';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Button from 'grommet/components/Button';
import Deploy from 'grommet/components/icons/base/Deploy';


export default class ImportSection extends React.Component {
  render () {
    const scrollTop = () =>{
      console.log('click');
      console.log(this.props.scrollNode);
      if(this.props.scrollNode){
        this.props.scrollNode.scrollIntoView();
      }
    }

    return (
        <Section pad='large'
          justify='center'
          align='center'
          full='vertical'
          colorIndex='light-2'>
          <Headline margin='medium'>
            Step 4
          </Headline>
          <Button icon={<Deploy />}
            label='Send'
            plain={false}
            critical={false}
            accent={false}
            secondary={false}
            primary={true}
            onClick={this.props.onClick}
             />
        </Section>
    )
  }
}
