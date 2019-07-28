import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';
import { FORMAT } from './enums';




class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            words:[],
            currentSelection:this.initWord()
        }
    }
    initWord(text='', index=NaN, formats=[]){
        return {
            text:text,
            index:index,
            formats:formats
        }
    }
    componentDidMount() {
        getMockText().then(result=> {
            //console.log(result);
            this.setState({
                words: result.split(' ').map((text, i)=>
                    this.initWord(text, i))
            });
        });
    }
    selectWord(id){
        const {currentSelection} = this.state;
        if (id === currentSelection.index){
            this.setState({currentSelection:this.initWord()})
        } 
        else {
            let findedWord = this.state.words[id];
            this.setState({currentSelection:findedWord})
        }
    }
    changeFormat(format){
        const {currentSelection, words} = this.state;
        const formats = currentSelection.formats.concat();
        if (isNaN(currentSelection.index)){return}
        else{
            const formatIndex = formats.findIndex(currentFormat=>format===currentFormat);
            if (~formatIndex){
                currentSelection.formats = formats;
                formats.splice(formatIndex, 1);
            }else{    
                formats.push(format)
            }
            
            const newWord = {...currentSelection, formats};
            const newWords = words.concat();
            newWords[currentSelection.index] = newWord;

            this.setState({
                currentSelection:newWord,
                words: newWords
            })
        }
    }
    render() {
        const {currentSelection, words} = this.state;
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel 
                        onFormatsChange={format=>this.changeFormat(format)}
                        formats={currentSelection.formats}/>
                    <FileZone 
                        currentSelection={currentSelection} 
                        onSelect={(id)=>this.selectWord(id)}
                        words={words}/>
                </main>
            </div>
        );
    }
}

export default App;
