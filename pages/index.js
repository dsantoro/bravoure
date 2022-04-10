import { GenericLayout } from "../layout/GenericLayout";
import { Container, Hero, Slider, SliderCard, HighLight } from "../components";

import poster from "../assets/bbt.jpg";

export default function Home({ result, serieDataResult }) {
  console.log(serieDataResult);
  return (
    <>
      <Hero image={poster} />
      <Container>
        <HighLight
          season={serieDataResult.Season}
          title={serieDataResult.Title}
          plot="Follows the awkward experiences and racy tribulations of a modern-day African-American woman."
        />
        <Slider>
          {result.map((item, index) => (
            <SliderCard
              key={item.value.imdbID}
              episodeInfo={item.value}
              index={index}
            />
          ))}
        </Slider>
      </Container>
    </>
  );
}

Home.Layout = GenericLayout;

export async function getStaticProps() {
  const serieData = await fetch(
    "https://www.omdbapi.com/?apikey=171d0f54&type=series&i=tt0898266&season=1"
  );
  const serieDataResult = await serieData.json();

  const episodes = Array.from(
    { length: serieDataResult.Episodes.length },
    (v, k) => k + 1
  );

  const result = await Promise.allSettled(
    episodes.map(async (episode) => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=171d0f54&type=series&i=tt0898266&season=1&episode=${episode}`
        );
        const data = await response.json();
        return data;
      } catch (err) {
        console.error(`I'm down, this time. ${err}`);
      }
    })
  );
  return {
    props: {
      result,
      serieDataResult,
    },
  };
}
