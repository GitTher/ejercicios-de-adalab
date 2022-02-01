const GetFromApi = () => {
    return fetch('https://api.tvmaze.com/search/shows?q=friends')
        .then((response) => (response.json()))
        .then((data) => {
            const cleanData = data.map((show) => {
                return {
                    name: show.show.name,
                    score: show.score,
                    genres: show.show.genres,
                    id: show.id,
                };
            });
            return cleanData;
        });
};
export default GetFromApi