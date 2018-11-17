import * as React from 'react';
import './Example.css';

interface Props {
  value?: ' ' | 'X' | 'O';

  position: { x: number; y: number };

  onClick?: (x: number, y: number) => void;
}

export default class Example extends React.Component<Props> {
  handleClick = () => {
    const {
      position: { x, y },
      onClick,
    } = this.props;
    if (!onClick) return;

    onClick(x, y);
  }

  render() {
    const { value = ' ' } = this.props;
    const disabled = value !== ' ';
    const classes = `button ${disabled ? 'disabled' : ''}`;

    return (
      <button
        className={classes}
        disabled={disabled}
        onClick={this.handleClick}
      >
        {value}
      </button>
    );
  }
}
