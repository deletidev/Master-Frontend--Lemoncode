import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

import EditIcon from '@mui/icons-material/Edit';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { Button } from '@mui/material';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit } = props;

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.status} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="body1" gutterBottom sx={{ paddingTop: 2 }}>
            Best sentences:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {character.bestSentences}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          endIcon={<EditIcon />}
          onClick={() => onEdit(character.id)}
          sx={{ margin: 1 }}
        >
          Eddit
        </Button>
      </CardActions>
    </Card>
  );
};
