# QAOps, или почему тестировщик должен построить CI/CD.

Все мы любим небольшие релизы и микросервисы, благодаря которым они существуют(за что любим).
Ведь чем меньше наши сервисы, тем их больше, следовательно, мы выпускаем больше релизов. Но без автоматизации поставок они все застрянут в очереди
на деплой у команды эксплуатации, и, как только мы с этим столкнемся, наши микросервисы станут сервисами, а сервисы монолитными монстрами.
Что, в свою очередь, приводит к росту регрессии и количеству flaky тестов, которые убьют непрерывную интеграцию.

На примере нашей облачной распределенной системы я покажу, как выстроить процесс непрерывной поставки в условиях SLA 99.999 и перейти к микросервисам.

## Вступление
### Что мы хотим
Хотим CD для всех компонентов системы, а не для отдельных проектов и сервисов.
Полностью автоматический процесс от лабов(сотни окружений) до продакшена (десятки окружений).
Наш проект - API платформа, это значит сотни интеграций как внутри, так и снаружи. Также мы ограничены следующими требованиями:
- SLA 99.999%
- Разработчики не допускаются к процессу поставки на PRO
- Разработчики не контролируют процедуру поставки

## Основная часть
### Планирование релизов
- Как быть с зависимостями
- Как понять, что инфраструктура готова и можно деплоить

### Мониторинг
- Post deployment verification
- Как понять, что наш сервис работает

### Rainbow deployment
Rainbow deployment очень похож на Blue/Green, но вместо двух цветов мы можем использовать столько цветов сколько хотим.
Это позволит сделать нашу поставку болеее плавной, а в случае проблем мы затронем меньшее количество пользователей.

### Инструменты
Почему мы откзались от jenkins и перешли на spinnaker?

### CI/CD для CI/CD
Как доставлять инфраструктуру для непрерывной доставки?

## Заключение
### Что получаем?
Такой процесс CD открывает путь к микросервисам и маленьким релизам, что в свою очередь избавляет от огромной регрессии
и flaky тестов. Что повышает качество нашего ПО.
