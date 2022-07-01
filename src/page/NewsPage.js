import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

const NewsPage=({match}) =>{
    //카테고리 선택 안되면 all
    const category = match.params.category ||'all';

    return(
        <>
        <Categories />
        <NewsList category={category} />
        </>
    );
};

export default NewsPage;