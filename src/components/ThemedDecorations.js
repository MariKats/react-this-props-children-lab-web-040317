import React,{Component, Children} from 'react';

export default class ThemedDecorations extends Component {
    render() {
      const ThemedParty = Children.map(this.props.children, child => {
        return <div className={this.props.theme}>{child}</div>
      })

        return (
            <div className="class-name">
                {ThemedParty}
            </div>
        );
    }
}
