import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { AFrameRenderer, Marker } from 'react-web-ar';
import appTicket from './app-ticket.png';
import journeyDetails from './journey-details.png';
import informationIcon from './information-icon.png';
import trainIcon from './train-icon.png';
import userProfile from './user-profile.png';

class Animation extends Component {
    render() {
        return (
          <AFrameRenderer arToolKit={{ sourceType: 'webcam' }}>
            <Marker parameters={{
                preset: "hiro",
                type: "pattern",
                // url: "https://raw.githubusercontent.com/lbelfield/augmented-reality/master/src/components/trainTicket/train-ticket.patt"
              }}>
              <a-assets-item  id="bowser" src="https://cdn.glitch.com/06bd98b4-97ee-4c07-a546-fe39ca205034%2Fbowser.glb" />
              <a-assets-item img id="appTicket" src={appTicket} />
              <a-assets-item img id="journeyDetails" src={journeyDetails} />
              <a-assets-item img id="informationIcon" src={informationIcon} />
              <a-assets-item img id="trainIcon" src={trainIcon} />
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
                  
                </a-entity>

                

              </a-entity>

            </Marker>
          </AFrameRenderer>
        );
    }
}

render(<Animation />, document.getElementById('root'));

export default Animation;
