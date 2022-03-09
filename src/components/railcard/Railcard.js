import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';
import appTicket from './app-ticket.png';
import journeyDetails from './journey-details.png';
import informationIcon1 from './image4.jpg';
import informationIcon2 from './image2.jpg';
import informationIcon3 from './image3.jpg';
import informationIcon4 from './image4.jpg';
import informationIcon5 from './image5.jpg';
import userProfile from './user-profile.png';
import backgroundImage1 from './background1.jpg';
import backgroundImage2 from './background4.gif';
// import 'aframe';
import 'aframe-gif-shader';



class Railcard extends Component {
  render() {
    return (
      <AFrameRenderer style={{ backgroundImage: `url(${backgroundImage2})` }} arToolKit={{ sourceType: 'webcam' }}>
        <Marker parameters={{
          preset: "pattern",
          type: "pattern",
          url: "https://raw.githubusercontent.com/lbelfield/augmented-reality/master/src/components/trainTicket/train-ticket.patt"
        }}>

          <a-assets-item img id="informationIcon1" src={informationIcon1} />
          <a-asset-item img id="informationIcon2" src={informationIcon2} />
          <a-asset-item img id="informationIcon3" src={informationIcon3} />
          <a-asset-item img id="informationIcon4" src={informationIcon4} />
          <a-asset-item img id="informationIcon5" src={informationIcon5} />

          <a-assets-item img id="appTicket" src={appTicket} />
          <a-assets-item img id="journeyDetails" src={journeyDetails} />
          <a-assets-item img id="userProfile" src={userProfile} />

          <a-entity camera look-controls mouse-cursor>
            <a-entity
              id="ticket"
              ticket-listener
              cursor="fuse: true; fuseTimeout: 500"
              position="1 0 0"
              geometry="primitive: box; height: 0.1; depth: 1.5; rotation: 90 0 0;"
              material="shader: flat;"
              visible="false">
              <a-animation attribute="position"
                dur="3000"
                begin="ticketAnimation"
                from="0 0 0"
                to="1 0 0" />
            </a-entity>

            <a-entity
              id="journey-details"
              journey-details-listener
              cursor="fuse: true; fuseTimeout: 500"
              position="2 0 0"
              geometry="primitive: box; height: 0.1; depth: 1.5; rotation: 90 0 0;"
              material="shader: flat; src: #journeyDetails"
              visible="false">
              <a-animation attribute="position"
                dur="3000"
                begin="journeyDetailsAnimation"
                from="1 0.1 0"
                to="2 0.01 0" />
            </a-entity>

            <a-entity
              id="cylinder-info1-icon"
              cylinder-info1-icon-listener
              cursor="fuse: true; fuseTimeout: 500"
              position="-0.25 0.5 0.5"
              geometry="primitive: cylinder; height: 0.1; radius: 0.15"
              material="shader: flat; src: #informationIcon1" />


            <a-entity
              id="cylinder-info2-icon"
              cylinder-info2-icon-listener
              cursor="fuse: true; fuseTimeout: 500"
              position="-0.25 0.5 0.9"
              geometry="primitive: cylinder; height: 0.1; radius: 0.15"
              material="shader: flat; src: #informationIcon2" />


            <a-entity
              id="cylinder-info3-icon"
              cylinder-info3-icon-listener
              cursor="fuse: true; fuseTimeout: 500"
              position="-0.25 0.1 0.8"
              geometry="primitive: cylinder; height: 0.1; radius: 0.15"
              material="shader: flat; src: #informationIcon3" />

            <a-entity
              id="cylinder-info4-icon"
              cylinder-info4-icon-listener
              cursor="fuse: true; fuseTimeout: 500"
              position="0.25 0.1 0.5"
              geometry="primitive: cylinder; height: 0.1; radius: 0.15"
              material="shader: flat; src: #informationIcon4" />

            <a-entity
              id="cylinder-info5-icon"
              cylinder-info5-icon-listener
              cursor="fuse: true; fuseTimeout: 500"
              position="0.5 0.5 0.8"
              geometry="primitive: cylinder; height: 0.1; radius: 0.15"
              material="shader: flat; src: #informationIcon5" />

          </a-entity>

        </Marker>
      </AFrameRenderer>
    );
  }
}

render(<Railcard />, document.getElementById('root'));

export default Railcard;
