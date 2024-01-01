import { useEffect, useState } from "react";
import Blog from "../ShortBlog/Blog";
import "./mostView.css";

interface Blog {
  id: number;
  title: string;
  body: string;
  img: string;
  date: string;
  url: string;
}

const MostView = () => {
  const [index, setIndex] = useState(0);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch(
      "https://codelearn-api-72b30d70ca73.herokuapp.com/api/web/posts/most_viewed?limit=3",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const formattedBlogs = data.posts.map((post: any) => ({
            id: post.id,
            title: post.title,
            body: post.body,
            img: "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
            date: post.created_at,
            url: `/article/${post.slug}`,
          }));

          setBlogs(formattedBlogs);
        } else {
          console.error("Error fetching MostView Blog data:", data.error);
          alert("Not success");
        }
      })
      .catch((error) => {
        console.error("Error fetching MostView Blog data:", error);
        alert("error");
      });
  }, []);

  if (blogs.length === 0) {
    return null; // or some loading state, or an error message
  }

  const changeBlog = (newIndex: number) => {
    setIndex(newIndex);
  };

  const nextBlog = () => {
    setIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const prevBlog = () => {
    setIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };

  return (
    <div className="MostView">
      <h1>Most view</h1>
      <div className="laptopBlogs">
        <Blog
          id={blogs[0].id}
          title={blogs[0].title}
          body={blogs[0].body}
          url={blogs[0].url}
          date={blogs[0].date}
          img={blogs[0].img}
        />
        <Blog
          id={blogs[1].id}
          title={blogs[1].title}
          body={blogs[1].body}
          url={blogs[1].url}
          date={blogs[1].date}
          img={blogs[1].img}
        />
        <Blog
          id={blogs[2].id}
          title={blogs[2].title}
          body={blogs[2].body}
          url={blogs[2].url}
          date={blogs[2].date}
          img={blogs[2].img}
        />
      </div>
      <div className="mobileBlogs">
        {blogs.map((_blog, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => changeBlog(i)}
          ></span>
        ))}
        <Blog
          id={blogs[index].id}
          title={blogs[index].title}
          body={blogs[index].body}
          url={blogs[index].url}
          date={blogs[index].date}
          img={blogs[index].img}
        />
        <div className="arrow">
          <div className="prev" onClick={prevBlog}>
            {"<"}
          </div>
          <div className="next" onClick={nextBlog}>
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostView;
