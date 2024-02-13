<!-- # FRONT -->

# <=====> API <========> API <========>

` http://localhost/`

# пользовательские страницы

```bash
/ => главная страница
/booking => страница бронирования
/restaurants => страница ресторанов
```

# Административные страницы

/settings => общие настройки страницы

## в общих настройках можно

- изменить видео на главной странице
- изменить файл меню на странице ресторанов

/create/news => создание новости
/create/rooms => создание комнаты
/create/service => создание сервиса

<!-- # BACK -->

`# <=====> API <========> API <========> API <=====>`
`хост => http://localhost:4000`

`Авторизация => через JWT TOKEN, токен даётся на 30 мин`
`путь => /auth`

`## <=====> NEWS <=====> NEWS <=====>`

```bash
### GET запросы
news/id/:id  // поиск новости по id
news/all  // поиск всех новостей

news/delete/:id // удаление новости по id

### POST запросы
news/create // создание новости
news/update // обновление информации в новости

```
