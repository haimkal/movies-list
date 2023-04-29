export class MovieService {


    static async getMovies(page) {
        const res = await fetch('https://moviesdatabase.p.rapidapi.com/titles?page=' + page, {
            method: 'GET',
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': 'e2593c173emshecc51b5dce7b240p132ec5jsn98ebe2c78b9e',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        });
        if (res.ok) {
            const result = await res.json();
            return result;

        } else {
            return null
        }
    }

    // static async getMovie(id) {
    //     const res = await fetch('https://moviesdatabase.p.rapidapi.com/titles/tt0001922')
    // }
}

