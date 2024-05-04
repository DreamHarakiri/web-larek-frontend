# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:

- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:

- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск

Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```

## Сборка

```
npm run build
```

или

```
yarn build
```

## Архитектура проекта

Классы:

View -- Класс представления, чем он занимается:

- Отображает данные на странице
- Включает методы для отображения компонентов интерфейса и обработки событий взаимодействия с ними.

Model -- Слой данных, он занимается:

- Отвечает за хранение, изменение данных на сервере
- Метод получения списка товаров
- Метод получения корзины
- Метод добавления, удаления предметов из корзины
- Метод получаения полных данных о товарах
- Отправление товаров на оформление

Presenter -- прослойка, отвечающая за связь между представлением и данными

- Включает в себя методы, обрабатывающие события элементов
- Ссылается на View и Model

EventEmitter -- обеспечивает работу событий. Его функции: возможность установить и снять слушателей событий, вызвать слушателей при возникновении события:

- Использует интерфейс IEvents

```
interface IEvents {
    on<T extends object>(event: EventName, callback: (data: T) => void): void;
    emit<T extends object>(event: string, data?: T): void;
    trigger<T extends object>(event: string, context?: Partial<T>): (data: T) => void;
}
```

Имеет методы:

- Метод `on<T extends object>(eventName: EventName, callback: (event: T) => void)` - устанавливает обработчик на событие, аргументами принимает название события и колбэк
- Метод `off(eventName: EventName, callback: Subscriber)` - снимает обработчик с события, принимает название события и колбэк
- Метод `emit<T extends object>(eventName: string, data?: T)` - инициирует событие, принимает название события и объект с данными
- Метод `onAll(callback: (event: EmitterEvent) => void)` - подписывается на все события
- Метод `offAll()` - снимает все обработчики
- Метод `trigger<T extends object>(eventName: string, context?: Partial<T>)` - вызывает коллбек триггер, генерирующий событие при вызове

Api -- используется для получения и отправки данных/запросов на сервер

- Использует конструктор

```
 constructor(baseUrl: string, options: RequestInit = {}) {
        this.baseUrl = baseUrl;
        this.options = {
            headers: {
                'Content-Type': 'application/json',
                ...(options.headers as object ?? {})
            }
        };
    }
```

Аргументы конструктора:

- `baseUrl` - адрес для формирования запроса
- `options` - объект с настройками запроса

Имеет методы:

- Метод `get` - для отправки get запроса на сервер, аргументом принимает строку
- Метод `post` - для отправки post запроса на сервер, принимает аргументом строку и объект с данными для отправки

## Интерфейсы

Интерфейс карточки товара

```
interface ICard {
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number;
}

```

Интерфейс оплаты

```
interface IOrder {
	email: string;
	phone: string;
	address: string;
	payment: string;
	total: number;
	items: string[];
}

```
