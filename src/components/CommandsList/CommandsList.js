/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

function CommandsList({ filteredCommands, execCommand }) {
  return (
    <div style={{ display: 'block', maxHeight: '10rem', overflow: 'scroll' }}>
      <ul style={{ listStyle: 'none' }}>
        {filteredCommands.map((command) => (
          <li
            style={{ cursor: 'pointer' }}
            onClick={() => execCommand(command)}
            key={command.command}
          >
            {command.command}
          </li>
        ))}
      </ul>
    </div>
  );
}

CommandsList.propTypes = {
  filteredCommands: PropTypes.array,
  execCommand: PropTypes.func,
};

export default CommandsList;
