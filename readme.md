# TypeScript BackEnd Core Eğitim Dökümanı

## Bu kurs kimler için?

- Junior ve Mid-Level Geliştiriciler için uygun.
- REST API uygulama geliştirmek konusunda ilgisi olan kişiler için uygun

## Neye ihtiyacımış var?

- Çalışan bir MongoDB sunucusu
- Postman
- Uygulama geliştirme için bir IDE (VSCode)
- Bir internet tarayıcısı
- Paket yönetim uygulaması (Yarn veya Npm)
- Node.js

## Uygulamanın Kurulumu İçin

```bash
  npm init --y
```

## Sisteme TypeScript Ekelemesi İçin

```bash
npx typescript --init
```

## Gerekli Bağımlılıklar

1. [dotenv](https://www.npmjs.com/package/dotenv) Bağımlılığı olmayan bir environment variables yönetim paketidir.
2. [express](http://www.npmjs.org/package/express) Http sunucusu için kullanılacak pakettir.
3. [joi](http://www.npmjs.org/package/joi) Çok popüler bir şema doğrulama paketidir. Mongoose şemalarının doğrulamasında kullanılacaktır.
4. [http-status](http://www.npmjs.org/package/http-status) Http durum kodlarının interaktif kullanımını sağlayan pakettir.
5. [cors](http://www.npmjs.org/package/cors)
   çeşitli seçeneklerle CORS'u etkinleştirmek için kullanılabilecek bir express ara yazılımı sağlamaya yönelik bir node.js paketidir.
6. [mongoose](http://www.npmjs.org/package/mongoose) MongoDB için kullanılacak olan ORM aracıdır.
7. [pino](http://www.npmjs.org/package/pino) Konsola basılacak olan logların şekillendirilmesi için kullanılacak pakettir.
8. [crypto-js](http://www.npmjs.org/package/crypto-js) Parola ve AccessToken gibi şifreli olarak kullanılması gereken verilerin şifelenmesi için kullanılacak pakettir.
9. [jsonwebtoken](http://www.npmjs.org/package/jsonwebtoken) Kullanıcı oturumlarının kontrolleri için üretilecek olan tokenların üretilmesini sağlayacak pakettir.
10. [winston](http://www.npmjs.org/package/winston) Hata ve aksiyon loglarının dosyalara yazılması için kullanılacak pakettir.
11. [helmet](http://www.npmjs.org/package/helmet) Http istek ataklarını önlemek için kullanılacak.

```bash
yarn add dotenv express joi http-status cors helmet mongoose pino pino-pretty dayjs crypto-js jsonwebtoken winston
```

## Gerekli Uygulama Geliştirme Bağımlılıkları

Uygulama geliştrime bağımlılıkları, yüklenen tüm paketlerin typescript ile kullanılmasını sağlamak amacıyla sisteme eklenir. Sadece DevDependencies olarak yüklenmelidir. Development ortamında kullanılacaktır ve Production ortam için gerekli değildir.

```bash
yarn add @types/body-parser @types/dotenv @types/cors @types/helmet @types/express @types/node @types/pino @types/mongoose @types/crypto-js @types/jsonwebtoken @types/http-status @types/joi ts-node typescript nodemon -D
```

## Workflow

![](./diagrams/data-flow.png)

## Access & refresh token flow

![](./diagrams/refresh-token-flow.png)

## Klasör Yapısı

# v1

- [src/](./v1/src)
  - [api-routes/](./v1/src/api-routes)
    - [UserRoutes.ts](./v1/src/api-routes/UserRoutes.ts)
    - [index.ts](./v1/src/api-routes/index.ts)
  - [config/](./v1/src/config)
    - [Server.ts](./v1/src/config/Server.ts)
    - [index.ts](./v1/src/config/index.ts)
  - [controllers/](./v1/src/controllers)
    - [BaseController.ts](./v1/src/controllers/BaseController.ts)
    - [UserController.ts](./v1/src/controllers/UserController.ts)
  - [entities/](./v1/src/entities)
    - [BaseEntity.ts](./v1/src/entities/BaseEntity.ts)
    - [UserEntity.ts](./v1/src/entities/UserEntity.ts)
  - [errors/](./v1/src/errors)
    - [ApiError.ts](./v1/src/errors/ApiError.ts)
  - [loaders/](./v1/src/loaders)
    - [db.ts](./v1/src/loaders/db.ts)
    - [index.ts](./v1/src/loaders/index.ts)
  - [middlewares/](./v1/src/middlewares)
    - [ErrorHandling.ts](./v1/src/middlewares/ErrorHandling.ts)
    - [Validation.ts](./v1/src/middlewares/Validation.ts)
  - [models/](./v1/src/models)
    - [UserModel.ts](./v1/src/models/UserModel.ts)
  - [scripts/](./v1/src/scripts)
    - [logger/](./v1/src/scripts/logger)
      - [Error.ts](./v1/src/scripts/logger/Error.ts)
      - [index.ts](./v1/src/scripts/logger/index.ts)
  - [server/](./v1/src/server)
  - [services/](./v1/src/services)
    - [BaseService.ts](./v1/src/services/BaseService.ts)
    - [UserService.ts](./v1/src/services/UserService.ts)
  - [validations/](./v1/src/validations)
    - [UserValidation.ts](./v1/src/validations/UserValidation.ts)
  - [App.ts](./v1/src/App.ts)
