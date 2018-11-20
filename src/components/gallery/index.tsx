import * as React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

interface IGalleryItem {
  id: string;
  image: string;
  title: string;
  isActive: boolean;
  caption?: string;
}

interface IGalleryProps extends React.HTMLAttributes<{}> {
  galleryItems: IGalleryItem[];
  itemsPerRow: number;
}

type TGalleryProps = IGalleryProps;

class Gallery extends React.PureComponent<TGalleryProps> {
  public render(): JSX.Element {
    const { galleryItems, itemsPerRow } = this.props;

    return (
      <GridList cols={itemsPerRow}>
        {galleryItems.map((galleryItem: IGalleryItem) => (
          <GridListTile key={galleryItem.id} cols={1}>
            <img src={galleryItem.image} alt={galleryItem.title} />

            {galleryItem.caption && <GridListTileBar title={galleryItem.caption} />}
          </GridListTile>
        ))}
      </GridList>
    );
  }
}

export default Gallery;
