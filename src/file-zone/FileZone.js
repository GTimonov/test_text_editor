import React, { Component } from 'react';
import './FileZone.css';
import Word from './word';


class FileZone extends Component {

    onClick(event){
        const target = event.target;
        if (target.classList.contains('word'))
            this.props.onSelect(+target.id);
    }


    render() {
        const {currentSelection, words} = this.props;
        return (
            <div id="file-zone">
                <div id="file" onClick={(e)=>this.onClick(e)}>
                    {words.map((word=>{
                        return <Word selected={currentSelection.index === word.index}
                                    key={word.index} {...word}/>
                    }))}
                </div>
            </div>
        );
    }
}

export default FileZone;
