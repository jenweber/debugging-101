$('document').ready(function (){
    let myConfig = new Config('index.html', 'node', {something: true})
    fetch('http://example.com/movies.json');
});

class Config {
  constructor(scriptPath, env, options) {
    this.scriptPath = scriptPath
    this.env = env
    this.options = options
  } 

  get toJson() {
    return JSON.stringify({
      path: this.scriptPath,
      env: this.env,
      options: this.options
    })
  } 
}
