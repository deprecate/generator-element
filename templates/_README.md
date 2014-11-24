# &lt;<%= githubRepo %>&gt;

> <%= elementDescription %>

## Demo

[Check it live!](http://<%= githubUser %>.github.io/<%= githubRepo %>)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install <%= githubRepo %> --save
```

Or [download as ZIP](https://github.com/<%= githubUser %>/<%= githubRepo %>/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import Custom Element:

    ```html<% if (boilerplate == 'VanillaJS') { %>
    <link rel="import" href="bower_components/<%= githubRepo %>/src/<%= elementName %>.html"><% } else { %>
    <link rel="import" href="bower_components/<%= githubRepo %>/dist/<%= elementName %>.html"><% } %>
    ```

3. Start using it!

    ```html
    <<%= elementName %>></<%= elementName %>>
    ```

## Options

Attribute     | Options     | Default      | Description
---           | ---         | ---          | ---
`foo`         | *string*    | `bar`        | Lorem ipsum dolor.

## Methods

Method        | Parameters   | Returns     | Description
---           | ---          | ---         | ---
`unicorn()`   | None.        | Nothing.    | Magic stuff appears.

## Events

Event         | Description
---           | ---
`onsomething` | Triggers when something happens.

## Development<% if (grunt) { %>

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt server
    ```<% if (boilerplate != 'VanillaJS') { %>

* To build the distribution files before releasing a new version.

    ```sh
    $ grunt build
    ```<% } %>

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```<% } else { %>

In order to run it locally you'll need to fetch some dependencies.

* Install [Bower](http://bower.io/):

    ```sh
    $ [sudo] npm install -g bower
    ```

* Install local dependencies:

    ```sh
    $ bower install
    ```<% } %>

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/<%= githubUser %>/<%= githubRepo %>/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
