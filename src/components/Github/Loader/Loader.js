import {
  Dimmer, Loader, Image, Segment,
} from 'semantic-ui-react';

import './Loader.scss';

function Loading() {
  return (
    <Segment className="Loader">
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  );
}

export default Loading;
