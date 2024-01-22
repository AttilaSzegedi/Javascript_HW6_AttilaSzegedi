/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CubixList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
    
        font-family: sans-serif;
        color: #767676;
       
      }
      li{
        list-style: none;

      }
      .container{
        display:flex;
        border-radius: 10px;
        border-color: black;
        color: #424242;
        font-family: sans-serif;
        box-shadow: 0 3px 15px rgba(0,0,0,0.1);
        max-width: 200px;
      }
      p{
        color:gray;
    }
    `;
  }

  static get properties() {
    return {
      /**
       * The name of pilot
       * @type {string}
       */
      name: {type: String},
      /**
       * The team of pilot
       * @type {string}
       */
      team: {type: String},

      
    };
  }

  constructor() {
    super();
   
  }

  render() {
    return html`
      <div class="container">      
        <ul>
        <li>${this.name} <br>
       
        </li>
          
        </ul>
      </div>
      <slot></slot>
    `;
  }

 
}

window.customElements.define('cubix-list', CubixList);
