# LESSON 2

## INLINE - инлайн-стили - это когда через атрибут style

значит надо создать объект со стилями ({prop: value;}) и передать его как значение атрибута style в элемент

!!! ВАЖНО !!! помните, что инлайн-стили - это хард код, используйте его с умом. Помним про приоритет селекторов и стилей
самый высокий - ничем не перебьется - !important
высокий (1000) - INLINE (через атрибут style)
средний - встроенные стили - через тег style
селекторы:
1 - id
2 - class
3 - tag

## Vanilla CSS / SCSS - в подключаемом файле (переменные, миксины) - глобальная видимость стилей

использовать: `className="selector"`

## CSS-modules - подключаемые файлы [name].module.css/scss через переменную (s || styles || classes)

локальная область видимости селекторов, !!! но только классов
использовать: `className={s.selector}`

### module COMPOSES for CSS || @extends for SCSS

```
.flex-rw {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}

.mySelector {
    composes: flex-rw;

    background: wheat;
}
```

### module VARIABLES - в отдельном файле

@value blue-color: blue;
подключаем как:

```
@value blue-color from './vars.module.css'
```

используем:

```
.mySelector {
    background: blue-color;
}
```

### GLOBAL in module

```
:global(.mySelector) {
  color: blue;
}
```

## Bootstrap

npm i bootstrap react-bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

## styled-components

npm i styled-components

import styled from "styled-components";
использовать:

```
const Styles = styled.div`
.selector1 {}
.selector2 {}`
```

## Импорт и использование изображений и свг-спрайтов

Оптимально для использования SVG иконок в React создать новый компонент.

Файл спрайта сформировать и положить в папку с изображениями

В папке components создать компонент Icons

```
// file Icons.js

import svg from './sprite.svg'

export function Icons({ name, className, color, stroke, width, height }) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use xlinkHref={`${svg}#${name}`}></use>
    </svg>
  )
}
```

Заимпортировать компонент Icons в другой компонент, где нужно отразить иконки и встроить компонент Icons, передав ему необходимые props

```
// file of your component

import { Icons } from '...../Icons'

export function myComponent() {
  return (
    <div className="footer__social-media">
      <a href="/twitter" aria-label="CSTonTwitter">
        <Icons name="twitter-icon" color="white" />
      </a>
      <a href="/facebook" aria-label="CSTonFacebook">
        <Icons name="facebook-icon" color="white" />
      </a>
      <a href="/instagram" aria-label="CSTonInstagram">
        <Icons name="instagram-icon" color="white" />
      </a>
      <a href="/youtube" aria-label="CSTonTwitter">
        <Icons name="youtube-icon" color="white" />
      </a>
      <a href="/dribbble" aria-label="CSTonDribbble">
        <Icons name="dribbble-icon" color="white" />
      </a>
      <a href="/github" aria-label="CSTonGithub">
        <Icons name="github-icon" color="white" />
      </a>
    </div>
  )
}
```
