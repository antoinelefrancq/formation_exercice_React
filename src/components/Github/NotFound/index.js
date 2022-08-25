import './styles.scss';
import { Segment } from 'semantic-ui-react';

function NotFound() {
  return (
    <Segment>
      <h2 className="not-found">404</h2>
      <h2 className="not-found">Page Not Found</h2>
    </Segment>
  );
}

export default NotFound;
