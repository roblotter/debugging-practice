async updateRepoFeatures(options, {repoItem}) {
  const { feature, status} = options
  const owner = repoItem.owner.login
  
  if (
    (status === 'on' && repoItem[`has_{feature}`] === false) || 
    (status === 'off' && repoItem[`has_{feature}`] === true)
  ) {
    debug(`Setting repository [${repoItem.name}] ${feature}: [${status}]`)
  }
}

// via https://twitter.com/liran_tal/status/1177614120583143426
