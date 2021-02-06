const getGithubProfileRepos = (username) => {
    return fetch(
        'https://api.github.com/users/' + username + '/repos'
    )
    .then((res) => res.json())
    .then((result) => {
        return result
    })
    .catch(error => {
        return "Username cannot be retrieved"
    })
}

const getRepoReadme = (username, repo) => {
    return fetch(
        'https://api.github.com/repos/' + username + '/' + repo + '/readme'
    )
    .then((res) => res.json())
    .then((result) => {
        return result
    })
    .catch(error => {
        return "Repository README cannot be retrieved"
    }
    )
}

export default{
    getGithubProfileRepos,
    getRepoReadme
}