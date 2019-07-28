import React, { PureComponent } from 'react';

export default class Word extends PureComponent{


    render(){
        const {text, index, formats, selected} = this.props;
        return <span key={index} id={index} 
        className={`word ${formats.join(' ')} ${selected?'selected':''}`}>
        {`${text} `}
    </span>

    }   
}