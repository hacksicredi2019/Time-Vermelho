import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/Button';
import Button from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from "@reach/router";

const useStyles = makeStyles(theme => ({
  card: {
    margin: "0.5em",
    [theme.breakpoints.up('sm')]: {
      position: "relative",
      display: "block",
      width: "100%"
    }
  },
  compare: {
    backgroundColor: "green",
    color: "#fff",
    fontSize: '15px',
    '&:focus': {
      color: '#000',
      backgroundColor: "green"
    },
    '&:hover': {
      color: '#000',
      backgroundColor: "green"
    },
  },
  button: {
    fontSize: '16px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  label: {
    fontSize: '1.5em'
  },
  rateValue: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: "#ff3300"
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  padding: {
    marginLeft: '1.5em'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MaterialCard({ perfil, index, avatar, email, telefone, data, endereco, name, onCompare, onDetailed, rate, children }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [comparable, setComparable] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log("clicado");
  };

  const handleCompare = () => {
    setComparable(!comparable);
    index !== undefined && onCompare(index);
  }

  return (
    <Card className={classes.card}>
      {perfil ?
      <React.Fragment>
        <CardHeader
          avatar={
            <Avatar aria-label="foto da escola" className={classes.avatar}>
              {avatar}
            </Avatar>
          }
          title={name}
          subheader={endereco}
        />
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend" className={classes.label}>Média de avaliações: <span className={classes.rateValue}>2</span></Typography>
          <Rating name="read-only" aria-label="avaliação" precision={0.5} value={2} readOnly />
        </Box>
        <div className={classes.padding}>
          <Typography component="legend" className={classes.rateValue}>{name}</Typography>
          <Typography component="legend">Contato: (51) 3228-9597 | Horário: 08h00 às 18h00</Typography>
          <Typography component="legend">Email: girafinhatravessa2010@hotmail.com</Typography>
        </div>
        <div className={classes.padding}>
          <Typography component="legend">Endereço: {endereco}</Typography>
          <Typography component="legend" className={classes.label}>Bolsas: <span className={classes.rateValue}>3</span></Typography>
          <Typography component="legend" className={classes.label}>Vagas: <span className={classes.rateValue}>10/150</span></Typography>
        </div>
        {children}
         </React.Fragment> :
         <React.Fragment>
           <CardHeader
              avatar={
                <Avatar aria-label="foto da escola" className={classes.avatar}>
                  {avatar}
                </Avatar>
              }
              title={name}
              subheader={endereco}
            />
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">{rate}</Typography>
            <Rating name="read-only" aria-label="avaliação" precision={0.5} value={rate} readOnly />
          </Box>
          <CardActions disableSpacing>
            <IconButton aria-label="adicionar aos favoritos" onClick={() => handleExpandClick()}>
              <FavoriteIcon color={expanded ? "error" : undefined} />
            </IconButton>
            <Button color="inherit"  area-label="comparar" className={[classes.button, comparable ? classes.compare : undefined]} endIcon={<CompareArrowsIcon />} onClick={() => handleCompare()}>Comparar</Button>
            <Button color="inherit" area-label="ver mais" className={classes.button} onClick={() => onDetailed && index && onDetailed(index)}>
              <Link to={`/perfil/${index}`} params={data} className={classes.link}>VER MAIS</Link>
            </Button>
          </CardActions>
         </React.Fragment>
        }
    </Card>
  );
}