import { useState, useEffect } from "react";
import { Search, Calendar, ArrowRight } from "lucide-react";

export default function News() {
    const [news, setNews] = useState<NewsCard[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const loadNewsData = async () => {
            const newsData = await NewsDataCard();
            setNews(newsData);
        };

        loadNewsData();
    }, []);

    const truncateDescription = (description: string, wordLimit: number) => {
        const words = description.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return description;
    };

    const filteredNewsData = news.filter((NEWS) =>
        NEWS.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Enhanced Hero Section */}
            <div className="relative h-[30rem] w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                        News & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Updates</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Stay informed with the latest announcements and developments
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Enhanced Search Bar */}
                    <div className="max-w-md mx-auto mb-12 relative">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search news articles..."
                                className="w-full pl-12 pr-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* News Grid */}
                    {filteredNewsData.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredNewsData.slice(0, 3).map((NEWS) => (
                                <article
                                    key={NEWS.id}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:translate-y-[-4px]"
                                >
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={urlFor(NEWS.newsImage).url()}
                                            alt={NEWS.title}
                                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Title */}
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                            {NEWS.title}
                                        </h2>

                                        {/* Description */}
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                                            {truncateDescription(NEWS.smallDescription, 25)}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                {NEWS.date || "Recent"}
                                            </div>
                                            <button className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                                                Read More
                                                <ArrowRight className="h-4 w-4 ml-1" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        /* No Results State */
                        <div className="text-center py-16">
                            <div className="max-w-md mx-auto">
                                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                    <Search className="h-8 w-8 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    No news found
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Try adjusting your search terms or browse all updates
                                </p>
                            </div>
                        </div>
                    )}

                    {/* View All Button */}
                    {filteredNewsData.length > 0 && (
                        <div className="text-center mt-12">
                            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">
                                View All News
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}