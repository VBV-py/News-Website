import { useEffect, useState, useCallback } from "react";
import NewsCard from "../components/NewsCard";
import CategoryButtons from "../components/CategoryButtons";
import Footer from "./Footer";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY; 
const BASE_URL = "https://newsapi.org/v2/top-headlines";

const Home = () => {
    const [category, setCategory] = useState("general");
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchnews = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}`);
            const data = await response.json();

            if (data && data.articles) {
                setArticles(data.articles);
            } else {
                console.error("Invalid API response:", data);
                setArticles([]);
            }
        } catch (error) {
            console.error("Error fetching news", error);
            setArticles([]);
        } finally {
            setLoading(false);
        }
    }, [category]); 

    useEffect(() => {
        fetchnews();
    }, [category, fetchnews]); 

    return (
        <div className="container p-4 min-h-[100px] bg-yellow-200">
            <CategoryButtons setCategory={setCategory} /> 
            
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded gap-5 bg-white shadow-black p-3">
                    {articles.map((article, index) => (
                        <NewsCard key={index} article={article} />
                    ))}
                </div>
            )}

            <div className="flex flex-col min-h-screen">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
