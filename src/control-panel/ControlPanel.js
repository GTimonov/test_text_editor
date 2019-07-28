import React, { Component } from 'react';
import './ControlPanel.css';
import { FORMAT } from '../enums';

function ControlPanel(props){

    const { onFormatsChange, formats } = props;
    const boldSelected = ~formats.indexOf(FORMAT.BOLD);
    const underlineSelected = ~formats.indexOf(FORMAT.UNDERLINE);
    const italicSelected = ~formats.indexOf(FORMAT.ITALIC);
    return (
        <div id="control-panel">
            <div id="format-actions">
                <button className={`format-action ${boldSelected?'selected':''}`} 
                    type="button" onClick={() => onFormatsChange(FORMAT.BOLD)}><b>B</b>
                </button>
                <button className={`format-action ${italicSelected?'selected':''}`} 
                    type="button" onClick={() => onFormatsChange(FORMAT.ITALIC)}><i>I</i>
                </button>
                <button className={`format-action ${underlineSelected?'selected':''}`} 
                    type="button" onClick={() => onFormatsChange(FORMAT.UNDERLINE)}><u>U</u>
                </button>
            </div>
        </div>
    );
}


export default ControlPanel;
