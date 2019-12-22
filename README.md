# blog

> Coding for ACM/Software Association to share learning experience.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Before Coding

Please read the style guide before coding on [Vue Style Guide](https://vuejs.org/v2/style-guide/index.html).
Teamwork should strictly followed by this guide.

### Attention

Please use these aliases instead of paths.

```javascript
'@': resolve('src')
'assets': resolve('src/assets')
'components': resolve('src/components')
'common': resolve('src/components/common')
'pages': resolve('src/pages')
```

## Before Commit

```bash
# fix warning by eslint
npm run lint
```

Please use eslint to fix warning in code before commit.

## Commit Message

```bash
# install commitizen
npm install -g commitizen
```

Please install ``commitizen`` to standardize your commit message.
If you do not know how to use ``git``, please read this [article](https://blog.csdn.net/qq_26377547/article/details/103227947) and try it by yourself.

```bash
# use 'git cz' to replace 'git commit'
git cz
```
