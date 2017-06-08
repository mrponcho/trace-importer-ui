import React from 'react';
import Article from 'grommet/components/Article';
import TeaserSection from '../../components/TeaserSection/TeaserSection.jsx';
import FileUploadSection from '../../components/FileUploadSection/FileUploadSection.jsx';
import XMLViewSection from '../../components/XMLViewSection/XMLViewSection.jsx';
import ImportSection from '../../components/ImportSection/ImportSection.jsx';
import FilterSection from '../../components/FilterSection/FilterSection.jsx';


export default class MainPage extends React.Component {
  componentDidMount(){
    
  }

  render () {
    return (
        <Article scrollStep={true} alignSelf='stretch'>
          <TeaserSection></TeaserSection>
          <FileUploadSection></FileUploadSection>
          <FilterSection></FilterSection>
          <XMLViewSection></XMLViewSection>
          <ImportSection></ImportSection>
        </Article>
    )
  }
}
