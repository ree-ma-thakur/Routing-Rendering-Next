// "use client";
import NewsList from "@/components/news-list";
// import { useEffect, useState } from "react";

const NewsPage = async () => {
  // For client side data fetching
  // const [error, setError] = useState();
  // const [loading, setLoading] = useState(false);
  // const [news, setNews] = useState();

  // useEffect(() => {
  // async function fetchNews() {
  //   setLoading(true);
  //   const response = await fetch("http://localhost:8080/news");
  //   setLoading(false);
  //   if (!response.ok) {
  //     setError("Failed to fetch news!");
  //   }
  //   const news = await response.json();
  //   setNews(news);
  // }
  // fetchNews();
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // let newsContent;

  // if (news) {
  //   newsContent = <NewsList news={news} />;
  // }

  // Use this directly inside RSC not in useEffect for server side data fetching
  const response = await fetch("http://localhost:8080/news");
  if (!response.ok) throw new Error("Failed to fetch news");
  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
