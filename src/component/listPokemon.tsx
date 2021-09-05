import { createStyles, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, Theme } from "@material-ui/core";
import { Star, StarBorderOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { PokeArray, PokeResponse } from "../models/api";
import { ListPokemon as ListPokemonService, ShowPokemon } from "../services/pokeapi";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: 752,
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
    }),
);

function generate() {
    const [pokemonResponse, setPokemonResponse] = useState<PokeResponse>({
        count: 0,
        next: '',
        previous: '',
        results: []
    })
    const [pokemon, setPokemon] = useState<PokeArray[]>([])
    useEffect(() => {
        const fetchPokemon = async () => {
            const result = await ListPokemonService({ limit: 20, offset: 0 })
            setPokemonResponse(result);
            setPokemon(result.results);
        }
        fetchPokemon();
    }, [])

    console.log('PokeResponse', pokemonResponse)
    console.log('pokemon', pokemon)

    const isFavorite = false;

    return pokemon.map((value, index) =>
        <ListItem>
            <ListItemText
                primary={value.name}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="star">
                    {isFavorite ? <StarBorderOutlined /> : <Star />}
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

function ListPokemon() {
    const classes = useStyles();

    return (
        <List>
            {generate()}
        </List>
    )
}

export default ListPokemon;