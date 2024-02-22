import { Card, Typography } from "@mui/material";
import { Personagem } from "../models/personagem.model";

interface CardProps {
  personagens: Personagem;
}

export function CardPersonagem(props: CardProps) {
  return (
    <>
      <Card style={{ margin: "10px" }} >
        <Typography variant="h5">Nome: {props.personagens.name}</Typography>
        <Typography variant="h5">Genero: {props.personagens.gender}</Typography>
        <Typography variant="h5">Casa: {props.personagens.house}</Typography>
        <Typography variant="h5">
          Espécie: {props.personagens.species}
        </Typography>
        <Typography variant="h5">
          Patrono: {props.personagens.patronus}
        </Typography>
        <Typography variant="h5">
          Aniversário: {props.personagens.dateOfBirth}
        </Typography>
        <Typography variant="h5">Ator: {props.personagens.actor}</Typography>
      </Card>
    </>
  );
}
