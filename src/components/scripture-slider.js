import React from 'react'

import theme from '../styles/rebass-theme'
import _ from 'lodash'
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { capitalize } from '../core/utils'


const SliderWithTooltip = createSliderWithTooltip(Slider);
class ScriptureSlider extends React.Component {

  state = {
    chapters: [],
    value: 0,
  }

  tipFormatter = (value) => {
    const chapter = this.state.chapters[value]
    return capitalize(chapter.book) + ' ' + (chapter.chapter + 1);
  }

  componentWillMount() {
    const chapters = this.updateChapters(this.props);
    
  }

  componentWillReceiveProps(props) {
    let chapters = this.state.chapters;
    if(props.bookmark.work !== this.props.bookmark.work) {
      chapters = this.updateChapters(props);
    }
    if(props.bookmark.book !== this.props.bookmark.work || props.bookmark.chapter !== this.props.bookmark.chapter) {
      this.updateValue(chapters, props.bookmark)
    }
  }

  updateChapters = (props) => {
    const { works, bookmark } = props
    const work = works[bookmark.work];

    const chapters = _.flatten(work.map(
      book => _.range(0, book.chapters).map(i => ({
        book: book.name,
        chapter: i,
      }))
    ))

    const marks = _.reduce(work, (res, book) => ({
      ...res, 
      [res.counter]: '',
      counter: res.counter + book.chapters,
    }), {counter: 0})
    delete marks.counter;

    this.setState({chapters, marks});
    return chapters;
  }

  updateValue = (chapters, bookmark) => {
    const value = _.findIndex(chapters, ({ book, chapter }) => book === bookmark.book && chapter === bookmark.chapter);
    this.setState({value});
  }

  render() {
    const { chapters, marks, value } = this.state;

    return (
      <SliderWithTooltip
        tipFormatter={this.tipFormatter}
        tipProps={{ placement: 'top', overlayClassName: 'dark' }}
        onChange={value => this.setState({value})}
        onAfterChange={v => this.props.onChange(chapters[v])}
        min={0}
        value={value}
        max={chapters.length - 1}
        marks={marks}
        trackStyle={{ height: 2, backgroundColor: theme.colors.secondary }}
        railStyle={{ height: 2, backgroundColor: theme.colors.offLight }}
        handleStyle={[{ 
          height: 10, 
          width: 10, 
          marginTop: -4,
          borderColor: theme.colors.secondary,
        }]}
        dotStyle={{
          bottom: 0,
          marginLeft: -3,
          width: 6,
          height: 6,
          backgroundColor: theme.colors.offLight
        }}
        activeDotStyle={{ backgroundColor: theme.colors.secondary, borderColor: theme.colors.secondary }}
        
        // value={50}
        // dots
        // dotStyle={{borderColor: 'orange'}}
        
      />
    )
  }
}

export default ScriptureSlider;