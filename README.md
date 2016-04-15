<h1 align="center">Yeoman Generator Webcomponent</h1>
<p align="center">
  <img title="ci alarm" src='https://github.com/yeoman/media/blob/master/optimized/yeoman-150x150-opaque.png' />
</p>
<p align="center">
  <a title='Build Status' href="https://travis-ci.org/eromano/webcomponent-generator-element">
    <img src='https://travis-ci.org/eromano/webcomponent-generator-element.svg?branch=master' />
  </a>
  <a href='https://coveralls.io/r/eromano/webcomponent-generator-element'>
    <img src='https://img.shields.io/coveralls/eromano/webcomponent-generator-element.svg' alt='Coverage Status' />
  </a>
  <a href='https://github.com/eromano/ci-alarm/blob/master/LICENSE'>
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' alt='license' />
  </a>
</p>

> A Yeoman Generator that provides a functional boilerplate to easily create Custom Elements using :

 * [Polymer](http://www.polymer-project.org/) Version 0.5 or 1.4
 * [X-Tag](http://x-tags.org/) Version 1.0.0 or 1.5.0
 * [VanillaJS](http://vanilla-js.com/)

## Install

Install this generator using NPM:

```sh
$ [sudo] npm install -g generator-wbelement
```

## Getting Started

```
    $ mkdir name-new-webcomponent
```

```
    $ cd name-new-webcomponent    
```

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
    7. Do you want to include lifecycle callbacks?
    8. Do you want to include some useful Grunt tasks?
```

Which will generate the following project structure:



    ├── .editorconfig
    ├── .gitignore
    ├── bower.json
    ├── package.json
    ├── Gruntfile.js
    ├── demo/
    ├── test/
    └── src/my-element.html



    
And run `bower install` & `npm install` for you to fetch all dependencies.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## History

For detailed changelog, see [Releases](https://github.com/eromano/webcomponent-generator-element/releases).
This project is a fork updated from [webcomponents/generator-element](https://github.com/webcomponents/generator-element).
Contributors[contributors](https://github.com/eromano/webcomponent-generator-element/graphs/contributors).

## Contributors

Contributor | GitHub profile | Twitter profile |
--- | --- | ---
Eugenio Romano (contributor)| [Eugenio Romano](https://github.com/eromano) | [@RomanoEugenio](https://twitter.com/RomanoEugenio)
Zeno Rocha  (creator) | [Zeno Rocha](https://github.com/zenorocha)| [@zenorocha](https://twitter.com/zenorocha)
Addy Osmani (creator) | [Addy Osmani](https://github.com/addyosmani)| [@addyosmani](https://twitter.com/addyosmani)
