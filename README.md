# Yeoman Generator<br> for Custom Elements<br>

[![NPM version](https://badge.fury.io/js/generator-element.svg)](http://badge.fury.io/js/generator-element) [![Build Status](https://secure.travis-ci.org/webcomponents/generator-element.svg?branch=master)](https://travis-ci.org/webcomponents/generator-element) [![Dependency Status](https://david-dm.org/webcomponents/generator-element.svg?theme=shields.io)](https://david-dm.org/webcomponents/generator-element)

![WC + Yeoman](http://f.cl.ly/items/0Z0Q180C0F0a1h0y3v2S/yo.jpg)

> A Yeoman Generator that provides a functional boilerplate to easily create Custom Elements using [Polymer](http://www.polymer-project.org/), [X-Tag](http://x-tags.org/) or [VanillaJS](http://vanilla-js.com/).

> All templates are based in the boilerplates authored by the [WebComponent.org team](https://github.com/webcomponents/):

> * [Polymer Boilerplate](https://github.com/webcomponents/polymer-boilerplate)
> * [X-Tag Boilerplate](https://github.com/webcomponents/x-tag-boilerplate)
> * [VanillaJS Boilerplate](https://github.com/webcomponents/element-boilerplate)

## Install

Install this generator using NPM:

```sh
$ [sudo] npm install -g generator-element
```

## Getting Started

![ScreenShot](http://f.cl.ly/items/212D0e213K2T0z3m2T0L/ss.png)

There are two different generators available.

* The first one used to scaffold out new **individual elements**:

    ```sh
$ yo element
    ```

    ```
[?] What do you want to use?
[?] What's the name of your element?
[?] Do you want to include lifecycle callbacks?
    ```

    Which will generate the following file:

    ```
.
└── my-element.html
    ```

* The second one is used to scaffold an **entire project**:

    ```sh
$ yo element:repo
    ```

    ```
[?] What do you want to use?
[?] What's the GitHub repository?
[?] What's your GitHub username?
[?] What's the name of your element?
[?] How would you describe the element?
[?] Do you want to include lifecycle callbacks?
[?] Do you want to include some useful Grunt tasks?
    ```

    Which will generate the following project structure:

    ```
.
├── .editorconfig
├── .gitignore
├── bower.json
├── package.json
├── index.html
├── Gruntfile.js
└── src/my-element.html
    ```

    And run `bower install` & `npm install` for you to fetch all dependencies.

> _**Note**: files will be generated in the current directory, so be sure to change to a new directory before running those commands if you don't want to overwrite existing files._

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, see [Releases](https://github.com/webcomponents/generator-element/releases).

## Team

This project is maintained by these people and a bunch of awesome [contributors](https://github.com/webcomponents/generator-element/graphs/contributors).

[![Zeno Rocha](https://2.gravatar.com/avatar/e190023b66e2b8aa73a842b106920c93)](https://github.com/zenorocha) | [![Addy Rocha](https://2.gravatar.com/avatar/96270e4c3e5e9806cf7245475c00b275)](https://github.com/addyosmani)
--- | --- | --- | --- | ---
[Zeno Rocha](https://github.com/zenorocha) | [Addy Osmani](https://github.com/addyosmani)

## License

[MIT License](http://webcomponentsorg.mit-license.org/) © WebComponents.org
