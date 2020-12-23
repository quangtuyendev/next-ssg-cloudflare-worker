import HomeComponents from "components/HomeComponents"

export async function getStaticProps() {
  const articles = await fetch(`${process.env.BASE_URL}/articles`).then(res => res.json());
  return {
    props: {
      articles
    },
    revalidate: 1,
  }
}

export default function HomeContainer({ articles }) {
  return <HomeComponents
    articles={articles}
  />
}

