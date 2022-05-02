import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import { Grid } from '@nextui-org/react';

import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

// Al momento de compilar las interfaces no existen son 0 lineas de codigo en js por lo q referencia un objeto no lo crea
interface Props{
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout>
      <Grid.Container 
        gap={ 2 } 
        justify="flex-start"
      >
        {
          pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={ pokemon.id } />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
// Siempre q sepamos de antemano que la data que necesitamos para renderizar la pagina esta disponible antes de que el usuario la solicite, podemos usar getStaticProps
export const getStaticProps: GetStaticProps = async () => {

  const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151')  

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }));

  

  // console.log(data);
  

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
