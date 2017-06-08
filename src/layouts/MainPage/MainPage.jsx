import React from 'react';
import ReactDOM from 'react-dom';
import Article from 'grommet/components/Article';
import TeaserSection from '../../components/TeaserSection/TeaserSection.jsx';
import FileUploadSection from '../../components/FileUploadSection/FileUploadSection.jsx';
import XMLViewSection from '../../components/XMLViewSection/XMLViewSection.jsx';
import ImportSection from '../../components/ImportSection/ImportSection.jsx';
import FilterSection from '../../components/FilterSection/FilterSection.jsx';
import Scroll from 'grommet/utils/Scroll';


export default class MainPage extends React.Component {
  componentDidMount(){
    console.log(ReactDOM.findDOMNode(this.refs.test));
  }

  scrollTo(componentFrom, componentTo){
    const rect = componentTo.getBoundingClientRect();
    console.log(rect);
    Scroll.scrollBy(componentFrom, 'scrollTop', rect.top, ()=>{
      console.log('Done Scrolling?');
    });
    console.log(componentFrom['scrollTop']);
  }

  render () {
    return (
        <Article scrollStep={true} alignSelf='stretch' ref='main'>
          <TeaserSection ref = 'test' onClick={() =>{
              this.scrollTo(ReactDOM.findDOMNode(this.refs.main), ReactDOM.findDOMNode(this.refs.test1))
            }}></TeaserSection>
          <FileUploadSection ref = 'test1' ></FileUploadSection>
          <FilterSection></FilterSection>
          <XMLViewSection></XMLViewSection>
          <ImportSection ref='test4' onClick={() => {
              this.scrollTo(ReactDOM.findDOMNode(this.refs.main), ReactDOM.findDOMNode(this.refs.test))
            }}></ImportSection>
        </Article>
    )
  }
}
