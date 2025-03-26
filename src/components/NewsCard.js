import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-6">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="news"
          className="w-50 h-48 object-cover mb-2 rounded"
        />
      )}
      <h2 className="text-lg font-bold text-black">{article.title}</h2>
      <p className="text-sm text-gray-800">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 font-semibold hover:underline mt-2 inline-block"
      >
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
