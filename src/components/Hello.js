import React from 'react';
import definitions from './columnDefinitions';

const Hello = (props) => (
  <div>
    <table>
      <thead>
        <tr>
          {(definitions || []).map(def => (
            <th>
              {def.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(props.data || []).map(row => (
          <tr>
            {(definitions || []).map(def => (
              <td>
                {row[def.name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Hello.propTypes = {
};

Hello.defaultProps = {
  data: [],
};

export default Hello;
