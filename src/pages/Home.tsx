import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../config/hook";
import { personagensThunk } from "../config/modules/personagem.slice";
import { Container, Grid } from "@mui/material";
import { CardPersonagem } from "../components/CardPersonagem";

export function Home() {
  const dispatch = useAppDispatch();
  const personagens = useAppSelector((state) => state.personagens);
  useEffect(() => {
    dispatch(personagensThunk());
  }, []);

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={4} md={3} xl={1} >
            {personagens.map((item) => (
              <CardPersonagem personagens={item} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
