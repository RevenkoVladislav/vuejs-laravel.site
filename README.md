# Учебный проект на Vue.js + Laravel
Небольшое **SPA приложение (CRUD)** для работы с базой данных.
Все операции выполняются асинхронно через **API без перезагрузки страницы**.

![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## Использованные технологии:
| Технология         | Назначениe                      |
|--------------------|---------------------------------|
| **Laravel v.12**   | Backend + api                   |
| **Vue.js v.2.7**   | Frontend (SPA)                  |
| **webpack.mix.js** | Сборка frontend                 |
| **Vue-router v.3** | Маршрутизация                   |
| **Axios**          | Http запросы к API (`/api.php`) |
| **Vuex**           | Централизованное хранилище      |
| **bootstrap**      | Базовая стилизация              |

## Возможности:
- Просмотр списка записей
- Создание, редактирование и удаление через AJAX
- Динамическая маршрутизация без перезагрузки страницы
- Отделение логики состояния (Vuex) и отображения (компоненты)

## Цель проекта:

Изучение взаимодействия Laravel API и Vue.js при создании одностраничных приложений

## Скриншоты:
<img width="1700" height="415" alt="people" src="https://github.com/user-attachments/assets/4cb5b706-4063-42cd-b360-0d0ab27ca577" />
<img width="491" height="305" alt="add" src="https://github.com/user-attachments/assets/0490d95b-f8b0-4930-9f7f-9a25b0480c51" />
<img width="469" height="279" alt="edit" src="https://github.com/user-attachments/assets/ebc97f92-9a15-47ea-af29-2be907310eba" />

## Установка:
```bash
# клонировать репозиторий
git clone https://github.com/RevenkoVladislav/vuejs-laravel.site.git
#Установка зависимостей
composer install
#Установка npm зависимостей
npm install
#сборка фронтенда
npm run dev
#запуск встроенного сервера
php artisan serve
```
