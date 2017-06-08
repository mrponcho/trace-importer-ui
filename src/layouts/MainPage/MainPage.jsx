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

  // copied from Grommet Scroll
  scrollTo(componentFrom, componentTo){
    const rect = componentTo.getBoundingClientRect();
    Scroll.scrollBy(componentFrom, 'scrollTop', rect.top, ()=>{
    });
  }

  render () {
    return (
        <Article scrollStep={true} alignSelf='stretch' ref='main'>
          <TeaserSection ref = 'test' onClick={() =>{
              this.scrollTo(ReactDOM.findDOMNode(this.refs.main), ReactDOM.findDOMNode(this.refs.test1))
            }}></TeaserSection>
          <FileUploadSection ref = 'test1' onClick={() =>{
              this.scrollTo(ReactDOM.findDOMNode(this.refs.main), ReactDOM.findDOMNode(this.refs.test2))
            }}></FileUploadSection>
          <FilterSection ref = 'test2' onClick={() =>{
              this.scrollTo(ReactDOM.findDOMNode(this.refs.main), ReactDOM.findDOMNode(this.refs.test3))
            }}></FilterSection>
          <XMLViewSection ref = 'test3' onClick={() =>{
              this.scrollTo(ReactDOM.findDOMNode(this.refs.main), ReactDOM.findDOMNode(this.refs.test4))
            }}></XMLViewSection>
          <ImportSection ref='test4' onClick={() => {
              this.scrollTo(ReactDOM.findDOMNode(this.refs.main), ReactDOM.findDOMNode(this.refs.test))
            }}></ImportSection>
        </Article>
    )
  }
}
