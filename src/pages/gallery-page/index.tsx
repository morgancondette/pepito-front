import * as React from 'react';

import DefaultTemplate from 'templates/default-template';

class GalleryPage extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <DefaultTemplate>
        <h1>Gallery page</h1>
      </DefaultTemplate>
    );
  }
}

export default GalleryPage;
