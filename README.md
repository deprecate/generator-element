<h1 align="center">Yeoman Generator Webcomponent</h1>
<p align="center">
  <img src='https://github.com/yeoman/media/blob/master/optimized/yeoman-150x150-opaque.png'  alt='yeoman logo'/>
</p>
<p align="center">
  <a title='Build Status' href="https://travis-ci.org/eromano/webcomponent-generator-element">
    <img src='https://travis-ci.org/eromano/webcomponent-generator-element.svg?branch=master'  alt='travis Status' />
  </a>
  <a  alt='Coverage Status' href='https://coveralls.io/r/eromano/webcomponent-generator-element'>
    <img src='https://img.shields.io/coveralls/eromano/webcomponent-generator-element.svg' alt='Coverage Status' />
  </a>
  <a  alt='license' href='https://github.com/eromano/webcomponent-generator-element/blob/master/LICENSE'>
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' alt='license' />
  </a>
  <a alt='npm version' href="https://nodei.co/npm/generator-wbelement/">
    <img src="http://img.shields.io/npm/v/generator-wbelement.svg" alt='npm version' >
  </a>
      <a alt='downloads stats' href='https://www.npmjs.com/package/generator-wbelement'>
        <img src='https://img.shields.io/npm/dm/generator-wbelement.svg' alt='downloads stats' />
      </a>
    <a  alt='issue stats closed' href='http://issuestats.com/github/eromano/webcomponent-generator-element'>
      <img src='http://issuestats.com/github/eromano/webcomponent-generator-element/badge/issue' alt='issue stats' />
    </a>
</p>
> A Yeoman Generator that provides a functional boilerplate to easily create Custom Elements using :

 * [Polymer](http://www.polymer-project.org/) Version 0.5 or 1.4
 * [X-Tag](http://x-tags.org/) Version 1.0.0 or 1.5.0
 * [VanillaJS](http://vanilla-js.com/)

## Installation and use

First, install [Yeoman](http://yeoman.io) and generator web component using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```sh
npm install -g yo
npm install -g generator-wbelement
```

##  Generate your new project:

``` 
    $ yo wbelement
```

``` 
    1. What do you want to use?
    2. Which version?
    3. What's the GitHub repository?
    4. What's your GitHub username?
    5. What's the name of your element?
    6. How would you describe the element?
    7. What's your GitHub username? componentCreatorAccount
    8. Author's Name ?
    9. Author's Email ?
   10. Author's Homepage ?
   11  Package keywords (comma to split) 
   12. Do you want to include lifecycle callbacks?
   13. Do you want to include some useful Grunt tasks?
   14. Which license do you want to use?
```

Which will generate the following project structure:


    ├── .editorconfig
    ├── .gitignore
    ├── bower.json
    ├── package.json
    ├── Gruntfile.js
    ├── README.md
    ├── LICENSE
    ├── demo/
    ├── test/my-element-tests.html
    └── src/my-element.html

    
And run `bower install` & `npm install` for you to fetch all dependencies.

## Develop command list 

* To test your project

    ```sh
    $ grunt test
    ```

* To build the distribution files before releasing a new version.

    ```sh
    $ grunt build
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```
    
## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## History

For detailed changelog, see [Releases](https://github.com/eromano/webcomponent-generator-element/releases).
This project is a fork updated from [webcomponents/generator-element](https://github.com/webcomponents/generator-element).

## Contributors

Contributor | GitHub profile | Twitter profile |
--- | --- | ---
Eugenio Romano (contributor)| [Eugenio Romano](https://github.com/eromano) | [@RomanoEugenio](https://twitter.com/RomanoEugenio)
Zeno Rocha  (creator) | [Zeno Rocha](https://github.com/zenorocha)| [@zenorocha](https://twitter.com/zenorocha)
Addy Osmani (creator) | [Addy Osmani](https://github.com/addyosmani)| [@addyosmani](https://twitter.com/addyosmani)

All contributors[contributors](https://github.com/eromano/webcomponent-generator-element/graphs/contributors).

## License
[MIT](https://github.com/eromano/webcomponent-generator-element/blob/master/LICENSE)
 
