# star-react
repository for workshop about React.JS in S2IT company (my current job).

# objectives
This project was created using React.JS (and just it) for demonstrate how create a component and how use they in an app.

# simplicity
For didadictcs purposes the project dont use Node, NPM or things like that! Just React.JS! 

# run...
HelloWord example can be runned just open html in browser
StarWars apps need run in webserver (like apache, nginx) because components are loaded by XHR request
If u prefere, run nginx in a docker building and running a Dockerfile:

```
docker build . -t star-react
docker run -d -p 80:80 star-react
```

open http://localhost !!!

or.. [run a demo http://damianijr.github.io/star-react/](http://damianijr.github.io/star-react/)


# next features
Maybe we have a new version for this workshop approaching react components lifecycle, flux, ES7?

Feel free to contributed with code and suggestions!

# contacts
damianijr@gmail.com
