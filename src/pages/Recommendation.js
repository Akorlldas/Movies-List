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
        </div>
      </section>
    </main>
  );
}
