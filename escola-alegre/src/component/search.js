import React from "react";
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      borderWidth: '1px',
      borderColor: "#000",
      width: "auto",
      alignSelf: "center",
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      }
    },
    searchIcon: {
      position: 'absolute',
      right: '-1em',
      top: '0.3em',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: "20em",
      [theme.breakpoints.up('xs')]: {
        marginLeft: "-5em",
        width: '14em',
        '&:focus': {
          width: '15em',
        },
      },
    },
  }));

const Search = ({ placeholder, onChange }) => {
    const classes = useStyles();
    return (
        <div className={classes.search}>
            <InputBase
                placeholder={placeholder}
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={event => onChange(event.target.value)}
            />
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
        </div>
    );
}

export default Search;