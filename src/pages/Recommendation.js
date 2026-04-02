import NavBar from "../components/NavBar";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Recommendation() {
  useDocumentTitle("Recommendation");
  const Page = "recommendation";

  return (
    <main>
      <NavBar Page={Page}></NavBar>

      <section className="rcmd">
        <div>
          <h1>网页简介</h1>
          <p>
            一个基于 React 的电影搜索与观影记录应用。用户可以通过 OMDb API
            搜索电影、查看详情、为电影打分，并将“已观看”列表持久化到浏览器本地存储，记录自己对电影的感受！
          </p>
          <hr />
          <h1>注意事项</h1>
          <p>
            注意，OMDB API一天只能调用1000次，如果用了一段时间后出现“Something
            went wrong with fetching movies”，很可能是API调用次数已用完。
          </p>
          <p>
            Note that the OMDB API can only be called 1000 times per day. If you
            encounter the error message "Something went wrong with fetching
            movies" after using it for some time, it is likely that the number
            of API calls has been exhausted.
          </p>
          <p>
            由于OMDB
            API功能的限制，该网站暂时不支持非英文字母查询，对此造成的不便敬请谅解
          </p>
        </div>
      </section>
    </main>
  );
}
