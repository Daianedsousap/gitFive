export class GithubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`
        // essa url acima é o endpoint, ou seja, o local onde vai chegar com a aplicação.
        return fetch(endpoint)
            .then(data => data.json())
            .then(({ login, name, public_repos, followers }) => ({
                login,
                name,
                public_repos,
                followers
            }))
        // fetch - pega as coisas da internet
    }

    // o github fornece uma API com alguns dados do usuário em formato JSON que pode ser usado para comunicar com a aplicação

}