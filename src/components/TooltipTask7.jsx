//Task 7

import React from 'react';
import { OverlayTrigger, Tooltip as BootstrapTooltip } from 'react-bootstrap';

export default function Tooltip() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. {' '}
        <OverlayTrigger
          placement="top"
          overlay={
            <BootstrapTooltip id="tooltip">
             Code with Bismillah
            </BootstrapTooltip>
          }
        >
          <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
            Hover here
          </span>
        </OverlayTrigger>{' '}
       Reprehenderit labore reiciendis, deleniti facere quaerat placeat debitis iusto illo aliquid!
      </p>
    </div>
  );
}
