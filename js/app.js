axios.get('https://api.github.com/users/octocat')
.then(response => {
    console.log(response.data)
    const data = response.data;

    const logo = document.getElementById('avatar');

    logo.innerTEXT = data.login;
  })
  .catch(error => {
    console.error('Error:', error);
  });
